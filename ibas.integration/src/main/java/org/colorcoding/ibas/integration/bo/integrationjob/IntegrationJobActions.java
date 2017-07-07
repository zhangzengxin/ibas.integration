package org.colorcoding.ibas.integration.bo.integrationjob;

import java.beans.PropertyChangeEvent;
import javax.xml.bind.annotation.*;
import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.integration.MyConsts;

/**
* 集成任务-动作 集合
*/
@XmlType(name = IntegrationJobActions.BUSINESS_OBJECT_NAME, namespace = MyConsts.NAMESPACE_BO)
@XmlSeeAlso({ IntegrationJobAction.class })
public class IntegrationJobActions extends BusinessObjects<IIntegrationJobAction, IIntegrationJob> implements IIntegrationJobActions {

    /**
    * 业务对象名称
    */
    public static final String BUSINESS_OBJECT_NAME = "IntegrationJobActions";

    /**
     * 序列化版本标记
     */
    private static final long serialVersionUID = 6041189511831305116L;

    /**
     * 构造方法
     */
    public IntegrationJobActions() {
        super();
    }

    /**
     * 构造方法
     * @param parent 父项对象
     */
    public IntegrationJobActions(IIntegrationJob parent) {
        super(parent);
    }

    /**
     * 元素类型
     */
    public Class<?> getElementType() {
        return IntegrationJobAction.class;
    }

    /**
    * 创建集成任务-动作
    * 
    * @return 集成任务-动作
    */
    public IIntegrationJobAction create() {
        IIntegrationJobAction item = new IntegrationJobAction();
        if (this.add(item)) {
            return item;
        }
        return null;
    }

    @Override
    protected void afterAddItem(IIntegrationJobAction item) {
        super.afterAddItem(item);
        // TODO 设置关联值
    }

    @Override
    public ICriteria getElementCriteria() {
        ICriteria criteria = super.getElementCriteria();
        // TODO 添加关联查询条件
        return criteria;
    }

    @Override
    public void onParentPropertyChanged(PropertyChangeEvent evt) {
        super.onParentPropertyChanged(evt);
        // TODO 设置关联值
    }
}
