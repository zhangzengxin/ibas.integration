/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { IIntegrationJobServiceContract, IntegrationJobServiceProxy } from "../../api/Datas";
import { IntegrationJobRunnerApp } from "./IntegrationJobRunnerApp";
import { BORepositoryIntegration } from "../../borep/BORepositories";

/** 集成任务运行 */
export class IntegrationJobService extends IntegrationJobRunnerApp {
    /** 应用标识 */
    static APPLICATION_ID: string = IntegrationJobRunnerApp.APPLICATION_ID;
    /** 应用名称 */
    static APPLICATION_NAME: string = IntegrationJobRunnerApp.APPLICATION_NAME;
    constructor() {
        super();
        this.id = IntegrationJobService.APPLICATION_ID;
        this.name = IntegrationJobService.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    run(): void;
    run(job: bo.IntegrationJob): void;
    run(action: bo.Action | bo.Action[]): void;
    run(proxy: IntegrationJobServiceProxy): void;
    run(): void {
        if (arguments.length === 1) {
            // 判断是否为选择契约
            let caller: ibas.IServiceCaller<IIntegrationJobServiceContract> = arguments[0];
            if (ibas.objects.instanceOf(caller.proxy, ibas.ServiceProxy)) {
                this.runService(caller.proxy.contract);
                return;
            }
        }
        // 保持参数原样传递
        super.run.apply(this, arguments);
    }
    /** 运行服务 */
    runService(contract: IIntegrationJobServiceContract): void {
        // 设置参数
        this.autoRun = contract.autoRun === true ? true : false;
        this.extraData = contract.extraData ? contract.extraData : undefined;
        // 查询任务
        let criteria: ibas.ICriteria = new ibas.Criteria();
        let condition: ibas.ICondition = criteria.conditions.create();
        condition.alias = bo.IntegrationJob.PROPERTY_JOBNAME_NAME;
        condition.value = contract.jobName;
        condition = criteria.conditions.create();
        condition.alias = bo.IntegrationJob.PROPERTY_ACTIVATED_NAME;
        condition.value = ibas.emYesNo.YES.toString();
        let that: this = this;
        let boRepository: BORepositoryIntegration = new BORepositoryIntegration();
        boRepository.fetchIntegrationJob({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.IntegrationJob>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    let job: bo.IntegrationJob = opRslt.resultObjects.firstOrDefault();
                    if (ibas.objects.isNull(job)) {
                        throw new Error(ibas.i18n.prop("integration_not_found_integrationjob", contract.jobName));
                    }
                    that.run(job);
                } catch (error) {
                    that.messages(error);
                }
            }
        });
    }
}
/** 集成任务服务映射 */
export class IntegrationJobServiceMapping extends ibas.ServiceMapping {

    constructor() {
        super();
        this.id = IntegrationJobService.APPLICATION_ID;
        this.name = IntegrationJobService.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
        this.proxy = IntegrationJobServiceProxy;
        this.icon = ibas.i18n.prop("integration_icon");
    }
    /** 创建服务实例 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new IntegrationJobService();
    }
}