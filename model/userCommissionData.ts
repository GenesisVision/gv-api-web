/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import ApiClient from "../ApiClient";

export class UserCommissionData { 
    public 'isPayingCommissionInGvt'?: boolean;
    public 'gvtHolderTradingFee'?: number;
    public 'gvtHolderDiscount'?: number;
    public 'regularTradingFee'?: number;
    public 'regularDiscount'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: UserCommissionData = new UserCommissionData()): UserCommissionData {
        if (data) {
            if (data.hasOwnProperty('isPayingCommissionInGvt')) {
                obj['isPayingCommissionInGvt'] = ApiClient.convertToType(data['isPayingCommissionInGvt'], 'boolean');
            }
            if (data.hasOwnProperty('gvtHolderTradingFee')) {
                obj['gvtHolderTradingFee'] = ApiClient.convertToType(data['gvtHolderTradingFee'], 'number');
            }
            if (data.hasOwnProperty('gvtHolderDiscount')) {
                obj['gvtHolderDiscount'] = ApiClient.convertToType(data['gvtHolderDiscount'], 'number');
            }
            if (data.hasOwnProperty('regularTradingFee')) {
                obj['regularTradingFee'] = ApiClient.convertToType(data['regularTradingFee'], 'number');
            }
            if (data.hasOwnProperty('regularDiscount')) {
                obj['regularDiscount'] = ApiClient.convertToType(data['regularDiscount'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


