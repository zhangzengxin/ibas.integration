package org.colorcoding.ibas.integration.test.bo;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.integration.bo.integrationjob.IIntegrationJobAction;
import org.colorcoding.ibas.integration.bo.integrationjob.IntegrationJob;
import org.colorcoding.ibas.integration.repository.BORepositoryIntegration;
import org.colorcoding.ibas.integration.repository.IBORepositoryIntegrationApp;

import junit.framework.TestCase;

/**
 * 集成任务 测试
 * 
 */
public class testIntegrationJob extends TestCase {
	/**
	 * 获取连接口令
	 */
	String getToken() {
		return "";
	}

	/**
	 * 基本项目测试
	 * 
	 * @throws Exception
	 */
	public void testBasicItems() throws Exception {
		IntegrationJob bo = new IntegrationJob();
		// 测试属性赋值

		// 测试集成任务-动作
		IIntegrationJobAction integrationjobaction = bo.getIntegrationJobActions().create();
		System.out.println(String.format("new item: %s", integrationjobaction.toString()));
		// 测试属性赋值

		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		ICriteria criteria = null;
		IBORepositoryIntegrationApp boRepository = new BORepositoryIntegration();
		// 设置用户口令
		boRepository.setUserToken(this.getToken());

		// 测试保存
		operationResult = boRepository.saveIntegrationJob(bo);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		IntegrationJob boSaved = (IntegrationJob) operationResult.getResultObjects().firstOrDefault();

		// 测试查询
		criteria = boSaved.getCriteria();
		criteria.setResultCount(10);
		operationResult = boRepository.fetchIntegrationJob(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

	}

}
