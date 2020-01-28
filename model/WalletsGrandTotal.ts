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
import { Currency } from './Currency';

import ApiClient from "../ApiClient";

export class WalletsGrandTotal { 
    public 'currency': Currency;
    public 'available': number;
    public 'invested': number;
    public 'trading': number;
    public 'total': number;

    constructor(data: {[key: string]: any}) { 
        this['currency'] = data['currency'];
        this['available'] = data['available'];
        this['invested'] = data['invested'];
        this['trading'] = data['trading'];
        this['total'] = data['total'];
    }

    static constructFromObject(data: {[key: string]: any}): WalletsGrandTotal | undefined {
        if (data) {
            return new WalletsGrandTotal({ 
                'currency': Currency.constructFromObject(data['currency']),
                'available': ApiClient.convertToType(data['available'], 'number'),
                'invested': ApiClient.convertToType(data['invested'], 'number'),
                'trading': ApiClient.convertToType(data['trading'], 'number'),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}



