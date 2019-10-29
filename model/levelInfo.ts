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

export class LevelInfo { 
    public 'level'?: number;
    public 'investmentLimit'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: LevelInfo = new LevelInfo()): LevelInfo {
        if (data) {
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'number');
            }
            if (data.hasOwnProperty('investmentLimit')) {
                obj['investmentLimit'] = ApiClient.convertToType(data['investmentLimit'], 'number');
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


