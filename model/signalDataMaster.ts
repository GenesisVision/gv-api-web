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

export class SignalDataMaster { 
    public 'login'?: string;
    public 'share'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: SignalDataMaster = new SignalDataMaster()): SignalDataMaster {
        if (data) {
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'string');
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


