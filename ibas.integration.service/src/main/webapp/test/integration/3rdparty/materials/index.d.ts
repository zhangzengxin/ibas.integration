declare namespace materials {
    const CONSOLE_ID: string;
    const CONSOLE_NAME: string;
    const CONSOLE_VERSION: string;
    namespace bo {
        const BO_REPOSITORY_MATERIALS: string;
        const BO_CODE_GOODSISSUE: string;
        const BO_CODE_GOODSRECEIPT: string;
        const BO_CODE_INVENTORYTRANSFER: string;
        const BO_CODE_MATERIAL: string;
        const BO_CODE_PRODUCT: string;
        const BO_CODE_MATERIALBATCH: string;
        const BO_CODE_MATERIALBATCHJOURNAL: string;
        const BO_CODE_MATERIALSERIAL: string;
        const BO_CODE_MATERIALSERIALJOURNAL: string;
        const BO_CODE_MATERIALGROUP: string;
        const BO_CODE_MATERIALINVENTORY: string;
        const BO_CODE_MATERIALJOURNAL: string;
        const BO_CODE_WAREHOUSE: string;
        const BO_CODE_MATERIALPRICELIST: string;
        const BO_CODE_MATERIALSERIALITEM: string;
        const BO_CODE_MATERIALBATCHITEM: string;
        enum emItemType {
            ITEM = 0,
            SERVICES = 1
        }
        enum emMaterialIssueRules {
            FIRST_IN_FIRST_OUT = 0,
            FIRST_IN_LAST_OUT = 1,
            ORDER_BY_CODE = 2
        }
    }
    namespace app {
        interface IMaterialBatchContract extends ibas.IServiceContract {
            batchManagement: ibas.emYesNo;
            itemCode: string;
            itemDescription: string;
            warehouse: string;
            quantity: number;
            uom: string;
            materialBatches: bo.IMaterialBatchItems;
        }
        interface IMaterialSerialContract extends ibas.IServiceContract {
            serialManagement: ibas.emYesNo;
            itemCode: string;
            itemDescription: string;
            warehouse: string;
            quantity: number;
            uom: string;
            materialSerials: bo.IMaterialSerialItems;
        }
        class MaterialBatchReceiptServiceProxy extends ibas.ServiceProxy<IMaterialBatchContract[]> {
        }
        class MaterialBatchIssueServiceProxy extends ibas.ServiceProxy<IMaterialBatchContract[]> {
        }
        class MaterialSerialReceiptServiceProxy extends ibas.ServiceProxy<IMaterialSerialContract[]> {
        }
        class MaterialSerialIssueServiceProxy extends ibas.ServiceProxy<IMaterialSerialContract[]> {
        }
        namespace conditions {
            namespace material {
                const CONDITION_ALIAS_SALES_ITEM: string;
                const CONDITION_ALIAS_PURCHASE_ITEM: string;
                const CONDITION_ALIAS_INVENTORY_ITEM: string;
                const CONDITION_ALIAS_ITEM_TYPE: string;
                function create(): ibas.IList<ibas.ICondition>;
            }
            namespace product {
                const CONDITION_ALIAS_WAREHOUSE: string;
                const CONDITION_ALIAS_PRICELIST: string;
                const CONDITION_ALIAS_SALES_ITEM: string;
                const CONDITION_ALIAS_PURCHASE_ITEM: string;
                const CONDITION_ALIAS_INVENTORY_ITEM: string;
                const CONDITION_ALIAS_ITEM_TYPE: string;
                function create(): ibas.IList<ibas.ICondition>;
            }
            namespace warehouse {
                function create(): ibas.IList<ibas.ICondition>;
            }
            namespace materialpricelist {
                function create(): ibas.ICriteria;
            }
            namespace materialprice {
                const CONDITION_ALIAS_ITEMCODE: string;
                const CONDITION_ALIAS_ITEMNAME: string;
                const CONDITION_ALIAS_PRICELIST: string;
            }
            namespace materialquantity {
                const CONDITION_ALIAS_ITEMCODE: string;
                const CONDITION_ALIAS_ITEMNAME: string;
                const CONDITION_ALIAS_WAREHOUSE: string;
            }
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IGoodsIssue extends ibas.IBODocument, ibas.IBOUserFields {
            docEntry: number;
            docNum: number;
            period: number;
            canceled: ibas.emYesNo;
            status: ibas.emBOStatus;
            approvalStatus: ibas.emApprovalStatus;
            documentStatus: ibas.emDocumentStatus;
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
            dataOwner: number;
            teamMembers: string;
            organization: string;
            postingDate: Date;
            deliveryDate: Date;
            documentDate: Date;
            reference1: string;
            reference2: string;
            referenced: ibas.emYesNo;
            remarks: string;
            documentCurrency: string;
            documentRate: number;
            documentTotal: number;
            priceList: number;
            project: string;
            orderType: string;
            goodsIssueLines: IGoodsIssueLines;
        }
        interface IGoodsIssueLines extends ibas.IBusinessObjects<IGoodsIssueLine> {
            create(): IGoodsIssueLine;
        }
        interface IGoodsIssueLine extends ibas.IBODocumentLine, IMaterialSerialItemParent, IMaterialBatchItemParent, ibas.IBOUserFields {
            docEntry: number;
            lineId: number;
            visOrder: number;
            canceled: ibas.emYesNo;
            status: ibas.emBOStatus;
            lineStatus: ibas.emDocumentStatus;
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
            reference1: string;
            reference2: string;
            referenced: ibas.emYesNo;
            baseDocumentType: string;
            baseDocumentEntry: number;
            baseDocumentLineId: number;
            itemCode: string;
            itemDescription: string;
            serialManagement: ibas.emYesNo;
            batchManagement: ibas.emYesNo;
            quantity: number;
            uom: string;
            warehouse: string;
            price: number;
            currency: string;
            rate: number;
            lineTotal: number;
            project: string;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IGoodsReceipt extends ibas.IBODocument, ibas.IBOUserFields {
            docEntry: number;
            docNum: number;
            period: number;
            canceled: ibas.emYesNo;
            status: ibas.emBOStatus;
            approvalStatus: ibas.emApprovalStatus;
            documentStatus: ibas.emDocumentStatus;
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
            dataOwner: number;
            teamMembers: string;
            organization: string;
            postingDate: Date;
            deliveryDate: Date;
            documentDate: Date;
            reference1: string;
            reference2: string;
            referenced: ibas.emYesNo;
            remarks: string;
            documentCurrency: string;
            documentRate: number;
            documentTotal: number;
            priceList: number;
            project: string;
            orderType: string;
            goodsReceiptLines: IGoodsReceiptLines;
        }
        interface IGoodsReceiptLines extends ibas.IBusinessObjects<IGoodsReceiptLine> {
            create(): IGoodsReceiptLine;
        }
        interface IGoodsReceiptLine extends ibas.IBODocumentLine, IMaterialSerialItemParent, IMaterialBatchItemParent, ibas.IBOUserFields {
            docEntry: number;
            lineId: number;
            visOrder: number;
            canceled: ibas.emYesNo;
            status: ibas.emBOStatus;
            lineStatus: ibas.emDocumentStatus;
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
            reference1: string;
            reference2: string;
            referenced: ibas.emYesNo;
            baseDocumentType: string;
            baseDocumentEntry: number;
            baseDocumentLineId: number;
            itemCode: string;
            itemDescription: string;
            serialManagement: ibas.emYesNo;
            batchManagement: ibas.emYesNo;
            quantity: number;
            uom: string;
            warehouse: string;
            price: number;
            currency: string;
            rate: number;
            lineTotal: number;
            project: string;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IInventoryTransfer extends ibas.IBODocument, ibas.IBOUserFields {
            docEntry: number;
            docNum: number;
            period: number;
            canceled: ibas.emYesNo;
            status: ibas.emBOStatus;
            approvalStatus: ibas.emApprovalStatus;
            documentStatus: ibas.emDocumentStatus;
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
            dataOwner: number;
            teamMembers: string;
            organization: string;
            postingDate: Date;
            deliveryDate: Date;
            documentDate: Date;
            reference1: string;
            reference2: string;
            referenced: ibas.emYesNo;
            remarks: string;
            documentCurrency: string;
            documentRate: number;
            documentTotal: number;
            priceList: number;
            project: string;
            orderType: string;
            fromWarehouse: string;
            inventoryTransferLines: IInventoryTransferLines;
        }
        interface IInventoryTransferLines extends ibas.IBusinessObjects<IInventoryTransferLine> {
            create(): IInventoryTransferLine;
        }
        interface IInventoryTransferLine extends ibas.IBODocumentLine, IMaterialSerialItemParent, IMaterialBatchItemParent, ibas.IBOUserFields {
            docEntry: number;
            lineId: number;
            visOrder: number;
            canceled: ibas.emYesNo;
            status: ibas.emBOStatus;
            lineStatus: ibas.emDocumentStatus;
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
            reference1: string;
            reference2: string;
            referenced: ibas.emYesNo;
            baseDocumentType: string;
            baseDocumentEntry: number;
            baseDocumentLineId: number;
            itemCode: string;
            itemDescription: string;
            serialManagement: ibas.emYesNo;
            batchManagement: ibas.emYesNo;
            quantity: number;
            uom: string;
            warehouse: string;
            price: number;
            currency: string;
            rate: number;
            lineTotal: number;
            project: string;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IMaterial extends ibas.IBOMasterData, ibas.IBOUserFields {
            code: string;
            name: string;
            foreignName: string;
            group: string;
            activated: ibas.emYesNo;
            barCode: string;
            itemType: emItemType;
            purchaseItem: ibas.emYesNo;
            salesItem: ibas.emYesNo;
            inventoryItem: ibas.emYesNo;
            phantomItem: ibas.emYesNo;
            fixedAsset: ibas.emYesNo;
            productUnit: ibas.emYesNo;
            defaultWarehouse: string;
            preferredVendor: string;
            inventoryUOM: string;
            avgPrice: number;
            onHand: number;
            onCommited: number;
            onOrdered: number;
            minimumInventory: number;
            leadTime: number;
            serialManagement: ibas.emYesNo;
            batchManagement: ibas.emYesNo;
            validDate: Date;
            invalidDate: Date;
            picture: string;
            remarks: string;
            referenced: ibas.emYesNo;
            deleted: ibas.emYesNo;
            docEntry: number;
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
            approvalStatus: ibas.emApprovalStatus;
            dataOwner: number;
            organization: string;
        }
        interface IMaterialQuantity {
            itemCode: string;
            itemName: string;
            onHand: number;
            onCommited: number;
            onOrdered: number;
            uom: string;
        }
        interface IMaterialPrice {
            source: string;
            itemCode: string;
            itemName: string;
            price: number;
            currency: string;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IMaterialBatch extends ibas.IBOSimple, ibas.IBOUserFields {
            itemCode: string;
            batchCode: string;
            warehouse: string;
            quantity: number;
            locked: ibas.emYesNo;
            supplierSerial: string;
            expirationDate: Date;
            manufacturingDate: Date;
            admissionDate: Date;
            notes: string;
            baseDocumentType: string;
            baseDocumentEntry: number;
            baseDocumentLineId: number;
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
declare namespace materials {
    namespace bo {
        interface IMaterialBatchItem extends ibas.IBOSimple {
            batchCode: string;
            quantity: number;
            documentType: string;
            documentEntry: number;
            documentLineId: number;
            objectKey: number;
            objectCode: string;
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
        }
        interface IMaterialBatchItems extends ibas.IBusinessObjects<IMaterialBatchItem> {
            create(): IMaterialBatchItem;
            create(batchCode: string): IMaterialBatchItem;
            total(): number;
        }
        interface IMaterialBatchItemParent extends ibas.IBusinessObject {
            batchManagement: ibas.emYesNo;
            objectCode: string;
            docEntry: number;
            lineId: number;
            itemCode: string;
            warehouse: string;
            quantity: number;
            materialBatches: IMaterialBatchItems;
        }
        class MaterialBatchItem extends ibas.BOSimple<MaterialBatchItem> implements IMaterialBatchItem {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_BATCHCODE_NAME: string;
            batchCode: string;
            static PROPERTY_QUANTITY_NAME: string;
            quantity: number;
            static PROPERTY_DOCUMENTTYPE_NAME: string;
            documentType: string;
            static PROPERTY_DOCUMENTENTRY_NAME: string;
            documentEntry: number;
            static PROPERTY_DOCUMENTLINEID_NAME: string;
            documentLineId: number;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
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
            protected init(): void;
        }
        class MaterialBatchItems extends ibas.BusinessObjects<IMaterialBatchItem, IMaterialBatchItemParent> implements IMaterialBatchItems {
            create(): IMaterialBatchItem;
            create(batchCode: string): IMaterialBatchItem;
            afterAdd(item: IMaterialBatchItem): void;
            onParentPropertyChanged(name: string): void;
            total(): number;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IMaterialBatchJournal extends ibas.IBOSimple {
            itemCode: string;
            batchCode: string;
            warehouse: string;
            quantity: number;
            direction: ibas.emDirection;
            baseDocumentType: string;
            baseDocumentEntry: number;
            baseDocumentLineId: number;
            objectKey: number;
            objectCode: string;
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
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IMaterialGroup extends ibas.IBOMasterData, ibas.IBOUserFields {
            code: string;
            name: string;
            activated: ibas.emYesNo;
            docEntry: number;
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
            dataOwner: number;
            organization: string;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IMaterialInventory extends ibas.IBOSimple {
            itemCode: string;
            warehouse: string;
            avgPrice: number;
            onHand: number;
            onCommited: number;
            onOrdered: number;
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
declare namespace materials {
    namespace bo {
        interface IMaterialInventoryJournal extends ibas.IBOSimple {
            itemCode: string;
            itemName: string;
            warehouse: string;
            baseDocumentType: string;
            baseDocumentEntry: number;
            baseDocumentLineId: number;
            direction: ibas.emDirection;
            quantity: number;
            price: number;
            currency: string;
            rate: number;
            postingDate: Date;
            deliveryDate: Date;
            documentDate: Date;
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
declare namespace materials {
    namespace bo {
        interface IMaterialPriceList extends ibas.IBOSimple {
            name: string;
            group: string;
            currency: string;
            basedOnList: number;
            factor: number;
            validDate: Date;
            invalidDate: Date;
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
            materialPriceItems: IMaterialPriceItems;
        }
        interface IMaterialPriceItems extends ibas.IBusinessObjects<IMaterialPriceItem> {
            create(): IMaterialPriceItem;
        }
        interface IMaterialPriceItem extends ibas.IBOSimpleLine {
            itemCode: string;
            price: number;
            objectKey: number;
            lineId: number;
            objectCode: string;
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
declare namespace materials {
    namespace bo {
        interface IMaterialSerial extends ibas.IBOSimple, ibas.IBOUserFields {
            itemCode: string;
            serialCode: string;
            warehouse: string;
            inStock: ibas.emYesNo;
            locked: ibas.emYesNo;
            supplierSerial: string;
            batchSerial: string;
            expirationDate: Date;
            manufacturingDate: Date;
            admissionDate: Date;
            warrantyStartDate: Date;
            warrantyEndDate: Date;
            notes: string;
            baseDocumentType: string;
            baseDocumentEntry: number;
            baseDocumentLineId: number;
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
declare namespace materials {
    namespace bo {
        interface IMaterialSerialItem extends ibas.IBOSimple {
            serialCode: string;
            documentType: string;
            documentEntry: number;
            documentLineId: number;
            objectKey: number;
            objectCode: string;
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
        }
        interface IMaterialSerialItems extends ibas.IBusinessObjects<IMaterialSerialItem> {
            create(): IMaterialSerialItem;
            create(serialCode: string): IMaterialSerialItem;
            total(): number;
        }
        interface IMaterialSerialItemParent extends ibas.IBusinessObject {
            serialManagement: ibas.emYesNo;
            objectCode: string;
            docEntry: number;
            lineId: number;
            itemCode: string;
            warehouse: string;
            quantity: number;
            materialSerials: IMaterialSerialItems;
        }
        class MaterialSerialItem extends ibas.BOSimple<MaterialSerialItem> implements IMaterialSerialItem {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_SERIALCODE_NAME: string;
            serialCode: string;
            static PROPERTY_DOCUMENTTYPE_NAME: string;
            documentType: string;
            static PROPERTY_DOCUMENTENTRY_NAME: string;
            documentEntry: number;
            static PROPERTY_DOCUMENTLINEID_NAME: string;
            documentLineId: number;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
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
            protected init(): void;
        }
        class MaterialSerialItems extends ibas.BusinessObjects<IMaterialSerialItem, IMaterialSerialItemParent> implements IMaterialSerialItems {
            create(): IMaterialSerialItem;
            create(serialCode: string): IMaterialSerialItem;
            afterAdd(item: IMaterialSerialItem): void;
            onParentPropertyChanged(name: string): void;
            total(): number;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IMaterialSerialJournal extends ibas.IBOSimple {
            itemCode: string;
            serialCode: string;
            warehouse: string;
            direction: ibas.emDirection;
            baseDocumentType: string;
            baseDocumentEntry: number;
            baseDocumentLineId: number;
            objectKey: number;
            objectCode: string;
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
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IProduct extends ibas.IBOMasterData, ibas.IBOUserFields {
            code: string;
            name: string;
            foreignName: string;
            group: string;
            activated: ibas.emYesNo;
            barCode: string;
            itemType: emItemType;
            purchaseItem: ibas.emYesNo;
            salesItem: ibas.emYesNo;
            inventoryItem: ibas.emYesNo;
            phantomItem: ibas.emYesNo;
            warehouse: string;
            price: number;
            currency: string;
            onHand: number;
            onCommited: number;
            onOrdered: number;
            leadTime: number;
            inventoryUOM: string;
            serialManagement: ibas.emYesNo;
            batchManagement: ibas.emYesNo;
            validDate: Date;
            invalidDate: Date;
            picture: string;
            docEntry: number;
            objectCode: string;
            dataOwner: number;
            organization: string;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IWarehouse extends ibas.IBOMasterData, ibas.IBOUserFields {
            code: string;
            name: string;
            activated: ibas.emYesNo;
            referenced: ibas.emYesNo;
            deleted: ibas.emYesNo;
            docEntry: number;
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
            approvalStatus: ibas.emApprovalStatus;
            dataOwner: number;
            organization: string;
        }
    }
}
declare namespace materials {
    namespace bo {
        interface IBORepositoryMaterials extends ibas.IBORepositoryApplication {
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            fetchGoodsIssue(fetcher: ibas.IFetchCaller<bo.IGoodsIssue>): void;
            saveGoodsIssue(saver: ibas.ISaveCaller<bo.IGoodsIssue>): void;
            fetchGoodsReceipt(fetcher: ibas.IFetchCaller<bo.IGoodsReceipt>): void;
            saveGoodsReceipt(saver: ibas.ISaveCaller<bo.IGoodsReceipt>): void;
            fetchInventoryTransfer(fetcher: ibas.IFetchCaller<bo.IInventoryTransfer>): void;
            saveInventoryTransfer(saver: ibas.ISaveCaller<bo.IInventoryTransfer>): void;
            fetchMaterial(fetcher: ibas.IFetchCaller<bo.IMaterial>): void;
            saveMaterial(saver: ibas.ISaveCaller<bo.IMaterial>): void;
            fetchMaterialGroup(fetcher: ibas.IFetchCaller<bo.IMaterialGroup>): void;
            saveMaterialGroup(saver: ibas.ISaveCaller<bo.IMaterialGroup>): void;
            fetchMaterialInventory(fetcher: ibas.IFetchCaller<bo.IMaterialInventory>): void;
            fetchMaterialInventoryJournal(fetcher: ibas.IFetchCaller<bo.IMaterialInventoryJournal>): void;
            saveMaterialInventoryJournal(saver: ibas.ISaveCaller<bo.IMaterialInventoryJournal>): void;
            fetchWarehouse(fetcher: ibas.IFetchCaller<bo.IWarehouse>): void;
            saveWarehouse(saver: ibas.ISaveCaller<bo.IWarehouse>): void;
            fetchProduct(fetcher: ibas.IFetchCaller<bo.IProduct>): void;
            fetchMaterialBatch(fetcher: ibas.IFetchCaller<bo.IMaterialBatch>): void;
            saveMaterialBatch(saver: ibas.ISaveCaller<bo.IMaterialBatch>): void;
            fetchMaterialBatchJournal(fetcher: ibas.IFetchCaller<bo.IMaterialBatchJournal>): void;
            fetchMaterialSerial(fetcher: ibas.IFetchCaller<bo.IMaterialSerial>): void;
            saveMaterialSerial(saver: ibas.ISaveCaller<bo.IMaterialSerial>): void;
            fetchMaterialSerialJournal(fetcher: ibas.IFetchCaller<bo.IMaterialSerialJournal>): void;
            fetchMaterialPriceList(fetcher: ibas.IFetchCaller<bo.IMaterialPriceList>): void;
            saveMaterialPriceList(saver: ibas.ISaveCaller<bo.IMaterialPriceList>): void;
            fetchMaterialQuantity(fetcher: ibas.IFetchCaller<bo.IMaterialQuantity>): void;
            fetchMaterialPrice(fetcher: ibas.IFetchCaller<bo.IMaterialPrice>): void;
        }
    }
}
declare namespace materials {
    namespace bo {
        class GoodsIssue extends ibas.BODocument<GoodsIssue> implements IGoodsIssue {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_DOCNUM_NAME: string;
            docNum: number;
            static PROPERTY_PERIOD_NAME: string;
            period: number;
            static PROPERTY_CANCELED_NAME: string;
            canceled: ibas.emYesNo;
            static PROPERTY_STATUS_NAME: string;
            status: ibas.emBOStatus;
            static PROPERTY_APPROVALSTATUS_NAME: string;
            approvalStatus: ibas.emApprovalStatus;
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            documentStatus: ibas.emDocumentStatus;
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
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_TEAMMEMBERS_NAME: string;
            teamMembers: string;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            static PROPERTY_POSTINGDATE_NAME: string;
            postingDate: Date;
            static PROPERTY_DELIVERYDATE_NAME: string;
            deliveryDate: Date;
            static PROPERTY_DOCUMENTDATE_NAME: string;
            documentDate: Date;
            static PROPERTY_REFERENCE1_NAME: string;
            reference1: string;
            static PROPERTY_REFERENCE2_NAME: string;
            reference2: string;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_REMARKS_NAME: string;
            remarks: string;
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            documentCurrency: string;
            static PROPERTY_DOCUMENTRATE_NAME: string;
            documentRate: number;
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            documentTotal: number;
            static PROPERTY_PRICELIST_NAME: string;
            priceList: number;
            static PROPERTY_PROJECT_NAME: string;
            project: string;
            static PROPERTY_ORDERTYPE_NAME: string;
            orderType: string;
            static PROPERTY_GOODSISSUELINES_NAME: string;
            goodsIssueLines: GoodsIssueLines;
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        class GoodsIssueLines extends ibas.BusinessObjects<GoodsIssueLine, GoodsIssue> implements IGoodsIssueLines {
            create(): GoodsIssueLine;
        }
        class GoodsIssueLine extends ibas.BODocumentLine<GoodsIssueLine> implements IGoodsIssueLine {
            constructor();
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_LINEID_NAME: string;
            lineId: number;
            static PROPERTY_VISORDER_NAME: string;
            visOrder: number;
            static PROPERTY_CANCELED_NAME: string;
            canceled: ibas.emYesNo;
            static PROPERTY_STATUS_NAME: string;
            status: ibas.emBOStatus;
            static PROPERTY_LINESTATUS_NAME: string;
            lineStatus: ibas.emDocumentStatus;
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
            static PROPERTY_REFERENCE1_NAME: string;
            reference1: string;
            static PROPERTY_REFERENCE2_NAME: string;
            reference2: string;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            baseDocumentType: string;
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            baseDocumentEntry: number;
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            baseDocumentLineId: number;
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            itemDescription: string;
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            serialManagement: ibas.emYesNo;
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            batchManagement: ibas.emYesNo;
            static PROPERTY_QUANTITY_NAME: string;
            quantity: number;
            static PROPERTY_UOM_NAME: string;
            uom: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_PRICE_NAME: string;
            price: number;
            static PROPERTY_CURRENCY_NAME: string;
            currency: string;
            static PROPERTY_RATE_NAME: string;
            rate: number;
            static PROPERTY_LINETOTAL_NAME: string;
            lineTotal: number;
            static PROPERTY_PROJECT_NAME: string;
            project: string;
            static PROPERTY_MATERIALBATCHES_NAME: string;
            materialBatches: MaterialBatchItems;
            static PROPERTY_MATERIALSERIALS_NAME: string;
            materialSerials: MaterialSerialItems;
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
    }
}
declare namespace materials {
    namespace bo {
        class GoodsReceipt extends ibas.BODocument<GoodsReceipt> implements IGoodsReceipt {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_DOCNUM_NAME: string;
            docNum: number;
            static PROPERTY_PERIOD_NAME: string;
            period: number;
            static PROPERTY_CANCELED_NAME: string;
            canceled: ibas.emYesNo;
            static PROPERTY_STATUS_NAME: string;
            status: ibas.emBOStatus;
            static PROPERTY_APPROVALSTATUS_NAME: string;
            approvalStatus: ibas.emApprovalStatus;
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            documentStatus: ibas.emDocumentStatus;
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
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_TEAMMEMBERS_NAME: string;
            teamMembers: string;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            static PROPERTY_POSTINGDATE_NAME: string;
            postingDate: Date;
            static PROPERTY_DELIVERYDATE_NAME: string;
            deliveryDate: Date;
            static PROPERTY_DOCUMENTDATE_NAME: string;
            documentDate: Date;
            static PROPERTY_REFERENCE1_NAME: string;
            reference1: string;
            static PROPERTY_REFERENCE2_NAME: string;
            reference2: string;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_REMARKS_NAME: string;
            remarks: string;
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            documentCurrency: string;
            static PROPERTY_DOCUMENTRATE_NAME: string;
            documentRate: number;
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            documentTotal: number;
            static PROPERTY_PRICELIST_NAME: string;
            priceList: number;
            static PROPERTY_PROJECT_NAME: string;
            project: string;
            static PROPERTY_ORDERTYPE_NAME: string;
            orderType: string;
            static PROPERTY_GOODSRECEIPTLINES_NAME: string;
            goodsReceiptLines: GoodsReceiptLines;
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        class GoodsReceiptLines extends ibas.BusinessObjects<GoodsReceiptLine, GoodsReceipt> implements IGoodsReceiptLines {
            create(): GoodsReceiptLine;
        }
        class GoodsReceiptLine extends ibas.BODocumentLine<GoodsReceiptLine> implements IGoodsReceiptLine {
            constructor();
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_LINEID_NAME: string;
            lineId: number;
            static PROPERTY_VISORDER_NAME: string;
            visOrder: number;
            static PROPERTY_CANCELED_NAME: string;
            canceled: ibas.emYesNo;
            static PROPERTY_STATUS_NAME: string;
            status: ibas.emBOStatus;
            static PROPERTY_LINESTATUS_NAME: string;
            lineStatus: ibas.emDocumentStatus;
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
            static PROPERTY_REFERENCE1_NAME: string;
            reference1: string;
            static PROPERTY_REFERENCE2_NAME: string;
            reference2: string;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            baseDocumentType: string;
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            baseDocumentEntry: number;
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            baseDocumentLineId: number;
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            itemDescription: string;
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            serialManagement: ibas.emYesNo;
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            batchManagement: ibas.emYesNo;
            static PROPERTY_QUANTITY_NAME: string;
            quantity: number;
            static PROPERTY_UOM_NAME: string;
            uom: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_PRICE_NAME: string;
            price: number;
            static PROPERTY_CURRENCY_NAME: string;
            currency: string;
            static PROPERTY_RATE_NAME: string;
            rate: number;
            static PROPERTY_LINETOTAL_NAME: string;
            lineTotal: number;
            static PROPERTY_PROJECT_NAME: string;
            project: string;
            static PROPERTY_MATERIALBATCHES_NAME: string;
            materialBatches: MaterialBatchItems;
            static PROPERTY_MATERIALSERIALS_NAME: string;
            materialSerials: MaterialSerialItems;
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
    }
}
declare namespace materials {
    namespace bo {
        class InventoryTransfer extends ibas.BODocument<InventoryTransfer> implements IInventoryTransfer {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_DOCNUM_NAME: string;
            docNum: number;
            static PROPERTY_PERIOD_NAME: string;
            period: number;
            static PROPERTY_CANCELED_NAME: string;
            canceled: ibas.emYesNo;
            static PROPERTY_STATUS_NAME: string;
            status: ibas.emBOStatus;
            static PROPERTY_APPROVALSTATUS_NAME: string;
            approvalStatus: ibas.emApprovalStatus;
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            documentStatus: ibas.emDocumentStatus;
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
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_TEAMMEMBERS_NAME: string;
            teamMembers: string;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            static PROPERTY_POSTINGDATE_NAME: string;
            postingDate: Date;
            static PROPERTY_DELIVERYDATE_NAME: string;
            deliveryDate: Date;
            static PROPERTY_DOCUMENTDATE_NAME: string;
            documentDate: Date;
            static PROPERTY_REFERENCE1_NAME: string;
            reference1: string;
            static PROPERTY_REFERENCE2_NAME: string;
            reference2: string;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_REMARKS_NAME: string;
            remarks: string;
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            documentCurrency: string;
            static PROPERTY_DOCUMENTRATE_NAME: string;
            documentRate: number;
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            documentTotal: number;
            static PROPERTY_PRICELIST_NAME: string;
            priceList: number;
            static PROPERTY_PROJECT_NAME: string;
            project: string;
            static PROPERTY_ORDERTYPE_NAME: string;
            orderType: string;
            static PROPERTY_FROMWAREHOUSE_NAME: string;
            fromWarehouse: string;
            static PROPERTY_INVENTORYTRANSFERLINES_NAME: string;
            inventoryTransferLines: InventoryTransferLines;
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        class InventoryTransferLines extends ibas.BusinessObjects<InventoryTransferLine, InventoryTransfer> implements IInventoryTransferLines {
            create(): InventoryTransferLine;
        }
        class InventoryTransferLine extends ibas.BODocumentLine<InventoryTransferLine> implements IInventoryTransferLine {
            constructor();
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_LINEID_NAME: string;
            lineId: number;
            static PROPERTY_VISORDER_NAME: string;
            visOrder: number;
            static PROPERTY_CANCELED_NAME: string;
            canceled: ibas.emYesNo;
            static PROPERTY_STATUS_NAME: string;
            status: ibas.emBOStatus;
            static PROPERTY_LINESTATUS_NAME: string;
            lineStatus: ibas.emDocumentStatus;
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
            static PROPERTY_REFERENCE1_NAME: string;
            reference1: string;
            static PROPERTY_REFERENCE2_NAME: string;
            reference2: string;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            baseDocumentType: string;
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            baseDocumentEntry: number;
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            baseDocumentLineId: number;
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            itemDescription: string;
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            serialManagement: ibas.emYesNo;
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            batchManagement: ibas.emYesNo;
            static PROPERTY_QUANTITY_NAME: string;
            quantity: number;
            static PROPERTY_UOM_NAME: string;
            uom: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_PRICE_NAME: string;
            price: number;
            static PROPERTY_CURRENCY_NAME: string;
            currency: string;
            static PROPERTY_RATE_NAME: string;
            rate: number;
            static PROPERTY_LINETOTAL_NAME: string;
            lineTotal: number;
            static PROPERTY_PROJECT_NAME: string;
            project: string;
            static PROPERTY_MATERIALBATCHES_NAME: string;
            materialBatches: MaterialBatchItems;
            static PROPERTY_MATERIALSERIALS_NAME: string;
            materialSerials: MaterialSerialItems;
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
    }
}
declare namespace materials {
    namespace bo {
        class Material extends ibas.BOMasterData<Material> implements IMaterial {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_FOREIGNNAME_NAME: string;
            foreignName: string;
            static PROPERTY_GROUP_NAME: string;
            group: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_BARCODE_NAME: string;
            barCode: string;
            static PROPERTY_ITEMTYPE_NAME: string;
            itemType: emItemType;
            static PROPERTY_PURCHASEITEM_NAME: string;
            purchaseItem: ibas.emYesNo;
            static PROPERTY_SALESITEM_NAME: string;
            salesItem: ibas.emYesNo;
            static PROPERTY_INVENTORYITEM_NAME: string;
            inventoryItem: ibas.emYesNo;
            static PROPERTY_PHANTOMITEM_NAME: string;
            phantomItem: ibas.emYesNo;
            static PROPERTY_FIXEDASSET_NAME: string;
            fixedAsset: ibas.emYesNo;
            static PROPERTY_PRODUCTUNIT_NAME: string;
            productUnit: ibas.emYesNo;
            static PROPERTY_DEFAULTWAREHOUSE_NAME: string;
            defaultWarehouse: string;
            static PROPERTY_PREFERREDVENDOR_NAME: string;
            preferredVendor: string;
            static PROPERTY_INVENTORYUOM_NAME: string;
            inventoryUOM: string;
            static PROPERTY_AVGPRICE_NAME: string;
            avgPrice: number;
            static PROPERTY_ONHAND_NAME: string;
            onHand: number;
            static PROPERTY_ONCOMMITED_NAME: string;
            onCommited: number;
            static PROPERTY_ONORDERED_NAME: string;
            onOrdered: number;
            static PROPERTY_MINIMUMINVENTORY_NAME: string;
            minimumInventory: number;
            static PROPERTY_LEADTIME_NAME: string;
            leadTime: number;
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            serialManagement: ibas.emYesNo;
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            batchManagement: ibas.emYesNo;
            static PROPERTY_VALIDDATE_NAME: string;
            validDate: Date;
            static PROPERTY_INVALIDDATE_NAME: string;
            invalidDate: Date;
            static PROPERTY_PICTURE_NAME: string;
            picture: string;
            static PROPERTY_REMARKS_NAME: string;
            remarks: string;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_DELETED_NAME: string;
            deleted: ibas.emYesNo;
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
            static PROPERTY_APPROVALSTATUS_NAME: string;
            approvalStatus: ibas.emApprovalStatus;
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            protected init(): void;
        }
        class MaterialQuantity extends ibas.BusinessObject<MaterialQuantity> implements IMaterialQuantity {
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_ITEMNAME_NAME: string;
            itemName: string;
            static PROPERTY_ONHAND_NAME: string;
            onHand: number;
            static PROPERTY_ONORDERED_NAME: string;
            onOrdered: number;
            static PROPERTY_ONCOMMITED_NAME: string;
            onCommited: number;
            static PROPERTY_UOM_NAME: string;
            uom: string;
            toString(): string;
            criteria(): ibas.ICriteria;
            protected init(): void;
        }
        class MaterialPrice extends ibas.BusinessObject<MaterialPrice> implements IMaterialPrice {
            static PROPERTY_SOURCE_NAME: string;
            source: string;
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_ITEMNAME_NAME: string;
            itemName: string;
            static PROPERTY_PRICE_NAME: string;
            price: number;
            static PROPERTY_CURRENCY_NAME: string;
            currency: string;
            toString(): string;
            criteria(): ibas.ICriteria;
            protected init(): void;
        }
    }
}
declare namespace materials {
    namespace bo {
        class MaterialBatch extends ibas.BOSimple<MaterialBatch> implements IMaterialBatch {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_BATCH_NAME: string;
            batchCode: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_QUANTITY_NAME: string;
            quantity: number;
            static PROPERTY_LOCKED_NAME: string;
            locked: ibas.emYesNo;
            static PROPERTY_SUPPLIERSERIAL_NAME: string;
            supplierSerial: string;
            static PROPERTY_EXPIRATIONDATE_NAME: string;
            expirationDate: Date;
            static PROPERTY_MANUFACTURINGDATE_NAME: string;
            manufacturingDate: Date;
            static PROPERTY_ADMISSIONDATE_NAME: string;
            admissionDate: Date;
            static PROPERTY_NOTES_NAME: string;
            notes: string;
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            baseDocumentType: string;
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            readonly baseDocumentEntry: number;
            baseDocubaseDocumentEntrymentType: number;
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            readonly baseDocumentLineId: number;
            baseDocubaseDocumentEntrymentLineId: number;
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
declare namespace materials {
    namespace bo {
        class MaterialBatchJournal extends ibas.BOSimple<MaterialBatchJournal> implements IMaterialBatchJournal {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_BATCHCODE_NAME: string;
            batchCode: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_QUANTITY_NAME: string;
            quantity: number;
            static PROPERTY_DIRECTION_NAME: string;
            direction: ibas.emDirection;
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            baseDocumentType: string;
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            baseDocumentEntry: number;
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            baseDocumentLineId: number;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
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
            protected init(): void;
        }
    }
}
declare namespace materials {
    namespace bo {
        class MaterialGroup extends ibas.BOMasterData<MaterialGroup> implements IMaterialGroup {
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
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            protected init(): void;
        }
    }
}
declare namespace materials {
    namespace bo {
        class MaterialInventory extends ibas.BOSimple<MaterialInventory> implements IMaterialInventory {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_AVGPRICE_NAME: string;
            avgPrice: number;
            static PROPERTY_ONHAND_NAME: string;
            onHand: number;
            static PROPERTY_ONCOMMITED_NAME: string;
            onCommited: number;
            static PROPERTY_ONORDERED_NAME: string;
            onOrdered: number;
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
declare namespace materials {
    namespace bo {
        class MaterialInventoryJournal extends ibas.BOSimple<MaterialInventoryJournal> implements IMaterialInventoryJournal {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_ITEMNAME_NAME: string;
            itemName: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            baseDocumentType: string;
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            baseDocumentEntry: number;
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            baseDocumentLineId: number;
            static PROPERTY_DIRECTION_NAME: string;
            direction: ibas.emDirection;
            static PROPERTY_QUANTITY_NAME: string;
            quantity: number;
            static PROPERTY_PRICE_NAME: string;
            price: number;
            static PROPERTY_CURRENCY_NAME: string;
            currency: string;
            static PROPERTY_RATE_NAME: string;
            rate: number;
            static PROPERTY_POSTINGDATE_NAME: string;
            postingDate: Date;
            static PROPERTY_DELIVERYDATE_NAME: string;
            deliveryDate: Date;
            static PROPERTY_DOCUMENTDATE_NAME: string;
            documentDate: Date;
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
declare namespace materials {
    namespace bo {
        class MaterialPriceList extends ibas.BOSimple<MaterialPriceList> implements IMaterialPriceList {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_GROUP_NAME: string;
            group: string;
            static PROPERTY_CURRENCY_NAME: string;
            currency: string;
            static PROPERTY_BASEDONLIST_NAME: string;
            basedOnList: number;
            static PROPERTY_FACTOR_NAME: string;
            factor: number;
            static PROPERTY_VALIDDATE_NAME: string;
            validDate: Date;
            static PROPERTY_INVALIDDATE_NAME: string;
            invalidDate: Date;
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
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            static PROPERTY_MATERIALPRICEITEMS_NAME: string;
            materialPriceItems: MaterialPriceItems;
            protected init(): void;
        }
        class MaterialPriceItems extends ibas.BusinessObjects<MaterialPriceItem, MaterialPriceList> implements IMaterialPriceItems {
            create(): MaterialPriceItem;
        }
        class MaterialPriceItem extends ibas.BOSimpleLine<MaterialPriceItem> implements IMaterialPriceItem {
            constructor();
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_PRICE_NAME: string;
            price: number;
            static PROPERT_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERT_LINEID_NAME: string;
            lineId: number;
            static PROPERT_OBJECTCODE_NAME: string;
            objectCode: string;
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
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            protected init(): void;
        }
    }
}
declare namespace materials {
    namespace bo {
        class MaterialSerial extends ibas.BOSimple<MaterialSerial> implements IMaterialSerial {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_BATCH_NAME: string;
            serialCode: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_INSTOCK_NAME: string;
            inStock: ibas.emYesNo;
            static PROPERTY_LOCKED_NAME: string;
            locked: ibas.emYesNo;
            static PROPERTY_SUPPLIERSERIAL_NAME: string;
            supplierSerial: string;
            static PROPERTY_INTERNALSERIAL_NAME: string;
            batchSerial: string;
            static PROPERTY_EXPIRATIONDATE_NAME: string;
            expirationDate: Date;
            static PROPERTY_MANUFACTURINGDATE_NAME: string;
            manufacturingDate: Date;
            static PROPERTY_ADMISSIONDATE_NAME: string;
            admissionDate: Date;
            static PROPERTY_WARRANTYSTARTDATE_NAME: string;
            warrantyStartDate: Date;
            static PROPERTY_WARRANTYENDDATE_NAME: string;
            warrantyEndDate: Date;
            static PROPERTY_NOTES_NAME: string;
            notes: string;
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            baseDocumentType: string;
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            readonly baseDocumentEntry: number;
            baseDocubaseDocumentEntrymentType: number;
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            readonly baseDocumentLineId: number;
            baseDocubaseDocumentEntrymentLineId: number;
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
declare namespace materials {
    namespace bo {
        class MaterialSerialJournal extends ibas.BOSimple<MaterialSerialJournal> implements IMaterialSerialJournal {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_ITEMCODE_NAME: string;
            itemCode: string;
            static PROPERTY_SERIALCODE_NAME: string;
            serialCode: string;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_DIRECTION_NAME: string;
            direction: ibas.emDirection;
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            baseDocumentType: string;
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            baseDocumentEntry: number;
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            baseDocumentLineId: number;
            static PROPERTY_OBJECTKEY_NAME: string;
            objectKey: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
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
            protected init(): void;
        }
    }
}
declare namespace materials {
    namespace bo {
        class Product extends ibas.BOMasterData<Product> implements IProduct {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_FOREIGNNAME_NAME: string;
            foreignName: string;
            static PROPERTY_GROUP_NAME: string;
            group: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_BARCODE_NAME: string;
            barCode: string;
            static PROPERTY_ITEMTYPE_NAME: string;
            itemType: emItemType;
            static PROPERTY_PURCHASEITEM_NAME: string;
            purchaseItem: ibas.emYesNo;
            static PROPERTY_SALESITEM_NAME: string;
            salesItem: ibas.emYesNo;
            static PROPERTY_INVENTORYITEM_NAME: string;
            inventoryItem: ibas.emYesNo;
            static PROPERTY_PHANTOMITEM_NAME: string;
            phantomItem: ibas.emYesNo;
            static PROPERTY_WAREHOUSE_NAME: string;
            warehouse: string;
            static PROPERTY_INVENTORYUOM_NAME: string;
            inventoryUOM: string;
            static PROPERTY_PRICE_NAME: string;
            price: number;
            static PROPERTY_CURRENCY_NAME: string;
            currency: string;
            static PROPERTY_ONHAND_NAME: string;
            onHand: number;
            static PROPERTY_ONCOMMITED_NAME: string;
            onCommited: number;
            static PROPERTY_ONORDERED_NAME: string;
            onOrdered: number;
            static PROPERTY_LEADTIME_NAME: string;
            leadTime: number;
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            serialManagement: ibas.emYesNo;
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            batchManagement: ibas.emYesNo;
            static PROPERTY_VALIDDATE_NAME: string;
            validDate: Date;
            static PROPERTY_INVALIDDATE_NAME: string;
            invalidDate: Date;
            static PROPERTY_PICTURE_NAME: string;
            picture: string;
            static PROPERTY_DOCENTRY_NAME: string;
            docEntry: number;
            static PROPERTY_OBJECTCODE_NAME: string;
            objectCode: string;
            static PROPERTY_DATAOWNER_NAME: string;
            dataOwner: number;
            static PROPERTY_ORGANIZATION_NAME: string;
            organization: string;
            protected init(): void;
        }
    }
}
declare namespace materials {
    namespace bo {
        class Warehouse extends ibas.BOMasterData<Warehouse> implements IWarehouse {
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            static PROPERTY_CODE_NAME: string;
            code: string;
            static PROPERTY_NAME_NAME: string;
            name: string;
            static PROPERTY_ACTIVATED_NAME: string;
            activated: ibas.emYesNo;
            static PROPERTY_REFERENCED_NAME: string;
            referenced: ibas.emYesNo;
            static PROPERTY_DELETED_NAME: string;
            deleted: ibas.emYesNo;
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
declare namespace materials {
    namespace bo {
        class DataConverter extends ibas.DataConverter4j {
            protected createConverter(): ibas.BOConverter;
        }
        const boFactory: ibas.BOFactory;
    }
}
declare namespace materials {
    namespace bo {
        class BORepositoryMaterials extends ibas.BORepositoryApplication implements IBORepositoryMaterials {
            protected createConverter(): ibas.IDataConverter;
            toUrl(filename: string): string;
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            fetchGoodsIssue(fetcher: ibas.IFetchCaller<bo.GoodsIssue>): void;
            saveGoodsIssue(saver: ibas.ISaveCaller<bo.GoodsIssue>): void;
            fetchGoodsReceipt(fetcher: ibas.IFetchCaller<bo.GoodsReceipt>): void;
            saveGoodsReceipt(saver: ibas.ISaveCaller<bo.GoodsReceipt>): void;
            fetchInventoryTransfer(fetcher: ibas.IFetchCaller<bo.InventoryTransfer>): void;
            saveInventoryTransfer(saver: ibas.ISaveCaller<bo.InventoryTransfer>): void;
            fetchMaterial(fetcher: ibas.IFetchCaller<bo.Material>): void;
            saveMaterial(saver: ibas.ISaveCaller<bo.Material>): void;
            fetchMaterialGroup(fetcher: ibas.IFetchCaller<bo.MaterialGroup>): void;
            saveMaterialGroup(saver: ibas.ISaveCaller<bo.MaterialGroup>): void;
            fetchMaterialInventory(fetcher: ibas.IFetchCaller<bo.MaterialInventory>): void;
            fetchMaterialInventoryJournal(fetcher: ibas.IFetchCaller<bo.MaterialInventoryJournal>): void;
            saveMaterialInventoryJournal(saver: ibas.ISaveCaller<bo.MaterialInventoryJournal>): void;
            fetchWarehouse(fetcher: ibas.IFetchCaller<bo.Warehouse>): void;
            saveWarehouse(saver: ibas.ISaveCaller<bo.Warehouse>): void;
            fetchProduct(fetcher: ibas.IFetchCaller<bo.Product>): void;
            fetchMaterialBatch(fetcher: ibas.IFetchCaller<bo.MaterialBatch>): void;
            saveMaterialBatch(saver: ibas.ISaveCaller<bo.MaterialBatch>): void;
            fetchMaterialBatchJournal(fetcher: ibas.IFetchCaller<bo.MaterialBatchJournal>): void;
            fetchMaterialSerial(fetcher: ibas.IFetchCaller<bo.MaterialSerial>): void;
            saveMaterialSerial(saver: ibas.ISaveCaller<bo.MaterialSerial>): void;
            fetchMaterialSerialJournal(fetcher: ibas.IFetchCaller<bo.MaterialSerialJournal>): void;
            fetchMaterialPriceList(fetcher: ibas.IFetchCaller<bo.MaterialPriceList>): void;
            saveMaterialPriceList(saver: ibas.ISaveCaller<bo.MaterialPriceList>): void;
            fetchMaterialQuantity(fetcher: ibas.IFetchCaller<bo.MaterialQuantity>): void;
            fetchMaterialPrice(fetcher: ibas.IFetchCaller<bo.MaterialPrice>): void;
        }
    }
}
declare namespace materials {
    namespace bo {
    }
}
declare namespace materials {
    namespace app {
        class GoodsIssueChooseApp extends ibas.BOChooseService<IGoodsIssueChooseView, bo.GoodsIssue> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IGoodsIssueChooseView extends ibas.IBOChooseView {
            showData(datas: bo.GoodsIssue[]): void;
        }
        class GoodsIssueChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.GoodsIssue>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsIssueEditApp extends ibas.BOEditApplication<IGoodsIssueEditView, bo.GoodsIssue> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.GoodsIssue): void;
            protected priceListData: bo.MaterialPriceList[];
            protected editData: bo.GoodsIssue;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            private addGoodsIssueLine;
            private removeGoodsIssueLine;
            private chooseGoodsIssueLineMaterial;
            private chooseGoodsIssueLineWarehouse;
            private chooseeGoodsIssueMaterialPriceList;
            private chooseGoodsIssueLineMaterialBatch;
            private chooseGoodsIssueLineMaterialSerial;
        }
        interface IGoodsIssueEditView extends ibas.IBOEditView {
            showGoodsIssue(data: bo.GoodsIssue): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            addGoodsIssueLineEvent: Function;
            removeGoodsIssueLineEvent: Function;
            chooseeGoodsIssueMaterialPriceListEvent: Function;
            showGoodsIssueLines(datas: bo.GoodsIssueLine[]): void;
            chooseGoodsIssueLineMaterialEvent: Function;
            chooseGoodsIssueLineWarehouseEvent: Function;
            chooseGoodsIssueLineMaterialBatchEvent: Function;
            chooseGoodsIssueLineMaterialSerialEvent: Function;
            defaultWarehouse: string;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsIssueFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsIssueListApp extends ibas.BOListApplication<IGoodsIssueListView, bo.GoodsIssue> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.GoodsIssue): void;
            protected editData(data: bo.GoodsIssue): void;
            protected deleteData(data: bo.GoodsIssue | bo.GoodsIssue[]): void;
        }
        interface IGoodsIssueListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.GoodsIssue[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsIssueViewApp extends ibas.BOViewService<IGoodsIssueViewView, bo.GoodsIssue> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected editData(): void;
            run(): void;
            run(data: bo.GoodsIssue): void;
            protected viewData: bo.GoodsIssue;
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        interface IGoodsIssueViewView extends ibas.IBOViewView {
            showGoodsIssue(data: bo.GoodsIssue): void;
            showGoodsIssueLines(datas: bo.GoodsIssueLine[]): void;
        }
        class GoodsIssueLinkServiceMapping extends ibas.BOLinkServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsReceiptChooseApp extends ibas.BOChooseService<IGoodsReceiptChooseView, bo.GoodsReceipt> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IGoodsReceiptChooseView extends ibas.IBOChooseView {
            showData(datas: bo.GoodsReceipt[]): void;
        }
        class GoodsReceiptChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.GoodsReceipt>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsReceiptEditApp extends ibas.BOEditApplication<IGoodsReceiptEditView, bo.GoodsReceipt> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.GoodsReceipt): void;
            protected editData: bo.GoodsReceipt;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            private addGoodsReceiptLine;
            private removeGoodsReceiptLine;
            private chooseGoodsReceiptLineMaterial;
            private chooseeGoodsReceiptMaterialPriceList;
            private chooseGoodsReceiptlineWarehouse;
            private chooseGoodsReceiptLineMaterialBatch;
            private createGoodsReceiptLineMaterialSerial;
        }
        interface IGoodsReceiptEditView extends ibas.IBOEditView {
            showGoodsReceipt(data: bo.GoodsReceipt): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            addGoodsReceiptLineEvent: Function;
            removeGoodsReceiptLineEvent: Function;
            showGoodsReceiptLines(datas: bo.GoodsReceiptLine[]): void;
            chooseGoodsReceiptMaterialPriceListEvent: Function;
            chooseGoodsReceiptLineMaterialEvent: Function;
            chooseGoodsReceiptlineWarehouseEvent: Function;
            chooseGoodsReceiptLineMaterialBatchEvent: Function;
            chooseGoodsReceiptLineMaterialSerialEvent: Function;
            defaultWarehouse: string;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsReceiptFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsReceiptListApp extends ibas.BOListApplication<IGoodsReceiptListView, bo.GoodsReceipt> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.GoodsReceipt): void;
            protected editData(data: bo.GoodsReceipt): void;
            protected deleteData(data: bo.GoodsReceipt | bo.GoodsReceipt[]): void;
        }
        interface IGoodsReceiptListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.GoodsReceipt[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class GoodsReceiptViewApp extends ibas.BOViewService<IGoodsReceiptViewView, bo.GoodsReceipt> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected editData(): void;
            run(): void;
            run(data: bo.GoodsReceipt): void;
            protected viewData: bo.GoodsReceipt;
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        interface IGoodsReceiptViewView extends ibas.IBOViewView {
            showGoodsReceipt(data: bo.GoodsReceipt): void;
            showGoodsReceiptLines(datas: bo.GoodsReceiptLine[]): void;
        }
        class GoodsReceiptLinkServiceMapping extends ibas.BOLinkServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
declare namespace materials {
    namespace app {
        class InventoryTransferChooseApp extends ibas.BOChooseService<IInventoryTransferChooseView, bo.InventoryTransfer> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IInventoryTransferChooseView extends ibas.IBOChooseView {
            showData(datas: bo.InventoryTransfer[]): void;
        }
        class InventoryTransferChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.InventoryTransfer>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class InventoryTransferEditApp extends ibas.BOEditApplication<IInventoryTransferEditView, bo.InventoryTransfer> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.InventoryTransfer): void;
            protected editData: bo.InventoryTransfer;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            private addInventoryTransferLine;
            private removeInventoryTransferLine;
            private chooseInventoryTransferWarehouse;
            private chooseInventoryTransferLineMaterial;
            private chooseeInventoryTransferMaterialPriceList;
            private chooseInventoryTransferLineWarehouse;
            private chooseInventoryTransferLineMaterialBatch;
            private chooseInventoryTransferLineMaterialSerial;
        }
        interface IInventoryTransferEditView extends ibas.IBOEditView {
            showInventoryTransfer(data: bo.InventoryTransfer): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            chooseInventoryTransferWarehouseEvent: Function;
            chooseeInventoryTransferMaterialPriceListEvent: Function;
            addInventoryTransferLineEvent: Function;
            removeInventoryTransferLineEvent: Function;
            showInventoryTransferLines(datas: bo.InventoryTransferLine[]): void;
            chooseInventoryTransferLineMaterialEvent: Function;
            chooseInventoryTransferLineWarehouseEvent: Function;
            chooseInventoryTransferLineMaterialBatchEvent: Function;
            chooseInventoryTransferLineMaterialSerialEvent: Function;
            defaultWarehouse: string;
        }
    }
}
declare namespace materials {
    namespace app {
        class InventoryTransferFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class InventoryTransferListApp extends ibas.BOListApplication<IInventoryTransferListView, bo.InventoryTransfer> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.InventoryTransfer): void;
            protected editData(data: bo.InventoryTransfer): void;
            protected deleteData(data: bo.InventoryTransfer | bo.InventoryTransfer[]): void;
        }
        interface IInventoryTransferListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.InventoryTransfer[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class InventoryTransferViewApp extends ibas.BOViewService<IInventoryTransferViewView, bo.InventoryTransfer> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected editData(): void;
            run(): void;
            run(data: bo.InventoryTransfer): void;
            protected viewData: bo.InventoryTransfer;
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        interface IInventoryTransferViewView extends ibas.IBOViewView {
            showInventoryTransfer(data: bo.InventoryTransfer): void;
            showInventoryTransferLines(datas: bo.InventoryTransferLine[]): void;
        }
        class InventoryTransferLinkServiceMapping extends ibas.BOLinkServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialChooseApp extends ibas.BOChooseService<IMaterialChooseView, bo.Material> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IMaterialChooseView extends ibas.IBOChooseView {
            showData(datas: bo.Material[]): void;
        }
        class MaterialChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Material>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialEditApp extends ibas.BOEditApplication<IMaterialEditView, bo.Material> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.Material): void;
            protected editData: bo.Material;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
            private chooseMaterialWarehouse;
            private chooseMaterialGroup;
            private uploadPicture;
        }
        interface IMaterialEditView extends ibas.IBOEditView {
            showMaterial(data: bo.Material): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
            chooseMaterialWarehouseEvent: Function;
            chooseMaterialGroupEvent: Function;
            uploadPictureEvent: Function;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
        class MaterialInventoryFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
        class MaterialOverviewFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialInventoryListApp extends ibas.BOListApplication<IMaterialInventoryListView, bo.MaterialInventory> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.MaterialInventory): void;
            protected editData(data: bo.MaterialInventory): void;
            protected fetchInventoryJournal(criteria: ibas.ICriteria): void;
        }
        interface IMaterialInventoryListView extends ibas.IBOListView {
            showInventories(datas: bo.MaterialInventory[]): void;
            fetchInventoryJournalEvent: Function;
            showInventoryJournals(datas: bo.MaterialInventoryJournal[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialListApp extends ibas.BOListApplication<IMaterialListView, bo.Material> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.Material): void;
            protected editData(data: bo.Material): void;
            protected deleteData(data: bo.Material | bo.Material[]): void;
            private materialGroup;
        }
        interface IMaterialListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            materialGroupEvent: Function;
            showData(datas: bo.Material[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialOverviewApp extends ibas.BOListApplication<IMaterialOverviewView, bo.Material> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected fetchMaterialAllInformation(data: bo.Material): void;
            protected newData(): void;
            protected viewData(data: bo.Material): void;
            protected editData(data: bo.Material): void;
            protected beShowedPriceList: bo.MaterialPriceList;
            private chooseMaterialOverViewPriceList;
        }
        interface IMaterialOverviewView extends ibas.IBOListView {
            editDataEvent: Function;
            showMaterials(datas: bo.Material[]): void;
            showMaterial(datas: bo.Material): void;
            showMaterialQuantity(data: bo.MaterialQuantity): void;
            showMaterialInventory(datas: bo.MaterialInventory[], dataIsChange: any): void;
            showMaterialPrice(datas: bo.MaterialPrice[], dataIsChange: boolean): void;
            showMaterialBatch(datas: bo.MaterialBatch[]): void;
            showMaterialSerial(datas: bo.MaterialSerial[]): void;
            fetchMaterialAllInformationEvent: Function;
            chooseMaterialOverViewPriceListEvent: Function;
            showBeShowedPriceList(datas: bo.MaterialPriceList[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialViewApp extends ibas.BOViewService<IMaterialViewView, bo.Material> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected editData(): void;
            run(): void;
            run(data: bo.Material): void;
            protected viewData: bo.Material;
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        interface IMaterialViewView extends ibas.IBOViewView {
            showMaterial(data: bo.Material): void;
        }
        class MaterialLinkServiceMapping extends ibas.BOLinkServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
declare namespace materials {
    namespace app {
        class ProductChooseApp extends ibas.BOChooseService<IProductChooseView, bo.Product> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IProductChooseView extends ibas.IBOChooseView {
            showData(datas: bo.Product[]): void;
        }
        class ProductChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Product>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialBatchChooseApp extends ibas.BOChooseService<IMaterialBatchChooseView, bo.MaterialBatch> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IMaterialBatchChooseView extends ibas.IBOChooseView {
            showData(datas: bo.MaterialBatch[]): void;
        }
        class MaterialBatchChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.MaterialBatch>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialBatchEditApp extends ibas.BOEditApplication<IMaterialBatchEditView, bo.MaterialBatch> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.MaterialBatch): void;
            protected editData: bo.MaterialBatch;
            protected saveData(): void;
        }
        interface IMaterialBatchEditView extends ibas.IBOEditView {
            showMaterialBatch(data: bo.MaterialBatch): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialBatchFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialBatchListApp extends ibas.BOListApplication<IMaterialBatchListView, bo.MaterialBatch> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.MaterialBatch): void;
            protected editData(data: bo.MaterialBatch): void;
            protected fetchBatchJournal(criteria: ibas.ICriteria): void;
        }
        interface IMaterialBatchListView extends ibas.IBOListView {
            editDataEvent: Function;
            showBatches(datas: bo.MaterialBatch[]): void;
            fetchBatchJournalEvent: Function;
            showBatchJournals(datas: bo.MaterialBatchJournal[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        abstract class MaterialBatchService<T extends IMaterialBatchServiceView> extends ibas.ServiceApplication<T, IMaterialBatchContract[]> {
            protected registerView(): void;
            protected viewShowed(): void;
            protected workDatas: ibas.IList<IMaterialBatchContract>;
            protected workingData: IMaterialBatchContract;
            runService(contracts: IMaterialBatchContract[]): void;
            protected changeWorkingData(data: IMaterialBatchContract): void;
        }
        class MaterialBatchIssueService extends MaterialBatchService<IMaterialBatchIssueView> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected changeWorkingData(data: IMaterialBatchContract): void;
            protected useMaterialBatchInventory(data: bo.IMaterialBatch): void;
            protected removeMaterialBatchItem(data: bo.IMaterialBatchItem): void;
        }
        class MaterialBatchReceiptService extends MaterialBatchService<IMaterialBatchReceiptView> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected deleteMaterialBatchItem(data: bo.IMaterialBatchItem): void;
            protected createMaterialBatchItem(): void;
        }
        interface IMaterialBatchServiceView extends ibas.IBOView {
            showWorkDatas(datas: IMaterialBatchContract[]): void;
            changeWorkingDataEvent: Function;
            showMaterialBatchItems(datas: bo.IMaterialBatchItem[]): void;
        }
        interface IMaterialBatchIssueView extends IMaterialBatchServiceView {
            showMaterialBatchInventories(datas: bo.MaterialBatch[]): void;
            useMaterialBatchInventoryEvent: Function;
            removeMaterialBatchItemEvent: Function;
        }
        interface IMaterialBatchReceiptView extends IMaterialBatchServiceView {
            createMaterialBatchItemEvent: Function;
            deleteMaterialBatchItemEvent: Function;
        }
        class MaterialBatchIssueServiceMapping extends ibas.ServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IServiceContract>;
        }
        class MaterialBatchReceiptServiceMapping extends ibas.ServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialGroupChooseApp extends ibas.BOChooseService<IMaterialGroupChooseView, bo.MaterialGroup> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IMaterialGroupChooseView extends ibas.IBOChooseView {
            showData(datas: bo.MaterialGroup[]): void;
        }
        class MaterialGroupChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.MaterialGroup>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialGroupEditApp extends ibas.BOEditApplication<IMaterialGroupEditView, bo.MaterialGroup> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.MaterialGroup): void;
            protected editData: bo.MaterialGroup;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
        }
        interface IMaterialGroupEditView extends ibas.IBOEditView {
            showMaterialGroup(data: bo.MaterialGroup): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialGroupFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialGroupListApp extends ibas.BOListApplication<IMaterialGroupListView, bo.MaterialGroup> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.MaterialGroup): void;
            protected editData(data: bo.MaterialGroup): void;
            protected deleteData(data: bo.MaterialGroup | bo.MaterialGroup[]): void;
        }
        interface IMaterialGroupListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.MaterialGroup[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialPriceListChooseApp extends ibas.BOChooseService<IMaterialPriceListChooseView, bo.MaterialPriceList> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IMaterialPriceListChooseView extends ibas.IBOChooseView {
            showData(datas: bo.MaterialPriceList[]): void;
        }
        class MaterialPriceListChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.MaterialPriceList>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialPriceListEditApp extends ibas.BOEditApplication<IMaterialPriceListEditView, bo.MaterialPriceList> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.MaterialPriceList): void;
            protected editData: bo.MaterialPriceList;
            protected saveData(): void;
            protected deleteData(): void;
            private chooseBasedOnMaterialPriceList;
        }
        interface IMaterialPriceListEditView extends ibas.IBOEditView {
            showMaterialPriceList(data: bo.MaterialPriceList): void;
            deleteDataEvent: Function;
            chooseBasedOnMaterialPriceListEvent: Function;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialPriceListFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialPriceListListApp extends ibas.BOListApplication<IMaterialPriceListListView, bo.MaterialPriceList> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.MaterialPriceList): void;
            protected editData(data: bo.MaterialPriceList): void;
            protected deleteData(data: bo.MaterialPriceList | bo.MaterialPriceList[]): void;
            protected fetchPrice(criteria: ibas.ICriteria): void;
            protected savePriceListItem(data: bo.MaterialPriceItem | bo.MaterialPriceItem[]): void;
        }
        interface IMaterialPriceListListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showPriceList(datas: bo.MaterialPriceList[]): void;
            fetchPriceEvent: Function;
            showPrices(datas: bo.MaterialPrice[]): void;
            savePriceListItemEvent: Function;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialPriceListViewApp extends ibas.BOViewService<IMaterialPriceListViewView, bo.MaterialPriceList> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected editData(): void;
            run(): void;
            run(data: bo.MaterialPriceList): void;
            protected viewData: bo.MaterialPriceList;
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        interface IMaterialPriceListViewView extends ibas.IBOViewView {
        }
        class MaterialPriceListLinkServiceMapping extends ibas.BOLinkServiceMapping {
            constructor();
            create(): ibas.IBOLinkService;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialSerialChooseApp extends ibas.BOChooseService<IMaterialSerialChooseView, bo.MaterialSerial> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IMaterialSerialChooseView extends ibas.IBOChooseView {
            showData(datas: bo.MaterialSerial[]): void;
        }
        class MaterialSerialChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.MaterialSerial>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialSerialEditApp extends ibas.BOEditApplication<IMaterialSerialEditView, bo.MaterialSerial> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.MaterialSerial): void;
            protected editData: bo.MaterialSerial;
            protected saveData(): void;
        }
        interface IMaterialSerialEditView extends ibas.IBOEditView {
            showMaterialSerial(data: bo.MaterialSerial): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialSerialFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class MaterialSerialListApp extends ibas.BOListApplication<IMaterialSerialListView, bo.MaterialSerial> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.MaterialSerial): void;
            protected editData(data: bo.MaterialSerial): void;
            protected fetchSerialJournal(criteria: ibas.ICriteria): void;
        }
        interface IMaterialSerialListView extends ibas.IBOListView {
            editDataEvent: Function;
            showSerials(datas: bo.MaterialSerial[]): void;
            fetchSerialJournalEvent: Function;
            showSerialJournals(datas: bo.MaterialSerialJournal[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        abstract class MaterialSerialService<T extends IMaterialSerialServiceView> extends ibas.ServiceApplication<T, IMaterialSerialContract[]> {
            protected registerView(): void;
            protected viewShowed(): void;
            protected workDatas: ibas.IList<IMaterialSerialContract>;
            protected workingData: IMaterialSerialContract;
            runService(contracts: IMaterialSerialContract[]): void;
            protected changeWorkingData(data: IMaterialSerialContract): void;
        }
        class MaterialSerialIssueService extends MaterialSerialService<IMaterialSerialIssueView> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected changeWorkingData(data: IMaterialSerialContract): void;
            protected useMaterialSerialInventory(data: bo.IMaterialSerial): void;
            protected removeMaterialSerialItem(data: bo.IMaterialSerialItem): void;
        }
        class MaterialSerialReceiptService extends MaterialSerialService<IMaterialSerialReceiptView> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            constructor();
            protected registerView(): void;
            protected deleteMaterialSerialItem(data: bo.IMaterialSerialItem): void;
            protected createMaterialSerialItem(): void;
        }
        interface IMaterialSerialServiceView extends ibas.IBOView {
            showWorkDatas(datas: IMaterialSerialContract[]): void;
            changeWorkingDataEvent: Function;
            showMaterialSerialItems(datas: bo.IMaterialSerialItem[]): void;
        }
        interface IMaterialSerialIssueView extends IMaterialSerialServiceView {
            showMaterialSerialInventories(datas: bo.MaterialSerial[]): void;
            useMaterialSerialInventoryEvent: Function;
            removeMaterialSerialItemEvent: Function;
        }
        interface IMaterialSerialReceiptView extends IMaterialSerialServiceView {
            createMaterialSerialItemEvent: Function;
            deleteMaterialSerialItemEvent: Function;
        }
        class MaterialSerialIssueServiceMapping extends ibas.ServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IServiceContract>;
        }
        class MaterialSerialReceiptServiceMapping extends ibas.ServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
declare namespace materials {
    namespace app {
        class WarehouseChooseApp extends ibas.BOChooseService<IWarehouseChooseView, bo.Warehouse> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
        }
        interface IWarehouseChooseView extends ibas.IBOChooseView {
            showData(datas: bo.Warehouse[]): void;
        }
        class WarehouseChooseServiceMapping extends ibas.BOChooseServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Warehouse>>;
        }
    }
}
declare namespace materials {
    namespace app {
        class WarehouseEditApp extends ibas.BOEditApplication<IWarehouseEditView, bo.Warehouse> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            run(): void;
            run(data: bo.Warehouse): void;
            protected editData: bo.Warehouse;
            protected saveData(): void;
            protected deleteData(): void;
            protected createData(clone: boolean): void;
        }
        interface IWarehouseEditView extends ibas.IBOEditView {
            showWarehouse(data: bo.Warehouse): void;
            deleteDataEvent: Function;
            createDataEvent: Function;
        }
    }
}
declare namespace materials {
    namespace app {
        class WarehouseFunc extends ibas.ModuleFunction {
            static FUNCTION_ID: string;
            static FUNCTION_NAME: string;
            constructor();
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
declare namespace materials {
    namespace app {
        class WarehouseListApp extends ibas.BOListApplication<IWarehouseListView, bo.Warehouse> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected newData(): void;
            protected viewData(data: bo.Warehouse): void;
            protected editData(data: bo.Warehouse): void;
            protected deleteData(data: bo.Warehouse | bo.Warehouse[]): void;
        }
        interface IWarehouseListView extends ibas.IBOListView {
            editDataEvent: Function;
            deleteDataEvent: Function;
            showData(datas: bo.Warehouse[]): void;
        }
    }
}
declare namespace materials {
    namespace app {
        class WarehouseViewApp extends ibas.BOViewService<IWarehouseViewView, bo.Warehouse> {
            static APPLICATION_ID: string;
            static APPLICATION_NAME: string;
            static BUSINESS_OBJECT_CODE: string;
            constructor();
            protected registerView(): void;
            protected viewShowed(): void;
            protected editData(): void;
            run(): void;
            run(data: bo.Warehouse): void;
            protected viewData: bo.Warehouse;
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        interface IWarehouseViewView extends ibas.IBOViewView {
            showWarehouse(data: bo.Warehouse): void;
        }
        class WarehouseLinkServiceMapping extends ibas.BOLinkServiceMapping {
            constructor();
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
declare namespace materials {
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
