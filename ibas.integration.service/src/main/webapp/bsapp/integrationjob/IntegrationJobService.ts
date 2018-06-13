/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace integration {
    export namespace app {
        /** 集成任务服务 */
        export class IntegrationJobService extends ibas.ServiceApplication<IIntegrationJobServiceView, ibas.IBOServiceContract>  {
            /** 应用标识 */
            static APPLICATION_ID: string = "cc6ba9f8-bae5-4a44-ad1a-db406de60da5";
            /** 应用名称 */
            static APPLICATION_NAME: string = "integration_integrationjob_service";

            constructor() {
                super();
                this.id = IntegrationJobService.APPLICATION_ID;
                this.name = IntegrationJobService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                this.view.runJobEvent = this.runJob;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
            }
            /** 额外的运行数据 */
            extraData: any;
            /** 运行服务 */
            runService(contract: ibas.IBOServiceContract): void {
                let data: ibas.IBusinessObject;
                if (contract.data instanceof Array) {
                    // 数组只处理第一个
                    data = contract.data[0];
                    // 额外运行数据
                    this.extraData = contract.data;
                } else {
                    data = contract.data;
                    // 额外运行数据
                    this.extraData = contract.data;
                }
                if (!ibas.objects.isNull(data) && !ibas.strings.isEmpty((<ibas.IBOStorageTag><any>data).objectCode)) {
                    // 传入的数据可能是数组
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.IntegrationJob.PROPERTY_BOCODE_NAME;
                    condition.value = (<ibas.IBOStorageTag><any>data).objectCode;
                    condition = criteria.conditions.create();
                    condition.alias = bo.IntegrationJob.PROPERTY_ACTIVATED_NAME;
                    condition.value = ibas.emYesNo.YES.toString();
                    this.fetchData(criteria);
                    super.show();
                } else {
                    // 输入数据无效，服务不运行
                    this.proceeding(ibas.emMessageType.WARNING,
                        ibas.i18n.prop("integration_service_integrationjob") + ibas.i18n.prop("sys_invalid_parameter", "data"));
                }
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryIntegration = new bo.BORepositoryIntegration();
                boRepository.fetchIntegrationJob({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.IntegrationJob>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.view.showJobs(opRslt.resultObjects);
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            protected runJob(job: bo.IntegrationJob, autoRun: boolean): void {
                if (ibas.objects.isNull(job)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_run")
                    ));
                    return;
                }
                let app: IntegrationJobRunnerApp = new IntegrationJobRunnerApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.extraData = this.extraData;
                app.autoRun = autoRun ? true : false;
                app.run(job);
                this.close();
            }
        }
        /** 集成任务服务-视图 */
        export interface IIntegrationJobServiceView extends ibas.IView {
            /** 显示任务 */
            showJobs(datas: bo.IntegrationJob[]): void;
            /** 运行任务 */
            runJobEvent: Function;
        }
        /** 集成任务服务映射 */
        export class IntegrationJobServiceMapping extends ibas.ServiceMapping {

            constructor() {
                super();
                this.id = IntegrationJobService.APPLICATION_ID;
                this.name = IntegrationJobService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
                this.proxy = ibas.BOServiceProxy;
                this.icon = ibas.i18n.prop("integration_icon");
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new IntegrationJobService();
            }
        }
    }
}