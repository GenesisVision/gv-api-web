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

export class TwoFactorCodeModel { 
    public 'twoFactorCode'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: TwoFactorCodeModel = new TwoFactorCodeModel()): TwoFactorCodeModel {
        if (data) {
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


