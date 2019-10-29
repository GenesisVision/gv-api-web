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

export class SignalTradingEvent { 
    public 'date'?: Date;
    public 'message'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: SignalTradingEvent = new SignalTradingEvent()): SignalTradingEvent {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'string');
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


