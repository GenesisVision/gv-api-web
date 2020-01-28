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
import { SignalTradingEvent } from './SignalTradingEvent';

import ApiClient from "../ApiClient";

export class ItemsViewModelSignalTradingEvent { 
    public 'items': Array<SignalTradingEvent>;
    public 'total': number;

    constructor(data: {[key: string]: any}) { 
        this['items'] = data['items'];
        this['total'] = data['total'];
    }

    static constructFromObject(data: {[key: string]: any}): ItemsViewModelSignalTradingEvent | undefined {
        if (data) {
            return new ItemsViewModelSignalTradingEvent({ 
                'items': ApiClient.convertToType(data['items'], [SignalTradingEvent]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}



