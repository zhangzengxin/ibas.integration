/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import {
} from "../api/index";

/** 数据转换者 */
export class DataConverter4ig extends ibas.DataConverter4j {
    parsing(data: any, sign: string): any {
        if (data.type === bo.Action.name) {
            let newData: bo.Action = new bo.Action();
            newData.id = data.id;
            newData.group = data.group;
            newData.name = data.name;
            newData.activated = data.activated;
            newData.path = data.path;
            newData.remark = data.remark;
            if (!ibas.objects.isNull(data.configs)) {
                for (let item of data.configs) {
                    let newItem: bo.ActionConfig = new bo.ActionConfig;
                    newItem.key = item.key;
                    newItem.value = item.value;
                    newItem.remark = item.remark;
                    newData.configs.add(newItem);
                }
            }
            return newData;
        } else {
            return super.parsing(data, sign);
        }
    }
    /** 创建业务对象转换者 */
    protected createConverter(): ibas.BOConverter {
        return new BOConverter4ig;
    }
}

/** 业务对象转换者 */
class BOConverter4ig extends ibas.BOConverter {

    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected customParsing(data: any): ibas.IBusinessObject {
        return data;
    }

    /**
     * 转换数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 转换的值
     */
    protected convertData(boName: string, property: string, value: any): any {
        return super.convertData(boName, property, value);
    }

    /**
     * 解析数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 解析的值
     */
    protected parsingData(boName: string, property: string, value: any): any {
        return super.parsingData(boName, property, value);
    }
}