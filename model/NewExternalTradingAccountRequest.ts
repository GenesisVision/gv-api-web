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

export class NewExternalTradingAccountRequest { 
    public 'brokerAccountTypeId': string;
    public 'key': string;
    public 'secret': string;

    constructor(data: {[key: string]: any}) { 
        this['brokerAccountTypeId'] = data['brokerAccountTypeId'];
        this['key'] = data['key'];
        this['secret'] = data['secret'];
    }

    static constructFromObject(data: {[key: string]: any}): NewExternalTradingAccountRequest | undefined {
        if (data) {
            return new NewExternalTradingAccountRequest({ 
                'brokerAccountTypeId': ApiClient.convertToType(data['brokerAccountTypeId'], 'string'),
                'key': ApiClient.convertToType(data['key'], 'string'),
                'secret': ApiClient.convertToType(data['secret'], 'string'),
            });
        }
    }
}


