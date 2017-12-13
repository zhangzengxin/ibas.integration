/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { IIntegrationJobServiceView } from "../../../bsapp/integrationjob/index";

/**
 * 选择视图-集成任务
 */
export class IntegrationJobServiceView extends ibas.BODialogView implements IIntegrationJobServiceView {
    /** 运行任务 */
    runJobEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.table = new sap.ui.table.Table("", {
            enableSelectAll: false,
            selectionBehavior: sap.ui.table.SelectionBehavior.Row,
            visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            rows: "{/rows}",
            columns: [
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_integrationjob_objectkey"),
                    template: new sap.m.Text("", {
                        wrapping: false
                    }).bindProperty("text", {
                        path: "objectKey"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_integrationjob_jobname"),
                    template: new sap.m.Text("", {
                        wrapping: false
                    }).bindProperty("text", {
                        path: "jobName"
                    })
                }),
            ]
        });
        return new sap.m.Dialog("", {
            title: this.title,
            type: sap.m.DialogType.Standard,
            state: sap.ui.core.ValueState.None,
            stretchOnPhone: true,
            horizontalScrolling: true,
            verticalScrolling: true,
            content: [this.table],
            buttons: [
                new sap.m.Button("", {
                    text: ibas.i18n.prop("shell_run"),
                    type: sap.m.ButtonType.Transparent,
                    // icon: "sap-icon://accept",
                    press: function (): void {
                        that.fireViewEvents(that.runJobEvent,
                            // 获取表格选中的对象
                            openui5.utils.getTableSelecteds<bo.IntegrationJob>(that.table)
                        );
                    }
                }),
                new sap.m.Button("", {
                    text: ibas.i18n.prop("shell_exit"),
                    type: sap.m.ButtonType.Transparent,
                    // icon: "sap-icon://inspect-down",
                    press: function (): void {
                        that.fireViewEvents(that.closeEvent);
                    }
                }),
            ]
        });
    }
    private table: sap.ui.table.Table;
    /** 显示数据 */
    showJobs(datas: bo.IntegrationJob[]): void {
        this.table.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
    }

}
