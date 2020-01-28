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
import { SubscriptionMode } from './SubscriptionMode';

import ApiClient from "../ApiClient";

export class AttachToExternalSignalProviderCommon { 
    public 'initialDepositCurrency': InitialDepositCurrencyEnum;
    public 'initialDepositAmount': number;
    public 'mode': SubscriptionMode;
    public 'percent': number;
    public 'openTolerancePercent': number;
    public 'fixedVolume': number;
    public 'fixedCurrency': FixedCurrencyEnum;

    constructor(data: {[key: string]: any}) { 
        this['initialDepositCurrency'] = data['initialDepositCurrency'];
        this['initialDepositAmount'] = data['initialDepositAmount'];
        this['mode'] = data['mode'];
        this['percent'] = data['percent'];
        this['openTolerancePercent'] = data['openTolerancePercent'];
        this['fixedVolume'] = data['fixedVolume'];
        this['fixedCurrency'] = data['fixedCurrency'];
    }

    static constructFromObject(data: {[key: string]: any}): AttachToExternalSignalProviderCommon | undefined {
        if (data) {
            return new AttachToExternalSignalProviderCommon({ 
                'initialDepositCurrency': ApiClient.convertToType(data['initialDepositCurrency'], 'string'),
                'initialDepositAmount': ApiClient.convertToType(data['initialDepositAmount'], 'number'),
                'mode': SubscriptionMode.constructFromObject(data['mode']),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
                'openTolerancePercent': ApiClient.convertToType(data['openTolerancePercent'], 'number'),
                'fixedVolume': ApiClient.convertToType(data['fixedVolume'], 'number'),
                'fixedCurrency': ApiClient.convertToType(data['fixedCurrency'], 'string'),
            });
        }
    }
}


type InitialDepositCurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
type FixedCurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';



