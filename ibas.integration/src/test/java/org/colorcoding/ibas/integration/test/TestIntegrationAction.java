package org.colorcoding.ibas.integration.test;

import java.io.File;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.integration.MyConfiguration;
import org.colorcoding.ibas.integration.repository.FileRepositoryAction;
import org.colorcoding.ibas.integration.repository.IFileRepositoryActionApp;

import junit.framework.TestCase;

/**
 * 集成任务 测试
 * 
 */
public class TestIntegrationAction extends TestCase {
	/**
	 * 获取连接口令
	 */
	String getToken() {
		return OrganizationFactory.SYSTEM_USER.getToken();
	}

	/**
	 * 基本项目测试
	 * 
	 * @throws Exception
	 */
	public void testBasicItems() throws Exception {
		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		ICriteria criteria = null;
		IFileRepositoryActionApp boRepository = new FileRepositoryAction();
		File resFolder = new File(MyConfiguration.getWorkFolder());
		resFolder = resFolder.getParentFile().getParentFile().getParentFile();
		File packageFile = new File(
				resFolder.getPath() + File.separator + "release" + File.separator + "ibas.integration.test-0.1.0.war");
		operationResult = boRepository.registerAction(packageFile);
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		for (Object item : operationResult.getResultObjects()) {
			System.out.println(item.toString());
		}
		System.out.println("-----test-fetch-----");
		criteria = new Criteria();
		operationResult = boRepository.fetchAction(criteria);
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		for (Object item : operationResult.getResultObjects()) {
			System.out.println(item.toString());
		}
	}

}
