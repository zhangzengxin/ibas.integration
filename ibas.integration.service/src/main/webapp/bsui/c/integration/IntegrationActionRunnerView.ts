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
import { IIntegrationActionRunnerView } from "../../../bsapp/integration/index";

/**
 * 列表视图-开发终端
 */
export class IntegrationActionRunnerView extends ibas.View implements IIntegrationActionRunnerView {
    /** 运行 */
    runActionsEvent: Function;
    /** 停止 */
    stopActionsEvent: Function;
    /** 绘制视图 */
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.form = new sap.ui.layout.form.SimpleForm("");
        this.table = new sap.ui.table.Table("", {
            title: ibas.i18n.prop("bo_integrationaction"),
            selectionMode: sap.ui.table.SelectionMode.None,
            visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 3),
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Interactive,
            rows: "{/rows}",
            columns: [
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_integrationaction_name"),
                    template: new sap.m.Text("", {
                        wrapping: false
                    }).bindProperty("text", {
                        path: "name"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_integrationaction_path"),
                    template: new sap.m.Text("", {
                        wrapping: false
                    }).bindProperty("text", {
                        path: "path"
                    })
                }),
            ]
        });
        this.form.addContent(this.table);
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_run"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://begin",
                        press: function (): void {
                            that.fireViewEvents(that.runActionsEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_stop"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://stop",
                        press: function (): void {
                            that.fireViewEvents(that.stopActionsEvent);
                        }
                    }),
                ]
            }),
            content: [this.form]
        });
        return this.page;
    }
    private page: sap.m.Page;
    private form: sap.ui.layout.form.SimpleForm;
    private table: sap.ui.table.Table;
    /** 显示数据 */
    showActions(datas: bo.IntegrationAction[]): void {
        this.table.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
    }
    /** 显示消息 */
    showMessages(type: ibas.emMessageType, message: string): void {
        let uiType: sap.ui.core.MessageType = openui5.utils.toMessageType(type);
        this.table.setFooter(new sap.m.MessageStrip("", {
            width: "100%",
            text: message,
            type: uiType,
            showIcon: true,
            showCloseButton: false
        }));
    }
}
