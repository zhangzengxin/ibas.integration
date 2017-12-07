/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    List
} from "ibas/index";
import {
} from "../Datas";


/** 集成-动作 */
export interface IIntegrationAction {
    /** 标识 */
    id: string;
    /** 包组 */
    group: string;
    /** 名称 */
    name: string;
    /** 路径 */
    path: string;
    /** 激活的 */
    activated: boolean;
    /** 配置 */
    configs: List<IIntegrationActionConfig>;
}

/** 集成-动作 */
export interface IIntegrationActionConfig {
    /** 键 */
    key: string;
    /** 值 */
    value: any;
}