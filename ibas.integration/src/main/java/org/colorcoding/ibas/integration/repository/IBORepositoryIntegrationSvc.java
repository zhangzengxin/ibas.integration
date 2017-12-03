package org.colorcoding.ibas.integration.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositorySmartService;
import org.colorcoding.ibas.integration.bo.integration.IntegrationAction;
import org.colorcoding.ibas.integration.bo.integrationjob.IntegrationJob;

/**
 * Integration仓库服务
 */
public interface IBORepositoryIntegrationSvc extends IBORepositorySmartService {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-集成动作
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	OperationResult<IntegrationAction> fetchIntegrationAction(ICriteria criteria);

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
	OperationResult<IntegrationJob> fetchIntegrationJob(ICriteria criteria, String token);

	/**
	 * 保存-集成任务
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<IntegrationJob> saveIntegrationJob(IntegrationJob bo, String token);

	// --------------------------------------------------------------------------------------------//

}
