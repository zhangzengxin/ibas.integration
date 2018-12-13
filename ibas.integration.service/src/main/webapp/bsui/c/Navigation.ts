/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../index.d.ts" />
/// <reference path="./development/index.ts" />
/// <reference path="./integration/index.ts" />
/// <reference path="./integrationjob/index.ts" />
namespace integration {
    export namespace ui {
        /**
         * 视图导航
         */
        export class Navigation extends ibas.ViewNavigation {
            /**
             * 创建实例
             * @param id 应用id
             */
            protected newView(id: string): ibas.IView {
                let view: ibas.IView = null;
                switch (id) {
                    case app.IntegrationJobService.APPLICATION_ID:
                        view = new c.IntegrationJobServiceView();
                        break;
                    case app.IntegrationJobListApp.APPLICATION_ID:
                        view = new c.IntegrationJobListView();
                        break;
                    case app.IntegrationJobChooseApp.APPLICATION_ID:
                        view = new c.IntegrationJobChooseView();
                        break;
                    case app.IntegrationJobEditApp.APPLICATION_ID:
                        view = new c.IntegrationJobEditView();
                        break;
                    case app.IntegrationActionChooseApp.APPLICATION_ID:
                        view = new c.IntegrationActionChooseView();
                        break;
                    case app.IntegrationActionListApp.APPLICATION_ID:
                        view = new c.IntegrationActionListView();
                        break;
                    case app.IntegrationActionRunnerApp.APPLICATION_ID:
                        view = new c.IntegrationActionRunnerView();
                        break;
                    case app.IntegrationJobSchedulerApp.APPLICATION_ID:
                        view = new c.IntegrationJobSchedulerView();
                        break;
                    case app.DevelopmentTerminalApp.APPLICATION_ID:
                        view = new c.DevelopmentTerminalView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}