/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    FetchCaller,
    SaveCaller
} from "ibas/index";
import * as bo from "./bo/index"

/** 业务仓库 */
export interface IBORepositoryIntegration {

    /**
     * 查询 集成任务
     * @param fetcher 查询者
     */
    fetchIntegrationJob(fetcher: FetchCaller<bo.IIntegrationJob>);
    /**
     * 保存 集成任务
     * @param saver 保存者
     */
    saveIntegrationJob(saver: SaveCaller<bo.IIntegrationJob>);


}
