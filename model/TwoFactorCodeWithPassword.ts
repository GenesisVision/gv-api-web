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

export class TwoFactorCodeWithPassword { 
    public 'twoFactorCode': string;
    public 'password': string;

    constructor(data: {[key: string]: any}) { 
        this['twoFactorCode'] = data['twoFactorCode'];
        this['password'] = data['password'];
    }

    static constructFromObject(data: {[key: string]: any}): TwoFactorCodeWithPassword | undefined {
        if (data) {
            return new TwoFactorCodeWithPassword({ 
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
                'password': ApiClient.convertToType(data['password'], 'string'),
            });
        }
    }
}



