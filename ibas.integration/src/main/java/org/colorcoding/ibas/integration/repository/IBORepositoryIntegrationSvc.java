package org.colorcoding.ibas.integration.repository;

import java.io.File;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.OperationMessage;
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
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<IntegrationAction> fetchIntegrationAction(ICriteria criteria, String token);

	/**
	 * 注册-集成动作
	 * 
	 * @param file
	 *            程序包
	 * @param token
	 *            口令
	 * @return
	 */
	OperationResult<IntegrationAction> registerIntegrationAction(File file, String token);

	/**
	 * 删除-集成动作包
	 * 
	 * @param group
	 *            包名称
	 * @param token
	 *            口令
	 * @return
	 */
	OperationMessage deleteActionPackage(String group, String token);

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
