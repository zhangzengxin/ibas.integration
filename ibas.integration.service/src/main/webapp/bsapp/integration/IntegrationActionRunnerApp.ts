/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryIntegrationDevelopment } from "../../borep/BORepositories";

/** 动作运行 */
export class IntegrationActionRunnerApp extends ibas.Application<IIntegrationActionRunnerView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "50637c67-2a3a-4d9f-9553-c4a85b5751d5";
    /** 应用名称 */
    static APPLICATION_NAME: string = "integration_app_action_runner";
    /** 构造函数 */
    constructor() {
        super();
        this.id = IntegrationActionRunnerApp.APPLICATION_ID;
        this.name = IntegrationActionRunnerApp.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
        this.autoRun = true;
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.runActionsEvent = this.runActions;
        this.view.stopActionsEvent = this.stopActions;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        this.view.showActions(this.actions);
    }
    /** 自动运行 */
    autoRun: boolean;
    run(action: bo.Action | bo.Action[]): void;
    run(): void {
        if (ibas.objects.instanceOf(arguments[0], bo.Action)) {
            this.actions.add(arguments[0]);
        } else if (arguments[0] instanceof Array) {
            for (let item of arguments[0]) {
                if (ibas.objects.instanceOf(item, bo.Action)) {
                    this.actions.add(item);
                }
            }
        } else {
            for (let item of arguments) {
                if (ibas.objects.instanceOf(item, bo.Action)) {
                    this.actions.add(item);
                }
            }
        }
        if (this.actions.length > 0 && this.autoRun) {
            // 存在动作执行
            this.runActions();
        } else {
            // 没有任务显示界面
            super.run.apply(this, arguments);
        }
    }
    private _actions: ibas.List<bo.Action>;
    get actions(): ibas.List<bo.Action> {
        if (ibas.objects.isNull(this._actions)) {
            this._actions = new ibas.ArrayList();
        }
        return this._actions;
    }
    private runActions(): void {
        if (ibas.objects.isNull(this.actions)) {
            return;
        }
        for (let item of this.actions) {
            this.runAction(item);
        }
    }
    private _runningActions: ibas.List<ibas.Action>;
    get runningActions(): ibas.List<ibas.Action> {
        if (ibas.objects.isNull(this._runningActions)) {
            this._runningActions = new ibas.ArrayList();
        }
        return this._runningActions;
    }
    private stopActions(): void {
        for (let item of this.runningActions) {
            try {
                if (!item.isRunning()) {
                    continue;
                }
                item.stop();
            } catch (error) {
                this.messages(error);
            }
        }
    }
    protected runAction(usingAction: bo.Action): void {
        if (ibas.objects.isNull(usingAction)) {
            return;
        }
        let baseUrl: string = usingAction.group;
        if (ibas.strings.isEmpty(baseUrl)) {
            baseUrl = ibas.urls.normalize(ibas.urls.ROOT_URL_SIGN);
        }
        if (!baseUrl.toLowerCase().startsWith("http")) {
            baseUrl = ibas.urls.normalize(ibas.urls.ROOT_URL_SIGN) + baseUrl;
        }
        let token: string = ibas.config.get(ibas.CONFIG_ITEM_USER_TOKEN, "");
        let rtVersion: string = ibas.dates.now().getTime().toString();
        let actionRequire: Function = ibas.requires.create({
            baseUrl: baseUrl,
            context: usingAction.name.trim(),
            waitSeconds: ibas.config.get(ibas.requires.CONFIG_ITEM_WAIT_SECONDS, 30),
            urlArgs: function (id: string, url: string): string {
                if (id.indexOf("ibas/") >= 0 || id.startsWith("_@") || id === "require" || id === "exports") {
                    return "";
                }
                // 允许多次调用
                return (url.indexOf("?") === -1 ? "?" : "&") + "token=" + token + "&_=" + rtVersion;
            }
        }, []);
        let path: string = usingAction.path;
        if (ibas.strings.isEmpty(path)) {
            path = usingAction.name.trim();
        }
        if (path.indexOf(".") > 0) {
            path = path.substring(0, path.lastIndexOf("."));
        }
        let that: this = this;
        actionRequire(
            [path],
            function (library: any): void {
                // 库加载成功
                try {
                    if (ibas.objects.isNull(library)) {
                        throw new Error("invalid action library.");
                    }
                    if (ibas.objects.isNull(library.default) && !ibas.objects.isAssignableFrom(library.default, ibas.Action)) {
                        throw new Error("invalid action class.");
                    }
                    let action: ibas.Action = new library.default();
                    if (!(ibas.objects.instanceOf(action, ibas.Action))) {
                        throw new Error("invalid action instance.");
                    }
                    // 输入设置
                    for (let item of usingAction.configs) {
                        if (ibas.objects.isNull(item.value) || ibas.objects.isNull(item.key)) {
                            continue;
                        }
                        action.addConfig(item.key, ibas.config.applyVariables(item.value));
                    }
                    // 日志输出视图
                    action.setLogger({
                        level: ibas.config.get(ibas.CONFIG_ITEM_MESSAGES_LEVEL, ibas.emMessageLevel.INFO, ibas.emMessageLevel),
                        log(): void {
                            let tmpArgs: Array<any> = new Array();
                            for (let item of arguments) {
                                tmpArgs.push(item);
                            }
                            ibas.logger.log.apply(ibas.logger, tmpArgs);
                            let message: string;
                            let type: ibas.emMessageType = ibas.emMessageType.INFORMATION;
                            if (typeof (tmpArgs[0]) === "number" && tmpArgs.length > 1) {
                                type = that.toMessageType(tmpArgs[0]);
                                message = ibas.strings.format(tmpArgs[1], tmpArgs.slice(2));
                            } else if (typeof (tmpArgs[0]) === "string") {
                                message = ibas.strings.format(tmpArgs[0], tmpArgs.slice(1));
                            }
                            if (that.isViewShowed()) {
                                that.view.showMessages(type, message);
                            } else {
                                that.proceeding(type, message);
                            }
                        }
                    });
                    // 运行
                    action.do();
                    that.runningActions.add(action);
                } catch (error) {
                    that.messages(error);
                }
            },
            function (): void {
                // 库加载失败
                that.messages(
                    ibas.emMessageType.ERROR,
                    ibas.i18n.prop("integrationdevelopment_run_action_faild", usingAction.name));
            }
        );
    }

    private toMessageType(level: ibas.emMessageLevel): ibas.emMessageType {
        let type: ibas.emMessageType = ibas.emMessageType.INFORMATION;
        if (level === ibas.emMessageLevel.WARN) {
            type = ibas.emMessageType.WARNING;
        } else if (level === ibas.emMessageLevel.ERROR) {
            type = ibas.emMessageType.ERROR;
        } else if (level === ibas.emMessageLevel.FATAL) {
            type = ibas.emMessageType.ERROR;
        }
        return type;
    }
}
/** 视图-动作运行 */
export interface IIntegrationActionRunnerView extends ibas.IView {
    /** 运行 */
    runActionsEvent: Function;
    /** 停止 */
    stopActionsEvent: Function;
    /** 显示动作 */
    showActions(datas: bo.Action[]): void;
    /** 显示消息 */
    showMessages(type: ibas.emMessageType, message: string): void;
}
