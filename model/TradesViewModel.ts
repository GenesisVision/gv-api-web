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
import { OrderModel } from './OrderModel';
import { TradesDelay } from './TradesDelay';

import ApiClient from "../ApiClient";

export class TradesViewModel { 
    public 'showSwaps': boolean;
    public 'showTickets': boolean;
    public 'tradesDelay': TradesDelay;
    public 'items': Array<OrderModel>;
    public 'total': number;

    constructor(data: {[key: string]: any}) { 
        this['showSwaps'] = data['showSwaps'];
        this['showTickets'] = data['showTickets'];
        this['tradesDelay'] = data['tradesDelay'];
        this['items'] = data['items'];
        this['total'] = data['total'];
    }

    static constructFromObject(data: {[key: string]: any}): TradesViewModel | undefined {
        if (data) {
            return new TradesViewModel({ 
                'showSwaps': ApiClient.convertToType(data['showSwaps'], 'boolean'),
                'showTickets': ApiClient.convertToType(data['showTickets'], 'boolean'),
                'tradesDelay': TradesDelay.constructFromObject(data['tradesDelay']),
                'items': ApiClient.convertToType(data['items'], [OrderModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}


