package org.colorcoding.ibas.integration.bo.integration;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.integration.MyConfiguration;

/**
 * 集成动作-配置
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(name = IntegrationActionConfig.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlAccessorType(XmlAccessType.FIELD)
public class IntegrationActionConfig {

	public static final String BUSINESS_OBJECT_NAME = "IntegrationActionConfig";

	public IntegrationActionConfig() {

	}

	public IntegrationActionConfig(String key, Object value) {
		this();
		this.setKey(key);
		this.setValue(value);
	}

	private String key;

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	private Object value;

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return String.format("{action config: %s %s}", this.getKey(), this.getValue());
	}
}
