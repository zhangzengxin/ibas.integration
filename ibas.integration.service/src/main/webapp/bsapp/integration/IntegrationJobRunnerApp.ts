/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace integration {
    export namespace app {
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
                let job: bo.IntegrationJob = arguments[0];
                if (ibas.objects.instanceOf(job, bo.IntegrationJob)) {
                    let that: this = this;
                    let boRepository: bo.BORepositoryIntegration = new bo.BORepositoryIntegration();
                    boRepository.fetchAction({
                        criteria: job,
                        onCompleted(opRslt: ibas.IOperationResult<bo.Action>): void {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                if (opRslt.resultObjects.length === 0) {
                                    throw new Error(ibas.i18n.prop("integration_not_found_job_actions", job.name));
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
                super.run.apply(this, arguments);
            }
        }
    }
}