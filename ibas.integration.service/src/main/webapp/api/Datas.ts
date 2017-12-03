/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 共享的数据
import {
	strings,
	MODULE_REPOSITORY_NAME_TEMPLATE,
} from "ibas/index";

/** 模块-标识 */
export const CONSOLE_ID: string = "568e7e6d-a67a-46a8-93b9-7bc896b1c2b7";
/** 模块-名称 */
export const CONSOLE_NAME: string = "Integration";
/** 模块-版本 */
export const CONSOLE_VERSION: string = "0.1.0";
/** 业务仓库名称 */
export const BO_REPOSITORY_INTEGRATION: string = strings.format(MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
/** 业务对象编码-集成任务 */
export const BO_CODE_INTEGRATIONJOB: string = "${Company}_IG_INTERGRATIONJOB";
/** 业务对象编码-集成动作 */
export const BO_CODE_INTEGRATION_ACTION: string = "${Company}_IG_ACTION";

/**
 * 动作关系
 */
export enum emActionRelationship {
	/**
	 * 与(&&)
	 */
	AND,
	/**
	 * 或(||)
	 */
	OR,
}