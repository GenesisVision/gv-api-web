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
import { SubscriptionMode } from './subscriptionMode';

import ApiClient from "../ApiClient";

export class SignalSubscription { 
    public 'hasSignalAccount'?: boolean;
    public 'hasActiveSubscription'?: boolean;
    public 'mode'?: SubscriptionMode;
    public 'percent'?: number;
    public 'openTolerancePercent'?: number;
    public 'fixedVolume'?: number;
    public 'fixedCurrency'?: SignalSubscription.FixedCurrencyEnum;
    public 'totalProfit'?: number;
    public 'totalVolume'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: SignalSubscription = new SignalSubscription()): SignalSubscription {
        if (data) {
            if (data.hasOwnProperty('hasSignalAccount')) {
                obj['hasSignalAccount'] = ApiClient.convertToType(data['hasSignalAccount'], 'boolean');
            }
            if (data.hasOwnProperty('hasActiveSubscription')) {
                obj['hasActiveSubscription'] = ApiClient.convertToType(data['hasActiveSubscription'], 'boolean');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = SubscriptionMode.constructFromObject(data['mode']);
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'number');
            }
            if (data.hasOwnProperty('openTolerancePercent')) {
                obj['openTolerancePercent'] = ApiClient.convertToType(data['openTolerancePercent'], 'number');
            }
            if (data.hasOwnProperty('fixedVolume')) {
                obj['fixedVolume'] = ApiClient.convertToType(data['fixedVolume'], 'number');
            }
            if (data.hasOwnProperty('fixedCurrency')) {
                obj['fixedCurrency'] = ApiClient.convertToType(data['fixedCurrency'], 'string');
            }
            if (data.hasOwnProperty('totalProfit')) {
                obj['totalProfit'] = ApiClient.convertToType(data['totalProfit'], 'number');
            }
            if (data.hasOwnProperty('totalVolume')) {
                obj['totalVolume'] = ApiClient.convertToType(data['totalVolume'], 'number');
            }
        }
        return obj;
    }
}


export namespace SignalSubscription {
    export type FixedCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
}

//modelGenericEnums.mustache


