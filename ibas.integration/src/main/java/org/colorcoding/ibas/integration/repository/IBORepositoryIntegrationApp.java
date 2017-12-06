package org.colorcoding.ibas.integration.repository;

import java.io.File;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationMessage;
import org.colorcoding.ibas.bobas.repository.IBORepositoryApplication;
import org.colorcoding.ibas.integration.bo.integration.IntegrationAction;
import org.colorcoding.ibas.integration.bo.integrationjob.IIntegrationJob;

/**
 * Integration仓库应用
 */
public interface IBORepositoryIntegrationApp extends IBORepositoryApplication {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-集成动作
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	IOperationResult<IntegrationAction> fetchIntegrationAction(ICriteria criteria);

	/**
	 * 注册-集成动作
	 * 
	 * @param file
	 *            程序包
	 * @return
	 */
	IOperationResult<IntegrationAction> registerIntegrationAction(File file);

	/**
	 * 删除-集成动作
	 * 
	 * @param id
	 *            动作标记
	 * @return
	 */
	OperationMessage deleteIntegrationAction(String id);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-集成任务
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	IOperationResult<IIntegrationJob> fetchIntegrationJob(ICriteria criteria);

	/**
	 * 保存-集成任务
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	IOperationResult<IIntegrationJob> saveIntegrationJob(IIntegrationJob bo);

	// --------------------------------------------------------------------------------------------//

}
