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
import { IDevelopmentTerminalView } from "../../../bsapp/development/index";

/**
 * 列表视图-开发终端
 */
export class DevelopmentTerminalView extends ibas.View implements IDevelopmentTerminalView {
    /** 加载动作，参数1：地址 */
    loadActionsEvent: Function;
    /** 使用动作 */
    useActionEvent: Function;
    /** 运行动作 */
    runActionEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.form = new sap.ui.layout.form.SimpleForm("");
        this.table = new sap.ui.table.Table("", {
            title: ibas.i18n.prop("bo_integrationaction"),
            selectionMode: sap.ui.table.SelectionMode.None,
            visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Interactive,
            rows: "{/rows}",
            rowActionCount: 1,
            rowActionTemplate: new sap.ui.table.RowAction({
                items: [
                    new sap.ui.table.RowActionItem({
                        icon: "sap-icon://slim-arrow-right",
                        press: function (oEvent: any): void {
                            that.fireViewEvents(that.useActionEvent
                                , this.getBindingContext().getObject()
                            );
                        },
                    }),
                ]
            }),
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
        this.combobox = new sap.m.ComboBox("", {
            width: "100%",
            items: [
                new sap.ui.core.Item("", {
                    key: "demo",
                    text: ".../../../test/apps/integration/test/integration/actions.json",
                })
            ]
        });
        this.checkbox = new sap.m.CheckBox("", {
            text: ibas.i18n.prop("integrationdevelopment_run_action_immediately"),
            selected: true,
        });
        this.tableConfig = new sap.ui.table.Table("", {
            title: ibas.i18n.prop("bo_integrationaction"),
            selectionMode: sap.ui.table.SelectionMode.None,
            visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Interactive,
            rows: "{/rows}",
            toolbar: new sap.m.Bar("", {
                design: sap.m.BarDesign.SubHeader,
                contentLeft: [
                ],
                contentRight: [
                    this.checkbox,
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_run"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://begin",
                        press: function (): void {
                            that.fireViewEvents(that.runActionEvent, that.checkbox.getSelected());
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_back"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://nav-back",
                        press: function (): void {
                            that.splitContainer.backToTopDetail(null, null);
                        }
                    }),
                ]
            }),
            columns: [
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_integrationactionconfig_key"),
                    template: new sap.m.Text("", {
                        wrapping: false
                    }).bindProperty("text", {
                        path: "key"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_integrationactionconfig_value"),
                    template: new sap.m.Input("", {
                    }).bindProperty("value", {
                        path: "value"
                    })
                }),
            ]
        });
        this.splitContainer = new sap.m.SplitContainer("", {
            mode: sap.m.SplitAppMode.HideMode,
            detailPages: [
                this.table,
                this.tableConfig
            ]
        });
        this.form.addContent(this.splitContainer);
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Label("", {
                        text: ibas.i18n.prop("integrationdevelopment_actions_url"),
                        width: "auto"
                    }),
                    this.combobox,
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_refresh"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://refresh",
                        press: function (): void {
                            that.fireViewEvents(that.loadActionsEvent, that.combobox.getValue());
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
    private tableConfig: sap.ui.table.Table;
    private combobox: sap.m.ComboBox;
    private checkbox: sap.m.CheckBox;
    private splitContainer: sap.m.SplitContainer;
    /** 显示动作 */
    showActions(datas: bo.IntegrationAction[]): void {
        this.splitContainer.backToTopDetail(null, null);
        this.table.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
    }
    /** 显示动作 */
    showAction(data: bo.IntegrationAction): void {
        this.tableConfig.setTitle(data.name);
        this.splitContainer.toDetail(this.tableConfig.getId(), null, null, null);
    }
    /** 显示动作配置 */
    showActionConfigs(datas: bo.IntegrationActionConfig[]): void {
        this.tableConfig.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
    }
}
