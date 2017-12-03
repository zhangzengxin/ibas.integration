package org.colorcoding.ibas.integration.data;

import org.colorcoding.ibas.bobas.mapping.Value;

/**
 * 动作关系
 * 
 * @author Niuren.Zhu
 *
 */
public enum emActionRelationship {
	/**
	 * 与
	 */
	@Value(value = "&&")
	AND,
	/**
	 * 或
	 */
	@Value(value = "||")
	OR;
}
