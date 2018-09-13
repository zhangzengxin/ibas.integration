declare namespace initialfantasy {
    const CONSOLE_ID: string;
    const CONSOLE_NAME: string;
    const CONSOLE_VERSION: string;
    const CONFIG_VALUE_ORGANIZATION_WAY: string;
    const CONFIG_VALUE_OWNERSHIP_WAY: string;
    namespace bo {
        const BO_REPOSITORY_INITIALFANTASY: string;
        const BO_CODE_APPLICATIONCONFIG: string;
        const BO_CODE_APPLICATIONELEMENT: string;
        const BO_CODE_APPLICATIONMODULE: string;
        const BO_CODE_APPLICATIONPLATFORM: string;
        const BO_CODE_BOCRITERIA: string;
        const BO_CODE_BOFILTERING: string;
        const BO_CODE_ORGANIZATION: string;
        const BO_CODE_PRIVILEGE: string;
        const BO_CODE_USER: string;
        const BO_CODE_BOINFORMATION: string;
        const BO_CODE_SYSTEM_VARIABLE: string;
        const BO_CODE_SYSTEM_CONFIG: string;
        const BO_CODE_ROLE: string;
        const BO_CODE_PROJECT: string;
        enum emAssignedType {
            USER = 0,
            ROLE = 1
        }
        enum emFilteringType {
            UNAVAILABLE = 0,
            AVAILABLE = 1
        }
        enum emElementType {
            MODULE = 0,
            FUNCTION = 1,
            APPLICATION = 2,
            SERVICE = 3,
            OTHER = 4
        }
        interface IRole {
            code: string;
            name: string;
            activated: ibas.emYesNo;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IApplicationConfig extends ibas.IBOSimple {
            configGroup: string;
            configKey: string;
            configDescription: string;
            configValue: string;
            objectKey: number;
            objectCode: string;
            dataSource: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            createActionId: string;
            updateActionId: string;
            logInst: number;
            createUserSign: number;
            updateUserSign: number;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IApplicationElement extends ibas.IBOSimple {
            moduleId: string;
            elementId: string;
            elementName: string;
            elementType: emElementType;
            objectKey: number;
            objectCode: string;
            dataSource: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            createActionId: string;
            updateActionId: string;
            logInst: number;
            createUserSign: number;
            updateUserSign: number;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IApplicationModule extends ibas.IBOSimple {
            moduleId: string;
            platformId: string;
            moduleName: string;
            moduleCategory: string;
            moduleEntry: string;
            activated: ibas.emYesNo;
            objectKey: number;
            objectCode: string;
            dataSource: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            createActionId: string;
            updateActionId: string;
            logInst: number;
            createUserSign: number;
            updateUserSign: number;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IApplicationPlatform extends ibas.IBOSimple {
            platformId: string;
            platformCode: string;
            platformDescription: string;
            activated: ibas.emYesNo;
            objectKey: number;
            objectCode: string;
            dataSource: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            createActionId: string;
            updateActionId: string;
            logInst: number;
            createUserSign: number;
            updateUserSign: number;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IBOCriteria extends ibas.IBOSimple {
            applicationId: string;
            name: string;
            assignedType: emAssignedType;
            assigned: string;
            activated: ibas.emYesNo;
            data: string;
            order: number;
            objectKey: number;
            objectCode: string;
            logInst: number;
            series: number;
            dataSource: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            createUserSign: number;
            updateUserSign: number;
            createActionId: string;
            updateActionId: string;
            organization: string;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IBOFiltering extends ibas.IBOSimple {
            roleCode: string;
            boCode: string;
            activated: ibas.emYesNo;
            filteringType: emFilteringType;
            name: string;
            objectKey: number;
            objectCode: string;
            logInst: number;
            series: number;
            dataSource: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            createActionId: string;
            updateActionId: string;
            createUserSign: number;
            updateUserSign: number;
            dataOwner: number;
            organization: string;
            boFilteringConditions: IBOFilteringConditions;
        }
        interface IBOFilteringCondition extends ibas.IBOSimpleLine {
            objectKey: number;
            objectCode: string;
            lineId: number;
            logInst: number;
            dataSource: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            createUserSign: number;
            updateUserSign: number;
            createActionId: string;
            updateActionId: string;
            propertyName: string;
            conditionValue: string;
            operation: ibas.emConditionOperation;
            relationship: ibas.emConditionRelationship;
            bracketOpen: number;
            bracketClose: number;
        }
        interface IBOFilteringConditions extends ibas.IBusinessObjects<IBOFilteringCondition> {
            create(): IBOFilteringCondition;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IBOInformation extends ibas.IBusinessObject {
            code: string;
            name: string;
            description: string;
            mapped: string;
            objectType: string;
            boPropertyInformations: IBOPropertyInformations;
        }
        interface IBOPropertyInformation extends ibas.IBusinessObject {
            code: string;
            property: string;
            mapped: string;
            description: string;
            dataType: string;
            editType: string;
            editSize: number;
            searched: ibas.emYesNo;
            systemed: ibas.emYesNo;
            editable: ibas.emYesNo;
            boPropertyValues: IBOPropertyValues;
        }
        interface IBOPropertyInformations extends ibas.IBusinessObjects<IBOPropertyInformation> {
            create(): IBOPropertyInformation;
        }
        interface IBOPropertyValue extends ibas.IBusinessObject {
            code: string;
            property: string;
            value: string;
            description: string;
        }
        interface IBOPropertyValues extends ibas.IBusinessObjects<IBOPropertyValue> {
            create(): IBOPropertyValue;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IOrganization extends ibas.IBOMasterData, ibas.IBOUserFields {
            code: string;
            name: string;
            activated: ibas.emYesNo;
            docEntry: number;
            objectCode: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            dataSource: string;
            logInst: number;
            series: number;
            createUserSign: number;
            updateUserSign: number;
            createActionId: string;
            updateActionId: string;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IPrivilege extends ibas.IBOSimple {
            roleCode: string;
            platformId: string;
            moduleId: string;
            target: string;
            activated: ibas.emYesNo;
            authoriseValue: ibas.emAuthoriseType;
            objectKey: number;
            objectCode: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            logInst: number;
            series: number;
            dataSource: string;
            createUserSign: number;
            updateUserSign: number;
            createActionId: string;
            updateActionId: string;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IProject extends ibas.IBOMasterData, ibas.IBOUserFields {
            code: string;
            name: string;
            activated: ibas.emYesNo;
            manager: number;
            dataOwner: number;
            organization: string;
            teamMembers: string;
            referenced: ibas.emYesNo;
            deleted: ibas.emYesNo;
            reference1: string;
            reference2: string;
            docEntry: number;
            objectCode: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            dataSource: string;
            logInst: number;
            series: number;
            createUserSign: number;
            updateUserSign: number;
            createActionId: string;
            updateActionId: string;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IUser extends ibas.IBOMasterData, ibas.IBOUserFields {
            code: string;
            name: string;
            password: string;
            activated: ibas.emYesNo;
            super: ibas.emYesNo;
            mail: string;
            phone: string;
            docEntry: number;
            objectCode: string;
            createDate: Date;
            createTime: number;
            updateDate: Date;
            updateTime: number;
            dataSource: string;
            logInst: number;
            series: number;
            createUserSign: number;
            updateUserSign: number;
            createActionId: string;
            updateActionId: string;
            approvalStatus: ibas.emApprovalStatus;
            dataOwner: number;
            organization: string;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        interface IBORepositoryInitialFantasy extends ibas.IBORepositoryApplication {
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            fetchApplicationConfig(fetcher: ibas.IFetchCaller<bo.IApplicationConfig>): void;
            saveApplicationConfig(saver: ibas.ISaveCaller<bo.IApplicationConfig>): void;
            fetchApplicationElement(fetcher: ibas.IFetchCaller<bo.IApplicationElement>): void;
            saveApplicationElement(saver: ibas.ISaveCaller<bo.IApplicationElement>): void;
            fetchApplicationModule(fetcher: ibas.IFetchCaller<bo.IApplicationModule>): void;
            saveApplicationModule(saver: ibas.ISaveCaller<bo.IApplicationModule>): void;
            fetchApplicationPlatform(fetcher: ibas.IFetchCaller<bo.IApplicationPlatform>): void;
            saveApplicationPlatform(saver: ibas.ISaveCaller<bo.IApplicationPlatform>): void;
            fetchBOCriteria(fetcher: ibas.IFetchCaller<bo.IBOCriteria>): void;
            saveBOCriteria(saver: ibas.ISaveCaller<bo.IBOCriteria>): void;
            fetchBOFiltering(fetcher: ibas.IFetchCaller<bo.IBOFiltering>): void;
            saveBOFiltering(saver: ibas.ISaveCaller<bo.IBOFiltering>): void;
            fetchOrganization(fetcher: ibas.IFetchCaller<bo.IOrganization>): void;
            saveOrganization(saver: ibas.ISaveCaller<bo.IOrganization>): void;
            fetchPrivilege(fetcher: ibas.IFetchCaller<bo.IPrivilege>): void;
            savePrivilege(saver: ibas.ISaveCaller<bo.IPrivilege>): void;
            fetchUser(fetcher: ibas.IFetchCaller<bo.IUser>): void;
            saveUser(saver: ibas.ISaveCaller<bo.IUser>): void;
            fetchBOInformation(fetcher: ibas.IFetchCaller<bo.IBOInformation>): void;
            saveBOInformation(saver: ibas.ISaveCaller<bo.IBOInformation>): void;
            fetchProject(fetcher: ibas.IFetchCaller<bo.IProject>): void;
            saveProject(saver: ibas.ISaveCaller<bo.IProject>): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class ApplicationConfig extends ibas.BOSimple<ApplicationConfig> implements IApplicationConfig {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_CONFIGGROUP_NAME: string;
            configGroup: string;
            static PROPERTY_CONFIGKEY_NAME: string;
            configKey: string;
            static PROPERTY_CONFIGDESCRIPTION_NAME: string;
            configDescription: string;
            static PROPERTY_CONFIGVALUE_NAME: string;
            configValue: string;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class ApplicationElement extends ibas.BOSimple<ApplicationElement> implements IApplicationElement {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_MODULEID_NAME: string;
            moduleId: string;
            static PROPERTY_ELEMENTID_NAME: string;
            elementId: string;
            static PROPERTY_ELEMENTNAME_NAME: string;
            elementName: string;
            static PROPERTY_ELEMENTTYPE_NAME: string;
            elementType: emElementType;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class ApplicationModule extends ibas.BOSimple<ApplicationModule> implements IApplicationModule {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_MODULEID_NAME: string;
            moduleId: string;
            static PROPERTY_PLATFORMID_NAME: string;
            platformId: string;
            static PROPERTY_MODULENAME_NAME: string;
            moduleName: string;
            static PROPERTY_MODULECATEGORY_NAME: string;
            moduleCategory: string;
            static PROPERTY_MODULEENTRY_NAME: string;
            moduleEntry: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class ApplicationPlatform extends ibas.BOSimple<ApplicationPlatform> implements IApplicationPlatform {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_PLATFORMID_NAME: string;
            platformId: string;
            static PROPERTY_PLATFORMCODE_NAME: string;
            platformCode: string;
            static PROPERTY_PLATFORMDESCRIPTION_NAME: string;
            platformDescription: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class BOCriteria extends ibas.BOSimple<BOCriteria> implements IBOCriteria {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_APPLICATIONID_NAME: string;
            applicationId: string;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_ASSIGNEDTYPE_NAME: string;
            assignedType: emAssignedType;
            static PROPERTY_ASSIGNED_NAME: string;
            assigned: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_DATA_NAME: string;
            data: string;
            static PROPERTY_ORDER_NAME: string;
            order: number;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_SERIES_NAME: string;
            series: number;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class BOFiltering extends ibas.BOSimple<BOFiltering> implements IBOFiltering {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_ROLECODE_NAME: string;
            roleCode: string;
            static PROPERTY_BOCODE_NAME: string;
            boCode: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_FILTERINGTYPE_NAME: string;
            filteringType: emFilteringType;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_SERIES_NAME: string;
            series: number;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            static PROPERTY_BOFILTERINGCONDITIONS_NAME: string;
            boFilteringConditions: BOFilteringConditions;
            protected init(): void;
        }
        class BOFilteringCondition extends ibas.BOSimpleLine<BOFilteringCondition> implements IBOFilteringCondition {
            constructor();
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_LINEID_NAME: string;
            lineId: number;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            static PROPERTY_PROPERTYNAME_NAME: string;
            propertyName: string;
            static PROPERTY_CONDITIONVALUE_NAME: string;
            conditionValue: string;
            static PROPERTY_OPERATION_NAME: string;
            operation: ibas.emConditionOperation;
            static PROPERTY_RELATIONSHIP_NAME: string;
            relationship: ibas.emConditionRelationship;
            static PROPERTY_BRACKETOPEN_NAME: string;
            bracketOpen: number;
            static PROPERTY_BRACKETCLOSE_NAME: string;
            bracketClose: number;
            protected init(): void;
        }
        class BOFilteringConditions extends ibas.BusinessObjects<BOFilteringCondition, BOFiltering> implements IBOFilteringConditions {
            create(): BOFilteringCondition;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class BOInformation extends ibas.BusinessObject<BOInformation> implements IBOInformation {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_DESCRIPTION_NAME: string;
            description: string;
            static PROPERTY_MAPPED_NAME: string;
            mapped: string;
            static PROPERTY_OBJECTTYPE_NAME: string;
            objectType: string;
            static PROPERTY_BOPROPERTYINFORMATIONS_NAME: string;
            boPropertyInformations: BOPropertyInformations;
            toString(): string;
            criteria(): ibas.ICriteria;
            protected init(): void;
        }
        class BOPropertyInformation extends ibas.BusinessObject<BOPropertyInformation> implements IBOPropertyInformation {
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_PROPERTY_NAME: string;
            property: string;
            static PROPERTY_MAPPED_NAME: string;
            mapped: string;
            static PROPERTY_DESCRIPTION_NAME: string;
            description: string;
            static PROPERTY_DATATYPE_NAME: string;
            dataType: string;
            static PROPERTY_EDITTYPE_NAME: string;
            editType: string;
            static PROPERTY_EDITSIZE_NAME: string;
            editSize: number;
            static PROPERTY_SEARCHED_NAME: string;
            searched: ibas.emYesNo;
            static PROPERTY_SYSTEMED_NAME: string;
            systemed: ibas.emYesNo;
            static PROPERTY_EDITABLE_NAME: string;
            editable: ibas.emYesNo;
            static PROPERTY_BOPROPERTYVALUES_NAME: string;
            boPropertyValues: BOPropertyValues;
            toString(): string;
            criteria(): ibas.ICriteria;
            protected init(): void;
        }
        class BOPropertyInformations extends ibas.BusinessObjects<BOPropertyInformation, BOInformation> implements IBOPropertyInformations {
            create(): BOPropertyInformation;
        }
        class BOPropertyValue extends ibas.BusinessObject<BOPropertyValue> implements IBOPropertyValue {
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_PROPERTY_NAME: string;
            property: string;
            static PROPERTY_VALUE_NAME: string;
            value: string;
            static PROPERTY_DESCRIPTION_NAME: string;
            description: string;
            toString(): string;
            criteria(): ibas.ICriteria;
            protected init(): void;
        }
        class BOPropertyValues extends ibas.BusinessObjects<BOPropertyValue, BOPropertyInformation> implements IBOPropertyValues {
            create(): BOPropertyValue;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class BONumbering extends ibas.BusinessObject<BONumbering> {
            constructor();
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_DOCUMENTSUBTYPE_NAME: string;
            documentSubType: string;
            static PROPERTY_AUTOKEY_NAME: string;
            autoKey: number;
            toString(): string;
            criteria(): ibas.ICriteria;
            protected init(): void;
        }
        class BOSeriesNumbering extends ibas.BusinessObject<BOSeriesNumbering> {
            constructor();
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_SERIES_NAME: string;
            series: number;
            static PROPERTY_SERIESNAME_NAME: string;
            seriesName: string;
            static PROPERTY_NEXTNUMBER_NAME: string;
            nextNumber: number;
            static PROPERTY_LOCKED_NAME: string;
            locked: ibas.emYesNo;
            static PROPERTY_TEMPLATE_NAME: string;
            template: string;
            toString(): string;
            criteria(): ibas.ICriteria;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class Organization extends ibas.BOMasterData<Organization> implements IOrganization {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_SERIES_NAME: string;
            series: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class Privilege extends ibas.BOSimple<Privilege> implements IPrivilege {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_ROLECODE_NAME: string;
            roleCode: string;
            static PROPERTY_PLATFORMID_NAME: string;
            platformId: string;
            static PROPERTY_MODULEID_NAME: string;
            moduleId: string;
            static PROPERTY_TARGET_NAME: string;
            target: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_AUTHORISEVALUE_NAME: string;
            authoriseValue: ibas.emAuthoriseType;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_SERIES_NAME: string;
            series: number;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class Project extends ibas.BOMasterData<Project> implements IProject {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_MANAGER_NAME: string;
            manager: number;
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            static PROPERTY_TEAMMEMBERS_NAME: string;
            teamMembers: string;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_DELETED_NAME: string;
            deleted: ibas.emYesNo;
            static PROPERTY_REFERENCE1_NAME: string;
            reference1: string;
            static PROPERTY_REFERENCE2_NAME: string;
            reference2: string;
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_SERIES_NAME: string;
            series: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class User extends ibas.BOMasterData<User> implements IUser {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_PASSWORD_NAME: string;
            password: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_SUPER_NAME: string;
            super: ibas.emYesNo;
            static PROPERTY_MAIL_NAME: string;
            mail: string;
            static PROPERTY_PHONE_NAME: string;
            phone: string;
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_CREATEDATE_NAME: string;
            createDate: Date;
            static PROPERTY_CREATETIME_NAME: string;
            createTime: number;
            static PROPERTY_UPDATEDATE_NAME: string;
            updateDate: Date;
            static PROPERTY_UPDATETIME_NAME: string;
            updateTime: number;
            static PROPERTY_DATASOURCE_NAME: string;
            dataSource: string;
            static PROPERTY_LOGINST_NAME: string;
            logInst: number;
            static PROPERTY_SERIES_NAME: string;
            series: number;
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            createUserSign: number;
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            updateUserSign: number;
            static PROPERTY_CREATEACTIONID_NAME: string;
            createActionId: string;
            static PROPERTY_UPDATEACTIONID_NAME: string;
            updateActionId: string;
            static PROPERTY_APPROVALSTATUS_NAME: string;
            approvalStatus: ibas.emApprovalStatus;
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            protected init(): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
        class DataConverter extends ibas.DataConverter4j {
            protected createConverter(): ibas.BOConverter;
        }
        const boFactory: ibas.BOFactory;
    }
}
declare namespace initialfantasy {
    namespace bo {
        class BORepositoryInitialFantasy extends ibas.BORepositoryApplication implements IBORepositoryInitialFantasy {
            protected createConverter(): ibas.IDataConverter;
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            fetchApplicationConfig(fetcher: ibas.IFetchCaller<bo.ApplicationConfig>): void;
            saveApplicationConfig(saver: ibas.ISaveCaller<bo.ApplicationConfig>): void;
            fetchApplicationElement(fetcher: ibas.IFetchCaller<bo.ApplicationElement>): void;
            saveApplicationElement(saver: ibas.ISaveCaller<bo.ApplicationElement>): void;
            fetchApplicationModule(fetcher: ibas.IFetchCaller<bo.ApplicationModule>): void;
            saveApplicationModule(saver: ibas.ISaveCaller<bo.ApplicationModule>): void;
            fetchApplicationPlatform(fetcher: ibas.IFetchCaller<bo.ApplicationPlatform>): void;
            saveApplicationPlatform(saver: ibas.ISaveCaller<bo.ApplicationPlatform>): void;
            fetchBOCriteria(fetcher: ibas.IFetchCaller<bo.BOCriteria>): void;
            saveBOCriteria(saver: ibas.ISaveCaller<bo.BOCriteria>): void;
            fetchBOFiltering(fetcher: ibas.IFetchCaller<bo.BOFiltering>): void;
            saveBOFiltering(saver: ibas.ISaveCaller<bo.BOFiltering>): void;
            fetchOrganization(fetcher: ibas.IFetchCaller<bo.Organization>): void;
            saveOrganization(saver: ibas.ISaveCaller<bo.Organization>): void;
            fetchPrivilege(fetcher: ibas.IFetchCaller<bo.Privilege>): void;
            savePrivilege(saver: ibas.ISaveCaller<bo.Privilege>): void;
            fetchUser(fetcher: ibas.IFetchCaller<bo.User>): void;
            saveUser(saver: ibas.ISaveCaller<bo.User>): void;
            fetchBOInformation(fetcher: ibas.IFetchCaller<bo.BOInformation>): void;
            saveBOInformation(saver: ibas.ISaveCaller<bo.BOInformation>): void;
            fetchBONumbering(fetcher: ibas.IFetchCaller<bo.BONumbering>): void;
            fetchBOSeriesNumbering(fetcher: ibas.IFetchCaller<bo.BOSeriesNumbering>): void;
            saveBOSeriesNumbering(saver: ibas.ISaveCaller<bo.BOSeriesNumbering>): void;
            fetchProject(fetcher: ibas.IFetchCaller<bo.Project>): void;
            saveProject(saver: ibas.ISaveCaller<bo.Project>): void;
        }
    }
}
declare namespace initialfantasy {
    namespace bo {
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationConfigFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationConfigListApp extends ibas.BOListApplication<IApplicationConfigListView, bo.ApplicationConfig> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.ApplicationConfig): void;
            protected editData(data: bo.ApplicationConfig): void;
            protected deleteData(data: bo.ApplicationConfig | bo.ApplicationConfig[]): void;
        }
        interface IApplicationConfigListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.ApplicationConfig[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationConfigEditApp extends ibas.BOEditApplication<IApplicationConfigEditView, bo.ApplicationConfig> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.ApplicationConfig): void;
            protected editData: bo.ApplicationConfig;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
        }
        interface IApplicationConfigEditView extends ibas.IBOEditView {
            showApplicationConfig(data: bo.ApplicationConfig): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationElementFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationElementListApp extends ibas.BOListApplication<IApplicationElementListView, bo.ApplicationElement> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.ApplicationElement): void;
            protected editData(data: bo.ApplicationElement): void;
            protected deleteData(data: bo.ApplicationElement | bo.ApplicationElement[]): void;
            private registerElements;
            private applicationPlatform;
            private applicationModule;
        }
        interface IApplicationElementListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            applicationPlatformEvent: Function;
            applicationModuleEvent: Function;
            showData(datas: bo.ApplicationElement[]): void;
            registerElementsEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationElementChooseApp extends ibas.BOChooseService<IApplicationElementChooseView, bo.ApplicationElement> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IApplicationElementChooseView extends ibas.IBOChooseView {
            showData(datas: bo.ApplicationElement[]): void;
        }
        class ApplicationElementChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IBOChooseService<bo.ApplicationElement>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationElementEditApp extends ibas.BOEditApplication<IApplicationElementEditView, bo.ApplicationElement> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.ApplicationElement): void;
            protected editData: bo.ApplicationElement;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
        }
        interface IApplicationElementEditView extends ibas.IBOEditView {
            showApplicationElement(data: bo.ApplicationElement): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationModuleChooseApp extends ibas.BOChooseService<IApplicationModuleChooseView, bo.ApplicationModule> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IApplicationModuleChooseView extends ibas.IBOChooseView {
            showData(datas: bo.ApplicationModule[]): void;
        }
        class ApplicationModuleChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.ApplicationModule>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationModuleEditApp extends ibas.BOEditApplication<IApplicationModuleEditView, bo.ApplicationModule> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.ApplicationModule): void;
            protected editData: bo.ApplicationModule;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
        }
        interface IApplicationModuleEditView extends ibas.IBOEditView {
            showApplicationModule(data: bo.ApplicationModule): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationModuleFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationModuleListApp extends ibas.BOListApplication<IApplicationModuleListView, bo.ApplicationModule> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.ApplicationModule): void;
            protected editData(data: bo.ApplicationModule): void;
            protected deleteData(data: bo.ApplicationModule | bo.ApplicationModule[]): void;
        }
        interface IApplicationModuleListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.ApplicationModule[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationPlatformChooseApp extends ibas.BOChooseService<IApplicationPlatformChooseView, bo.ApplicationPlatform> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IApplicationPlatformChooseView extends ibas.IBOChooseView {
            showData(datas: bo.ApplicationPlatform[]): void;
        }
        class ApplicationPlatformChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.ApplicationPlatform>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationPlatformEditApp extends ibas.BOEditApplication<IApplicationPlatformEditView, bo.ApplicationPlatform> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.ApplicationPlatform): void;
            protected editData: bo.ApplicationPlatform;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
        }
        interface IApplicationPlatformEditView extends ibas.IBOEditView {
            showApplicationPlatform(data: bo.ApplicationPlatform): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationPlatformFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ApplicationPlatformListApp extends ibas.BOListApplication<IApplicationPlatformListView, bo.ApplicationPlatform> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.ApplicationPlatform): void;
            protected editData(data: bo.ApplicationPlatform): void;
            protected deleteData(data: bo.ApplicationPlatform | bo.ApplicationPlatform[]): void;
        }
        interface IApplicationPlatformListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.ApplicationPlatform[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOCriteriaChooseApp extends ibas.BOChooseService<IBOCriteriaChooseView, bo.BOCriteria> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IBOCriteriaChooseView extends ibas.IBOChooseView {
            showData(datas: bo.BOCriteria[]): void;
        }
        class BOCriteriaChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.BOCriteria>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOCriteriaEditApp extends ibas.BOEditApplication<IBOCriteriaEditView, bo.BOCriteria> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.BOCriteria): void;
            protected editData: bo.BOCriteria;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            private chooseApplication;
            private chooseBusinessObject;
            private chooseRoleUser;
            private editCriteria;
        }
        interface IBOCriteriaEditView extends ibas.IBOEditView {
            showBOCriteria(data: bo.BOCriteria): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            chooseApplicationEvent: Function;
            chooseBusinessObjectEvent: Function;
            chooseRoleUserEvent: Function;
            editCriteriaEvent: Function;
            target: string;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOCriteriaFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOCriteriaListApp extends ibas.BOListApplication<IBOCriteriaListView, bo.BOCriteria> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.BOCriteria): void;
            protected editData(data: bo.BOCriteria): void;
            protected deleteData(data: bo.BOCriteria | bo.BOCriteria[]): void;
        }
        interface IBOCriteriaListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.BOCriteria[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOFilteringChooseApp extends ibas.BOChooseService<IBOFilteringChooseView, bo.BOFiltering> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IBOFilteringChooseView extends ibas.IBOChooseView {
            showData(datas: bo.BOFiltering[]): void;
        }
        class BOFilteringChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.BOFiltering>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOFilteringEditApp extends ibas.BOEditApplication<IBOFilteringEditView, bo.BOFiltering> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.BOFiltering): void;
            protected editData: bo.BOFiltering;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            addBOFilteringCondition(): void;
            removeBOFilteringCondition(items: bo.BOFilteringCondition[]): void;
            private chooseRole;
            private chooseBusinessObject;
        }
        interface IBOFilteringEditView extends ibas.IBOEditView {
            chooseRoleEvent: Function;
            chooseBusinessObjectEvent: Function;
            showBOFiltering(data: bo.BOFiltering): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            addBOFilteringConditionEvent: Function;
            removeBOFilteringConditionEvent: Function;
            showBOFilteringConditions(datas: bo.BOFilteringCondition[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOFilteringFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOFilteringListApp extends ibas.BOListApplication<IBOFilteringListView, bo.BOFiltering> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.BOFiltering): void;
            protected editData(data: bo.BOFiltering): void;
            protected deleteData(data: bo.BOFiltering | bo.BOFiltering[]): void;
        }
        interface IBOFilteringListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.BOFiltering[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOInformationChooseApp extends ibas.BOChooseService<IBOInformationChooseView, bo.BOInformation> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IBOInformationChooseView extends ibas.IBOChooseView {
            showData(datas: bo.BOInformation[]): void;
        }
        class BOInformationChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.BOInformation>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOInformationEditApp extends ibas.BOEditApplication<IBOInformationEditView, bo.BOInformation> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.BOInformation): void;
            protected editData: bo.BOInformation;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            addBOPropertyInformation(): void;
            removeBOPropertyInformation(items: bo.BOPropertyInformation[]): void;
            private editBOPropertyInformationData;
            editBOPropertyInformation(item: bo.BOPropertyInformation): void;
            addBOPropertyValue(): void;
            removeBOPropertyValue(items: bo.BOPropertyValue[]): void;
        }
        interface IBOInformationEditView extends ibas.IBOEditView {
            showBOInformation(data: bo.BOInformation): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            addBOPropertyInformationEvent: Function;
            removeBOPropertyInformationEvent: Function;
            showBOPropertyInformations(datas: bo.BOPropertyInformation[]): void;
            editBOPropertyInformationEvent: Function;
            addBOPropertyValueEvent: Function;
            removeBOPropertyValueEvent: Function;
            showBOPropertyValues(datas: bo.BOPropertyValue[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOInformationFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BOInformationListApp extends ibas.BOListApplication<IBOInformationListView, bo.BOInformation> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.BOInformation): void;
            protected editData(data: bo.BOInformation): void;
            protected deleteData(data: bo.BOInformation | bo.BOInformation[]): void;
            private boNumbering;
        }
        interface IBOInformationListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            boNumberingEvent: Function;
            showData(datas: bo.BOInformation[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BONumberingEditApp extends ibas.Application<IBONumberingEditView> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.BONumbering): void;
            protected editData: bo.BONumbering;
            protected saveBOSeriesNumbering(data: bo.BOSeriesNumbering): void;
            protected fetchBOSeriesNumbering(): void;
        }
        interface IBONumberingEditView extends ibas.IBOView {
            showBONumbering(data: bo.BONumbering): void;
            saveBOSeriesNumberingEvent: Function;
            showBOSeriesNumbering(datas: bo.BOSeriesNumbering[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BONumberingFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class BONumberingListApp extends ibas.Application<IBONumberingListView> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected editData(data: bo.BONumbering): void;
        }
        interface IBONumberingListView extends ibas.IBOQueryView {
            editDataEvent: Function;
            showData(datas: bo.BONumbering[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class OrganizationChooseApp extends ibas.BOChooseService<IOrganizationChooseView, bo.Organization> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IOrganizationChooseView extends ibas.IBOChooseView {
            showData(datas: bo.Organization[]): void;
        }
        class OrganizationChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Organization>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class OrganizationEditApp extends ibas.BOEditApplication<IOrganizationEditView, bo.Organization> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.Organization): void;
            protected editData: bo.Organization;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
        }
        interface IOrganizationEditView extends ibas.IBOEditView {
            showOrganization(data: bo.Organization): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class OrganizationFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class OrganizationListApp extends ibas.BOListApplication<IOrganizationListView, bo.Organization> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.Organization): void;
            protected editData(data: bo.Organization): void;
            protected deleteData(data: bo.Organization | bo.Organization[]): void;
            protected project(): void;
        }
        interface IOrganizationListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            projectEvent: Function;
            showData(datas: bo.Organization[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class PrivilegeChooseApp extends ibas.BOChooseService<IPrivilegeChooseView, bo.Privilege> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IPrivilegeChooseView extends ibas.IBOChooseView {
            showData(datas: bo.Privilege[]): void;
        }
        class PrivilegeChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Privilege>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class PrivilegeEditApp extends ibas.BOEditApplication<IPrivilegeEditView, bo.Privilege> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.Privilege): void;
            protected editData: bo.Privilege;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            private chooseRole;
            private choosePlatform;
            private chooseModule;
            private chooseTarget;
        }
        interface IPrivilegeEditView extends ibas.IBOEditView {
            showPrivilege(data: bo.Privilege): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            chooseRoleEvent: Function;
            choosePlatformEvent: Function;
            chooseModuleEvent: Function;
            chooseTargetEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class PrivilegeFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class PrivilegeListApp extends ibas.BOListApplication<IPrivilegeListView, bo.Privilege> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.Privilege): void;
            protected editData(data: bo.Privilege): void;
            protected deleteData(data: bo.Privilege | bo.Privilege[]): void;
        }
        interface IPrivilegeListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.Privilege[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ProjectChooseApp extends ibas.BOChooseService<IProjectChooseView, bo.Project> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IProjectChooseView extends ibas.IBOChooseView {
            showData(datas: bo.Project[]): void;
        }
        class ProjectChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Project>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ProjectEditApp extends ibas.BOEditApplication<IProjectEditView, bo.Project> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.Project): void;
            protected editData: bo.Project;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            private chooseOrganization;
            private chooseTeamMebers;
            private chooseManager;
        }
        interface IProjectEditView extends ibas.IBOEditView {
            showProject(data: bo.Project): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            chooseOrganizationEvent: Function;
            chooseTeamMebersEvent: Function;
            chooseManagerEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ProjectFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ProjectListApp extends ibas.BOListApplication<IProjectListView, bo.Project> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.Project): void;
            protected editData(data: bo.Project): void;
            protected deleteData(data: bo.Project | bo.Project[]): void;
        }
        interface IProjectListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.Project[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ConfigChooseApp extends ibas.BOChooseService<IConfigChooseView, ibas.KeyValue> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IConfigChooseView extends ibas.IBOChooseView {
            showData(datas: ibas.KeyValue[]): void;
        }
        class ConfigChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<ibas.KeyValue>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class CriteriaEditorService extends ibas.ServiceWithResultApplication<ICriteriaEditorView, ibas.ICriteriaEditorServiceContract, ibas.ICriteria> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected runService(contract: ibas.ICriteriaEditorServiceContract): void;
            private editData;
            private aliases;
            private addCondition;
            private removeCondition;
            private confirm;
        }
        interface ICriteriaEditorView extends ibas.IView {
            showTarget(target: string, aliaes: ibas.KeyText[]): void;
            showConditions(datas: ibas.ICondition[]): void;
            addConditionEvent: Function;
            removeConditionEvent: Function;
            confirmEvent: Function;
        }
        class CriteriaEditorServiceMapping extends ibas.ServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class RoleChooseApp extends OrganizationChooseApp {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected fetchData(criteria: ibas.ICriteria): void;
        }
        class RoleChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.IRole>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class VariableChooseApp extends ibas.BOChooseService<IVariableChooseView, ibas.KeyValue> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IVariableChooseView extends ibas.IBOChooseView {
            showData(datas: ibas.KeyValue[]): void;
        }
        class VariableChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<ibas.KeyValue>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class ChangeUserProfileApp extends ibas.Application<IChangeUserProfileView> implements ibas.IService<ibas.IServiceCaller<ibas.IServiceContract>> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(caller: ibas.IServiceCaller<ibas.IServiceContract>): void;
            private user;
            private fetchUser;
            private saveUser;
        }
        interface IChangeUserProfileView extends ibas.IView {
            showUser(user: bo.User): void;
            saveUserEvent: Function;
        }
        class ChangeUserProfileMapping extends ibas.ServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class UserChooseApp extends ibas.BOChooseService<IUserChooseView, bo.User> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IUserChooseView extends ibas.IBOChooseView {
            showData(datas: bo.User[]): void;
        }
        class UserChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.User>>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class UserEditApp extends ibas.BOEditApplication<IUserEditView, bo.User> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.User): void;
            protected editData: bo.User;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            private chooseOrganization;
        }
        interface IUserEditView extends ibas.IBOEditView {
            showUser(data: bo.User): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            chooseOrganizationEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class UserFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class UserListApp extends ibas.BOListApplication<IUserListView, bo.User> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.User): void;
            protected editData(data: bo.User): void;
            protected deleteData(data: bo.User | bo.User[]): void;
        }
        interface IUserListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.User[]): void;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class UserProfileApp extends ibas.ResidentApplication<IUserProfileView> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            private user;
            private fetchUser;
            private saveUser;
        }
        interface IUserProfileView extends ibas.IResidentView {
            showUser(user: bo.User): void;
            saveUserEvent: Function;
        }
    }
}
declare namespace initialfantasy {
    namespace app {
        class Console extends ibas.ModuleConsole {
            constructor();
            private _navigation;
            navigation(): ibas.IViewNavigation;
            protected registers(): void;
            run(): void;
        }
        class ConsolePhone extends Console {
            protected registers(): void;
        }
    }
}
