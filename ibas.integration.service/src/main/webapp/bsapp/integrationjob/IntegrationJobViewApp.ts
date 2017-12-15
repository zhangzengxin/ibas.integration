/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryIntegration } from "../../borep/BORepositories";
import { IntegrationJobEditApp } from "./IntegrationJobEditApp";

/** 查看应用-集成任务 */
export class IntegrationJobViewApp extends ibas.BOViewService<IIntegrationJobViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "5a3d157e-0a6d-4e4d-84a9-95cd57f45bbf";
    /** 应用名称 */
    static APPLICATION_NAME: string = "integration_app_integrationjob_view";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.IntegrationJob.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = IntegrationJobViewApp.APPLICATION_ID;
        this.name = IntegrationJobViewApp.APPLICATION_NAME;
        this.boCode = IntegrationJobViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.editDataEvent = this.editData;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 编辑数据，参数：目标数据 */
    protected editData(): void {
        let app: IntegrationJobEditApp = new IntegrationJobEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(this.viewData);
    }
    /** 运行,覆盖原方法 */
    run(): void;
    run(data: bo.IntegrationJob): void;
    run(): void {
        if (!(arguments[0] instanceof bo.IntegrationJob)) {
            this.viewData = arguments[0];
            this.show();
        } else {
            super.run.apply(this, arguments);
        }
    }
    private viewData: bo.IntegrationJob;
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria | string): void {
        this.busy(true);
        let that: this = this;
        if (typeof criteria === "string") {
            criteria = new ibas.Criteria();
            // 添加查询条件

        }
        let boRepository: BORepositoryIntegration = new BORepositoryIntegration();
        boRepository.fetchIntegrationJob({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.IntegrationJob>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.viewData = opRslt.resultObjects.firstOrDefault();
                    that.viewShowed();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [];
    }
}
/** 视图-集成任务 */
export interface IIntegrationJobViewView extends ibas.IBOViewView {

}
/** 集成任务连接服务映射 */
export class IntegrationJobLinkServiceMapping extends ibas.BOLinkServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = IntegrationJobViewApp.APPLICATION_ID;
        this.name = IntegrationJobViewApp.APPLICATION_NAME;
        this.boCode = IntegrationJobViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IBOLinkServiceCaller> {
        return new IntegrationJobViewApp();
    }
}
