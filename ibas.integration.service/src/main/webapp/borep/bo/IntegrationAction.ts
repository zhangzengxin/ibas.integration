/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    BusinessObject,
    StringBuilder,
    config,
    ICriteria,
    ICondition,
    Criteria,
} from "ibas/index";
import {
    IIntegrationAction,
    BO_CODE_INTEGRATION_ACTION,
} from "../../api/index";

/** 集成动作 */
export class IntegrationAction extends BusinessObject<IntegrationAction> implements IIntegrationAction {

    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = BO_CODE_INTEGRATION_ACTION;
    /** 构造函数 */
    constructor() {
        super();
    }

    /** 映射的属性名称-标识 */
    static PROPERTY_ACTIONID_NAME: string = "ActionId";
    /** 获取-标识 */
    get actionId(): string {
        return this.getProperty<string>(IntegrationAction.PROPERTY_ACTIONID_NAME);
    }
    /** 设置-标识 */
    set actionId(value: string) {
        this.setProperty(IntegrationAction.PROPERTY_ACTIONID_NAME, value);
    }

    /** 映射的属性名称-名称 */
    static PROPERTY_ACTIONNAME_NAME: string = "ActionName";
    /** 获取-名称 */
    get actionName(): string {
        return this.getProperty<string>(IntegrationAction.PROPERTY_ACTIONNAME_NAME);
    }
    /** 设置-名称 */
    set actionName(value: string) {
        this.setProperty(IntegrationAction.PROPERTY_ACTIONNAME_NAME, value);
    }

    /** 字符串 */
    toString(): string {
        let builder: StringBuilder = new StringBuilder();
        builder.append("{");
        builder.append("[");
        builder.append(IntegrationAction.name);
        builder.append("].");
        builder.append("[");
        builder.append(IntegrationAction.PROPERTY_ACTIONID_NAME);
        builder.append(" ");
        builder.append("=");
        builder.append(" ");
        builder.append(this.actionId);
        builder.append("]");
        builder.append("}");
        return builder.toString();
    }
    /** 获取查询 */
    criteria(): ICriteria {
        let criteria: ICriteria = new Criteria();
        let condition: ICondition = criteria.conditions.create();
        condition.alias = IntegrationAction.PROPERTY_ACTIONID_NAME;
        condition.value = this.actionId;
        return criteria;
    }

    /** 初始化数据 */
    protected init(): void {

    }
}

