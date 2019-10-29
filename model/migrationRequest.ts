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
import { Broker } from './broker';

import ApiClient from "../ApiClient";

export class MigrationRequest { 
    public 'dateCreate'?: Date;
    public 'newLeverage'?: number;
    public 'newBroker'?: Broker;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: MigrationRequest = new MigrationRequest()): MigrationRequest {
        if (data) {
            if (data.hasOwnProperty('dateCreate')) {
                obj['dateCreate'] = ApiClient.convertToType(data['dateCreate'], 'Date');
            }
            if (data.hasOwnProperty('newLeverage')) {
                obj['newLeverage'] = ApiClient.convertToType(data['newLeverage'], 'number');
            }
            if (data.hasOwnProperty('newBroker')) {
                obj['newBroker'] = Broker.constructFromObject(data['newBroker']);
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


