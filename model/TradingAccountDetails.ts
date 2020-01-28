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
import { AssetDetails } from './AssetDetails';

import ApiClient from "../ApiClient";

export class TradingAccountDetails { 
    public 'id': string;
    public 'currency': CurrencyEnum;
    public 'login': string;
    public 'apiKey': string;
    public 'asset': AssetDetails;

    constructor(data: {[key: string]: any}) { 
        this['id'] = data['id'];
        this['currency'] = data['currency'];
        this['login'] = data['login'];
        this['apiKey'] = data['apiKey'];
        this['asset'] = data['asset'];
    }

    static constructFromObject(data: {[key: string]: any}): TradingAccountDetails | undefined {
        if (data) {
            return new TradingAccountDetails({ 
                'id': ApiClient.convertToType(data['id'], 'string'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'apiKey': ApiClient.convertToType(data['apiKey'], 'string'),
                'asset': AssetDetails.constructFromObject(data['asset']),
            });
        }
    }
}


type CurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';



