/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace integration {
    export namespace app {

        export class DevelopmentTerminalFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "c1ba6bdf-8e17-46c0-98ca-597e4b205c13";
            /** 功能名称 */
            static FUNCTION_NAME = "integrationdevelopment_func_development_terminal";
            /** 构造函数 */
            constructor() {
                super();
                this.id = DevelopmentTerminalFunc.FUNCTION_ID;
                this.name = DevelopmentTerminalFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: DevelopmentTerminalApp = new DevelopmentTerminalApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
