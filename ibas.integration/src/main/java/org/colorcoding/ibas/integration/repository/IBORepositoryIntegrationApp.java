package org.colorcoding.ibas.integration.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositoryApplication;
import org.colorcoding.ibas.integration.bo.integrationjob.IIntegrationJob;

/**
 * Integration仓库应用
 */
public interface IBORepositoryIntegrationApp extends IBORepositoryApplication {

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
