/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as integrationjobApps from "../../bsapp/integrationjob/index";
import * as integrationjobViews from "./integrationjob/index";
import * as integrationactionApps from "../../bsapp/integration/index";
import * as integrationactionViews from "./integration/index";

/**
 * 视图导航
 */
export default class Navigation extends ibas.ViewNavigation {

    /**
     * 创建实例
     * @param id 应用id
     */
    protected newView(id: string): ibas.IView {
        let view: ibas.IView = null;
        switch (id) {
            case integrationjobApps.IntegrationJobListApp.APPLICATION_ID:
                view = new integrationjobViews.IntegrationJobListView();
                break;
            case integrationjobApps.IntegrationJobChooseApp.APPLICATION_ID:
                view = new integrationjobViews.IntegrationJobChooseView();
                break;
            case integrationjobApps.IntegrationJobViewApp.APPLICATION_ID:
                view = new integrationjobViews.IntegrationJobViewView();
                break;
            case integrationjobApps.IntegrationJobEditApp.APPLICATION_ID:
                view = new integrationjobViews.IntegrationJobEditView();
                break;
            case integrationactionApps.IntegrationActionChooseApp.APPLICATION_ID:
                view = new integrationactionViews.IntegrationActionChooseView();
                break;
            default:
                break;
        }
        return view;
    }
}
