/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import { IBORepositoryIntegration, BO_REPOSITORY_INTEGRATION } from "../api/index";
import { DataConverter4ig } from "./DataConverters";

/** 业务对象仓库 */
export class BORepositoryIntegration extends ibas.BORepositoryApplication implements IBORepositoryIntegration {

    /** 创建此模块的后端与前端数据的转换者 */
    protected createConverter(): ibas.IDataConverter {
        return new DataConverter4ig;
    }

    /**
     * 上传文件
     * @param caller 调用者
     */
    upload(caller: ibas.UploadFileCaller<ibas.FileData>): void {
        if (!this.address.endsWith("/")) { this.address += "/"; }
        let fileRepository: ibas.FileRepositoryUploadAjax = new ibas.FileRepositoryUploadAjax();
        fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
        fileRepository.token = this.token;
        fileRepository.converter = this.createConverter();
        fileRepository.upload("upload", caller);
    }
    /**
     * 下载文件
     * @param caller 调用者
     */
    download(caller: ibas.DownloadFileCaller<Blob>): void {
        if (!this.address.endsWith("/")) { this.address += "/"; }
        let fileRepository: ibas.FileRepositoryDownloadAjax = new ibas.FileRepositoryDownloadAjax();
        fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
        fileRepository.token = this.token;
        fileRepository.converter = this.createConverter();
        fileRepository.download("download", caller);
    }
    /**
     * 查询 集成任务
     * @param fetcher 查询者
     */
    fetchIntegrationJob(fetcher: ibas.FetchCaller<bo.IntegrationJob>): void {
        super.fetch(bo.IntegrationJob.name, fetcher);
    }
    /**
     * 保存 集成任务
     * @param saver 保存者
     */
    saveIntegrationJob(saver: ibas.SaveCaller<bo.IntegrationJob>): void {
        super.save(bo.IntegrationJob.name, saver);
    }

}
// 注册业务对象仓库到工厂
ibas.boFactory.register(BO_REPOSITORY_INTEGRATION, BORepositoryIntegration);
