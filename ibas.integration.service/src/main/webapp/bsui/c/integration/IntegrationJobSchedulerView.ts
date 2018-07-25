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
             * 列表视图-集成任务调度者
             */
            export class IntegrationJobSchedulerView extends ibas.BOResidentView implements app.IIntegrationJobSchedulerView {
                /** 暂停运行事件 */
                suspendEvent: Function;
                /** 重置事件 */
                resetEvent: Function;
                /** 绘制工具条视图 */
                drawBar(): any {
                    let that: this = this;
                    // 不重复创建工具条钮
                    if (ibas.objects.isNull(this.bar)) {
                        this.bar = new sap.m.Button("", {
                            tooltip: this.title,
                            icon: "sap-icon://synchronize",
                            type: sap.m.ButtonType.Transparent,
                            press: function (): void {
                                if (ibas.strings.isEmpty(that.bar.getText())) {
                                    that.fireViewEvents(that.resetEvent);
                                } else {
                                    // 已经在运行任务，则控制暂停
                                    if (that.bar.getType() === sap.m.ButtonType.Reject) {
                                        that.fireViewEvents(that.suspendEvent, false);
                                        that.bar.setType(sap.m.ButtonType.Transparent);
                                    } else {
                                        that.fireViewEvents(that.suspendEvent, true);
                                        that.bar.setType(sap.m.ButtonType.Reject);
                                    }
                                }
                            }
                        });
                    }
                    return this.bar;
                }
                private bar: sap.m.Button;
                /** 激活完整视图事件 */
                showFullViewEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    return null;
                }
                /** 显示任务 */
                showJobs(datas: app.TaskAction[]): void {
                    if (!ibas.objects.isNull(this.bar)) {
                        this.bar.setText(datas.length > 0 ? datas.length.toString() : undefined);
                    }
                    if (this.isDisplayed) {

                    }
                }
            }
        }
    }
}