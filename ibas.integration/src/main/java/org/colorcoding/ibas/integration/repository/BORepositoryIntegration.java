package org.colorcoding.ibas.integration.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.ownership.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.integration.bo.integrationjob.*;

/**
* Integration仓库
*/
@PermissionGroup("Integration")
public class BORepositoryIntegration extends BORepositoryServiceApplication implements IBORepositoryIntegrationSvc, IBORepositoryIntegrationApp {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-集成任务
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    public OperationResult<IntegrationJob> fetchIntegrationJob(ICriteria criteria, String token) {
        return super.fetch(criteria, token, IntegrationJob.class);
    }

    /**
     * 查询-集成任务（提前设置用户口令）
     * @param criteria 查询
     * @return 操作结果
     */
    public IOperationResult<IIntegrationJob> fetchIntegrationJob(ICriteria criteria) {
        return new OperationResult<IIntegrationJob>(this.fetchIntegrationJob(criteria, this.getUserToken()));
    }

    /**
     * 保存-集成任务
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    public OperationResult<IntegrationJob> saveIntegrationJob(IntegrationJob bo, String token) {
        return super.save(bo, token);
    }

    /**
     * 保存-集成任务（提前设置用户口令）
     * @param bo 对象实例
     * @return 操作结果
     */
    public IOperationResult<IIntegrationJob> saveIntegrationJob(IIntegrationJob bo) {
        return new OperationResult<IIntegrationJob>(this.saveIntegrationJob((IntegrationJob) bo, this.getUserToken()));
    }

    //--------------------------------------------------------------------------------------------//

}
