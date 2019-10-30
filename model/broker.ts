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
import { BrokerAccountType } from './brokerAccountType';
import { ProgramTag } from './programTag';

import ApiClient from "../ApiClient";

export class Broker { 
    public 'name'?: string;
    public 'description'?: string;
    public 'logo'?: string;
    public 'terms'?: string;
    public 'assets'?: string;
    public 'fee'?: number;
    public 'leverageMin'?: number;
    public 'leverageMax'?: number;
    public 'accountTypes'?: [BrokerAccountType];
    public 'tags'?: [ProgramTag];
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: Broker = new Broker()): Broker {
        if (data) {
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'string');
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], 'string');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'number');
            }
            if (data.hasOwnProperty('leverageMin')) {
                obj['leverageMin'] = ApiClient.convertToType(data['leverageMin'], 'number');
            }
            if (data.hasOwnProperty('leverageMax')) {
                obj['leverageMax'] = ApiClient.convertToType(data['leverageMax'], 'number');
            }
            if (data.hasOwnProperty('accountTypes')) {
                obj['accountTypes'] = ApiClient.convertToType(data['accountTypes'], [BrokerAccountType]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


