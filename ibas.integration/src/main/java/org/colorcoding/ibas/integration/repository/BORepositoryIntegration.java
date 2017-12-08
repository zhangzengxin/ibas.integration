package org.colorcoding.ibas.integration.repository;

import java.io.File;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationMessage;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.BORepositoryServiceApplication;
import org.colorcoding.ibas.integration.bo.integration.IntegrationAction;
import org.colorcoding.ibas.integration.bo.integrationjob.IIntegrationJob;
import org.colorcoding.ibas.integration.bo.integrationjob.IntegrationJob;

/**
 * Integration仓库
 */
public class BORepositoryIntegration extends BORepositoryServiceApplication
		implements IBORepositoryIntegrationSvc, IBORepositoryIntegrationApp {

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
	public OperationResult<IntegrationAction> fetchIntegrationAction(ICriteria criteria, String token) {
		try {
			this.setUserToken(token);
			return new FileRepositoryAction().fetchAction(criteria);
		} catch (Exception e) {
			return new OperationResult<>(e);
		}
	}

	/**
	 * 查询-集成动作（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public OperationResult<IntegrationAction> fetchIntegrationAction(ICriteria criteria) {
		return this.fetchIntegrationAction(criteria, this.getUserToken());
	}

	public IOperationResult<IntegrationAction> registerIntegrationAction(File file) {
		return this.registerIntegrationAction(file, this.getUserToken());
	}

	public OperationResult<IntegrationAction> registerIntegrationAction(File file, String token) {
		try {
			this.setUserToken(token);
			return new FileRepositoryAction().registerAction(file);
		} catch (Exception e) {
			return new OperationResult<>(e);
		}
	}

	public OperationMessage deleteActionPackage(String id) {
		return this.deleteActionPackage(id, this.getUserToken());
	}

	public OperationMessage deleteActionPackage(String group, String token) {
		try {
			this.setUserToken(token);
			return new FileRepositoryAction().deletePackage(group);
		} catch (Exception e) {
			return new OperationMessage(e);
		}
	}

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
	public OperationResult<IntegrationJob> fetchIntegrationJob(ICriteria criteria, String token) {
		return super.fetch(criteria, token, IntegrationJob.class);
	}

	/**
	 * 查询-集成任务（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IIntegrationJob> fetchIntegrationJob(ICriteria criteria) {
		return new OperationResult<IIntegrationJob>(this.fetchIntegrationJob(criteria, this.getUserToken()));
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
	public OperationResult<IntegrationJob> saveIntegrationJob(IntegrationJob bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-集成任务（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IIntegrationJob> saveIntegrationJob(IIntegrationJob bo) {
		return new OperationResult<IIntegrationJob>(this.saveIntegrationJob((IntegrationJob) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//

}
