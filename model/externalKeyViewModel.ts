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

export class ExternalKeyViewModel { 
    public 'id'?: string;
    public 'title'?: string;
    public 'dateAdd'?: Date;
    public 'exchangeName'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ExternalKeyViewModel = new ExternalKeyViewModel()): ExternalKeyViewModel {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('dateAdd')) {
                obj['dateAdd'] = ApiClient.convertToType(data['dateAdd'], 'Date');
            }
            if (data.hasOwnProperty('exchangeName')) {
                obj['exchangeName'] = ApiClient.convertToType(data['exchangeName'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


