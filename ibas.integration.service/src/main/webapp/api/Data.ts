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
        /** 查询任务条件-服务的名称 */
        export const CRITERIA_CONDITION_ALIAS_JOB_NAME: string = "JobName";
        /** 查询任务条件-关联的业务对象 */
        export const CRITERIA_CONDITION_ALIAS_BOCODE: string = "BOCode";
        /** 查询任务条件-关联的应用 */
        export const CRITERIA_CONDITION_ALIAS_APPLICATION_ID: string = "ApplicationId";
        /** 查询任务条件-是否激活 */
        export const CRITERIA_CONDITION_ALIAS_ACTIVATED: string = "Activated";
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
    export namespace action {
        /** 配置项-目标模板 */
        export function CONFIG_TARGET(vaule: string): string {
            return ibas.strings.format("{0}|Target", vaule);
        }
        export function CONFIG_SOURCE(vaule: string): string {
            return ibas.strings.format("{0}|Source", vaule);
        }
        /** 配置项-动作组 */
        export const CONFIG_ACTION_GROUP: string = "actionGroup";
        /** 配置项-用户 */
        export const CONFIG_ADDRESS: string = "address";
        /** 配置项-用户 */
        export const CONFIG_USER: string = "user";
        /** 配置项-用户密码 */
        export const CONFIG_PASSWORD: string = "password";
        /** 配置项-用户口令 */
        export const CONFIG_USER_TOKEN: string = "userToken";
        /**
         * 集成动作
         */
        export abstract class IntegrationAction extends ibas.Action {
            /**
             * 获取配置
             * @param key 配置项
             */
            getConfig(key: string): any;
            /**
             * 获取配置
             * @param key 配置项
             * @param defalut 默认值
             */
            getConfig<T>(key: string, defalut: T): T;
            /**
             * 获取配置
             */
            getConfig(): any {
                return super.getConfig.apply(this, arguments);
            }
            /** 运行 */
            protected run(): boolean {
                return this.execute();
            }
            /** 调用后台服务 */
            protected goAction(name: string, params: { key: string, value: any }[] | { key: string, value: any }, fnBack?: (opRslt: ibas.IOperationMessage) => void): void {
                let group: string = this.getConfig(CONFIG_ACTION_GROUP);
                if (!ibas.strings.isEmpty(group)) {
                    if (group.endsWith("/")) {
                        group = group.substring(0, group.length - 1);
                    }
                    let index: number = group.lastIndexOf("/");
                    if (index >= 0) {
                        group = group.substring(index + 1);
                    }
                }
                let boRepository: bo.BORepositoryIntegration = new bo.BORepositoryIntegration();
                boRepository.goAction({
                    group: group,
                    name: name,
                    parameters: ibas.arrays.create(params),
                    onCompleted: (opRslt) => {
                        if (fnBack instanceof Function) {
                            fnBack(opRslt);
                        }
                    }
                });
            }
            /** 运行（需要实现） */
            protected abstract execute(): boolean;
        }
    }
}