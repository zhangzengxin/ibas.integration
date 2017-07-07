package org.colorcoding.ibas.integration.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.integration.bo.integrationjob.*;

/**
* Integration仓库服务
*/
public interface IBORepositoryIntegrationSvc extends IBORepositorySmartService {


    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-集成任务
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<IntegrationJob> fetchIntegrationJob(ICriteria criteria, String token);

    /**
     * 保存-集成任务
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<IntegrationJob> saveIntegrationJob(IntegrationJob bo, String token);

    //--------------------------------------------------------------------------------------------//

}
