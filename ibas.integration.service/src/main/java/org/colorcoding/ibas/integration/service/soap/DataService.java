package org.colorcoding.ibas.integration.service.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.cxf.WebServicePath;
import org.colorcoding.ibas.integration.bo.integrationjob.IntegrationJob;
import org.colorcoding.ibas.integration.repository.BORepositoryIntegration;

/**
 * Integration 数据服务JSON
 */
@WebService
@WebServicePath("data")
public class DataService extends BORepositoryIntegration {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-集成任务
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@WebMethod
	public OperationResult<IntegrationJob> fetchIntegrationJob(@WebParam(name = "criteria") Criteria criteria,
			@WebParam(name = "token") String token) {
		return super.fetchIntegrationJob(criteria, token);
	}

	/**
	 * 保存-集成任务
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@WebMethod
	public OperationResult<IntegrationJob> saveIntegrationJob(@WebParam(name = "bo") IntegrationJob bo,
			@WebParam(name = "token") String token) {
		return super.saveIntegrationJob(bo, token);
	}

	// --------------------------------------------------------------------------------------------//

}
