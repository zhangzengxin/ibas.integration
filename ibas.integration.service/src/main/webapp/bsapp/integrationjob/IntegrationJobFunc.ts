/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace integration {
    export namespace app {

        export class IntegrationJobFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "64477cba-e60c-4eb2-b18a-b0eb31875adb";
            /** 功能名称 */
            static FUNCTION_NAME = "integration_func_integrationjob";
            /** 构造函数 */
            constructor() {
                super();
                this.id = IntegrationJobFunc.FUNCTION_ID;
                this.name = IntegrationJobFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: IntegrationJobListApp = new IntegrationJobListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
