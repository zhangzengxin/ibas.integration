package org.colorcoding.ibas.integration.bo.integration;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.data.ArrayList;
import org.colorcoding.ibas.integration.MyConfiguration;

/**
 * 集成动作
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(name = IntegrationAction.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = IntegrationAction.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlAccessorType(XmlAccessType.FIELD)
public class IntegrationAction {

	public static final String BUSINESS_OBJECT_NAME = "IntegrationAction";
	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	private String path;

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	private boolean activated;

	public boolean isActivated() {
		return activated;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}

	private ArrayList<IntegrationActionConfig> configs;

	public ArrayList<IntegrationActionConfig> getConfigs() {
		if (this.configs == null) {
			this.configs = new ArrayList<>();
		}
		return configs;
	}

	@Override
	public String toString() {
		return String.format("{action: %s %s}", this.getName() != null ? this.getName() : this.getId(), this.getPath());
	}
}
