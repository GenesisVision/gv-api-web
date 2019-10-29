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
import { SignalTradingEvent } from './signalTradingEvent';

import ApiClient from "../ApiClient";

export class SignalTradingEvents { 
    public 'events'?: [SignalTradingEvent];
    public 'total'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: SignalTradingEvents = new SignalTradingEvents()): SignalTradingEvents {
        if (data) {
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [SignalTradingEvent]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


