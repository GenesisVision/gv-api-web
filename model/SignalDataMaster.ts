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
    public 'login': string;
    public 'share': number;

    constructor(data: {[key: string]: any}) { 
        this['login'] = data['login'];
        this['share'] = data['share'];
    }

    static constructFromObject(data: {[key: string]: any}): SignalDataMaster | undefined {
        if (data) {
            return new SignalDataMaster({ 
                'login': ApiClient.convertToType(data['login'], 'string'),
                'share': ApiClient.convertToType(data['share'], 'number'),
            });
        }
    }
}



