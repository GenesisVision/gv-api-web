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
    public 'level': number;
    public 'investmentLimit': number;

    constructor(data: {[key: string]: any}) { 
        this['level'] = data['level'];
        this['investmentLimit'] = data['investmentLimit'];
    }

    static constructFromObject(data: {[key: string]: any}): LevelInfo | undefined {
        if (data) {
            return new LevelInfo({ 
                'level': ApiClient.convertToType(data['level'], 'number'),
                'investmentLimit': ApiClient.convertToType(data['investmentLimit'], 'number'),
            });
        }
    }
}



