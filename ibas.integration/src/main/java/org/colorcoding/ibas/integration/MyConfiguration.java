package org.colorcoding.ibas.integration;

/**
 * 我的配置项
 */
public class MyConfiguration extends org.colorcoding.ibas.bobas.MyConfiguration {

	/**
	 * 模块标识
	 */
	public static final String MODULE_ID = "568e7e6d-a67a-46a8-93b9-7bc896b1c2b7";

	/**
	 * 命名空间
	 */
	public static final String NAMESPACE_ROOT = "http://colorcoding.org/ibas/integration/";

	/**
	 * 数据命名空间
	 */
	public static final String NAMESPACE_DATA = NAMESPACE_ROOT + "data";

	/**
	 * 业务对象命名空间
	 */
	public static final String NAMESPACE_BO = NAMESPACE_ROOT + "bo";

	/**
	 * 服务命名空间
	 */
	public static final String NAMESPACE_SERVICE = NAMESPACE_ROOT + "service";
	/**
	 * 配置项目-文件文件夹
	 */
	public final static String CONFIG_ITEM_INTEGRATION_FILE_FOLDER = "IGFileFolder";
	/**
	 * 配置项目-动作文件文件夹
	 */
	public final static String CONFIG_ITEM_INTEGRATION_ACTION_FOLDER = "IGActionFolder";

}
