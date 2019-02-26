/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/** 配置项-业务仓库地址 */
const CONFIG_REPOSITORY_URL: string = "REP_URL";
/** 配置项-业务仓库口令 */
const CONFIG_REPOSITORY_TOKEN: string = "REP_TOKEN";
/** 配置项-选择的用户 */
const CONFIG_CHOOSED_USER: string = "CHS_USER";
/**
 * 集成测试
 */
export default class HelloWorld extends integration.action.IntegrationAction {
    /** 运行逻辑 */
    protected execute(): boolean {
        // 显示额外运行数据
        if (!ibas.objects.isNull(this.extraData)) {
            if (this.extraData instanceof Array) {
                for (let item of this.extraData) {
                    this.log(ibas.emMessageLevel.WARN, "extraData: {0}", item);
                }
            } else {
                this.log(ibas.emMessageLevel.WARN, "extraData: {0}", this.extraData);
            }
        }
        // 逻辑代码
        let users: string = this.getConfig(CONFIG_CHOOSED_USER);
        let criteria: ibas.Criteria = new ibas.Criteria();
        if (!ibas.strings.equalsIgnoreCase(users, ibas.config.applyVariables("#{${Company}_SYS_USER}.{Code}"))) {
            for (let item of users.split(ibas.DATA_SEPARATOR)) {
                item = ibas.strings.remove(item, " ");
                if (ibas.strings.isEmpty(item)) {
                    continue;
                }
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = "Code";
                condition.value = item;
                condition.relationship = ibas.emConditionRelationship.OR;
            }
        }
        let that: this = this;
        let boRepository: initialfantasy.bo.IBORepositoryInitialFantasy = ibas.boFactory.create(initialfantasy.bo.BO_REPOSITORY_INITIALFANTASY);
        boRepository.address = this.getConfig(CONFIG_REPOSITORY_URL);
        boRepository.token = this.getConfig(CONFIG_REPOSITORY_TOKEN);
        boRepository.fetchUser({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<any>): void {
                for (let index: number = 0; index < opRslt.resultObjects.length; index++) {
                    let item: any = opRslt.resultObjects[index];
                    that.log(Math.round(Math.random() * 6), "user: {0}", item);
                }
                // 动作完成
                that.done();
            }
        });
        // 异步任务，未完成
        return false;
    }
    /** 完成 */
    protected done(): void {
        this.goAction("ChangeIntegrationJob", { key: "LineId", value: 1 }, (opRslt) => {
            this.log(ibas.emMessageLevel.WARN, "goAction: {0}", opRslt.message);
            super.done();
        });
    }
}
