/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace integration {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "568e7e6d-a67a-46a8-93b9-7bc896b1c2b7";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "Integration";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_INTEGRATION: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-集成任务 */
        export const BO_CODE_INTEGRATIONJOB: string = "${Company}_IG_INTERGRATIONJOB";

        /**
         * 动作关系
         */
        export enum emActionRelationship {
            /**
             * 与(&&)
             */
            AND,
            /**
             * 或(||)
             */
            OR,
        }
        /** 查询动作条件-ID */
        export const CRITERIA_CONDITION_ALIAS_ACTION_ID: string = "ActionId";
        /** 查询动作条件-包（组） */
        export const CRITERIA_CONDITION_ALIAS_PACKAGE: string = "FileFolder";
    }

    export namespace app {
        /** 集成任务服务契约 */
        export interface IIntegrationJobServiceContract {
            /** 任务名称 */
            jobName: string | bo.IIntegrationJob;
            /** 是否自动运行 */
            autoRun?: boolean;
            /** 参数 */
            extraData?: any;
        }
        /** 集成任务服务代理 */
        export class IntegrationJobServiceProxy extends ibas.ServiceProxy<IIntegrationJobServiceContract> {

        }
    }
}