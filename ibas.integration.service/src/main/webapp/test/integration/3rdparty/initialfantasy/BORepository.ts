/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    ibas.IFetchCaller,
    ibas.ISaveCaller,
    ibas.IUploadFileCaller,
    ibas.IDownloadFileCaller,
     ibas.FileData,
    IRemoteRepository,
} from "ibas/index";
import * as bo from "./bo/index"

/** InitialFantasy 业务仓库 */
export interface ibas.IBORepositoryInitialFantasy extends IRemoteRepository {

    /**
     * 上传文件
     * @param caller 调用者
     */
    upload(caller: ibas.IUploadFileCaller< ibas.FileData>);
    /**
     * 下载文件
     * @param caller 调用者
     */
    download(caller: ibas.IDownloadFileCaller<Blob>);
    /**
     * 查询 应用程序功能
     * @param fetcher 查询者
     */
    fetchApplicationFunction(fetcher: ibas.IFetchCaller<bo.IApplicationFunction>);
    /**
     * 保存 应用程序功能
     * @param saver 保存者
     */
    saveApplicationFunction(saver: ibas.ISaveCaller<bo.IApplicationFunction>);

    /**
     * 查询 应用程序模块
     * @param fetcher 查询者
     */
    fetchApplicationModule(fetcher: ibas.IFetchCaller<bo.IApplicationModule>);
    /**
     * 保存 应用程序模块
     * @param saver 保存者
     */
    saveApplicationModule(saver: ibas.ISaveCaller<bo.IApplicationModule>);

    /**
     * 查询 应用程序平台
     * @param fetcher 查询者
     */
    fetchApplicationPlatform(fetcher: ibas.IFetchCaller<bo.IApplicationPlatform>);
    /**
     * 保存 应用程序平台
     * @param saver 保存者
     */
    saveApplicationPlatform(saver: ibas.ISaveCaller<bo.IApplicationPlatform>);

    /**
     * 查询 业务对象检索条件
     * @param fetcher 查询者
     */
    fetchBOCriteria(fetcher: ibas.IFetchCaller<bo.IBOCriteria>);
    /**
     * 保存 业务对象检索条件
     * @param saver 保存者
     */
    saveBOCriteria(saver: ibas.ISaveCaller<bo.IBOCriteria>);

    /**
     * 查询 业务对象筛选
     * @param fetcher 查询者
     */
    fetchBOFiltering(fetcher: ibas.IFetchCaller<bo.IBOFiltering>);
    /**
     * 保存 业务对象筛选
     * @param saver 保存者
     */
    saveBOFiltering(saver: ibas.ISaveCaller<bo.IBOFiltering>);

    /**
     * 查询 组织
     * @param fetcher 查询者
     */
    fetchOrganization(fetcher: ibas.IFetchCaller<bo.IOrganization>);
    /**
     * 保存 组织
     * @param saver 保存者
     */
    saveOrganization(saver: ibas.ISaveCaller<bo.IOrganization>);

    /**
     * 查询 系统权限
     * @param fetcher 查询者
     */
    fetchPrivilege(fetcher: ibas.IFetchCaller<bo.IPrivilege>);
    /**
     * 保存 系统权限
     * @param saver 保存者
     */
    savePrivilege(saver: ibas.ISaveCaller<bo.IPrivilege>);

    /**
     * 查询 用户
     * @param fetcher 查询者
     */
    fetchUser(fetcher: ibas.IFetchCaller<bo.IUser>);
    /**
     * 保存 用户
     * @param saver 保存者
     */
    saveUser(saver: ibas.ISaveCaller<bo.IUser>);

    /**
     * 查询 业务对象信息
     * @param fetcher 查询者
     */
    fetchBOInformation(fetcher: ibas.IFetchCaller<bo.IBOInformation>);
    /**
     * 保存 业务对象信息
     * @param saver 保存者
     */
    saveBOInformation(saver: ibas.ISaveCaller<bo.IBOInformation>);

    /**
     * 查询 项目
     * @param fetcher 查询者
     */
    fetchProject(fetcher: ibas.IFetchCaller<bo.IProject>);
    /**
     * 保存 项目
     * @param saver 保存者
     */
    saveProject(saver: ibas.ISaveCaller<bo.IProject>);

}
