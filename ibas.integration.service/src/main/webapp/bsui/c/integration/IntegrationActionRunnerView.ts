/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace integration {
    export namespace ui {
        export namespace c {
            /**
             * 列表视图-开发终端
             */
            export class IntegrationActionRunnerView extends ibas.View implements app.IIntegrationActionRunnerView {
                /** 运行 */
                runActionsEvent: Function;
                /** 停止 */
                stopActionsEvent: Function;
                /** 绘制视图 */
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.table = new sap.ui.table.Table("", {
                        selectionMode: sap.ui.table.SelectionMode.None,
                        visibleRowCount: 5,
                        rows: "{/rows}",
                        columns: [
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_action_name"),
                                template: new sap.m.Text("", {
                                    wrapping: false
                                }).bindProperty("text", {
                                    path: "name"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_action_path"),
                                template: new sap.m.Text("", {
                                    wrapping: false
                                }).bindProperty("text", {
                                    path: "path"
                                })
                            }),
                        ]
                    });
                    this.layout = new sap.ui.layout.VerticalLayout("", {
                        height: "100%",
                        width: "100%",
                    });
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
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("integration_clear_log"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://eraser",
                                    press: function (): void {
                                        that.layout.destroyContent();
                                    }
                                }),
                            ]
                        }),
                        content: [
                            new sap.ui.layout.form.SimpleForm("", {
                                content: [
                                    new sap.ui.core.Title("", {
                                        text: ibas.i18n.prop("bo_action"),
                                    }),
                                    this.table,
                                    new sap.ui.core.Title("", {
                                        text: ibas.i18n.prop("integration_running_log"),
                                    }),
                                    new sap.m.ScrollContainer("", {
                                        horizontal: false,
                                        vertical: true,
                                        height: "360px",
                                        content: [
                                            this.layout
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                    return this.page;
                }
                private page: sap.m.Page;
                private table: sap.ui.table.Table;
                private layout: sap.ui.layout.VerticalLayout;
                /** 显示数据 */
                showActions(datas: bo.Action[]): void {
                    this.table.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                }
                /** 显示消息 */
                showMessages(type: ibas.emMessageType, message: string): void {
                    this.layout.insertContent(new sap.m.MessageStrip("", {
                        width: "100%",
                        height: "100%",
                        text: message.replace("{", "(").replace("}", ")"),
                        type: openui5.utils.toMessageType(type),
                        showIcon: true,
                        showCloseButton: false
                    }), 0);
                }
            }
        }
    }
}