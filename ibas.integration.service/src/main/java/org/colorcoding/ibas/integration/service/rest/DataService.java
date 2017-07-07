package org.colorcoding.ibas.integration.service.rest;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.integration.repository.*;
import org.colorcoding.ibas.integration.bo.integrationjob.*;

/**
* Integration 数据服务JSON
*/
@Path("data")
public class DataService extends BORepositoryIntegration {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-集成任务
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("fetchIntegrationJob")
    public OperationResult<IntegrationJob> fetchIntegrationJob(Criteria criteria, @QueryParam("token") String token) {
        return super.fetchIntegrationJob(criteria, token);
    }

    /**
     * 保存-集成任务
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("saveIntegrationJob")
    public OperationResult<IntegrationJob> saveIntegrationJob(IntegrationJob bo, @QueryParam("token") String token) {
        return super.saveIntegrationJob(bo, token);
    }

    //--------------------------------------------------------------------------------------------//

}
