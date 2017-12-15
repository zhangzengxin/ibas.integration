/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { IntegrationActionRunnerApp } from "./IntegrationActionRunnerApp";
import { BORepositoryIntegration } from "../../borep/BORepositories";

/** 集成任务运行 */
export class IntegrationJobRunnerApp extends IntegrationActionRunnerApp {
    /** 构造函数 */
    constructor() {
        super();
    }
    run(): void;
    run(job: bo.IntegrationJob): void;
    run(action: bo.Action | bo.Action[]): void;
    run(): void {
        if (ibas.objects.instanceOf(arguments[0], bo.IntegrationJob)) {
            let job: bo.IntegrationJob = arguments[0];
            let criteria: ibas.ICriteria = new ibas.Criteria();
            for (let item of job.integrationJobActions) {
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = BORepositoryIntegration.CRITERIA_CONDITION_ALIAS_ACTION_ID;
                condition.value = item.actionId;
                condition.relationship = ibas.emConditionRelationship.OR;// 其他无意义
            }
            if (criteria.conditions.length > 0) {
                let that: this = this;
                let boRepository: BORepositoryIntegration = new BORepositoryIntegration();
                boRepository.fetchAction({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Action>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                throw new Error(ibas.i18n.prop("integration_not_found_job_actions", job.jobName));
                            }
                            // 补充根地址
                            for (let item of opRslt.resultObjects) {
                                item.group = boRepository.toPackageUrl(item);
                            }
                            that.run(opRslt.resultObjects);

                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                // 开始任务，退出后续操作
                return;
            }
        }
        super.run.apply(this, arguments);
    }
}