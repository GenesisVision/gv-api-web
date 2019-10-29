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

export class AttachToExternalSignalProviderCommon { 
    public initialDepositCurrency?: AttachToExternalSignalProviderCommon.InitialDepositCurrencyEnum;
    public initialDepositAmount?: number;
    public mode?: SubscriptionMode;
    public percent?: number;
    public openTolerancePercent?: number;
    public fixedVolume?: number;
    public fixedCurrency?: AttachToExternalSignalProviderCommon.FixedCurrencyEnum;

    static constructFromObject(data: {[key: string]: any}, obj: AttachToExternalSignalProviderCommon = new AttachToExternalSignalProviderCommon()): AttachToExternalSignalProviderCommon {
        if (data) {
            if (data.hasOwnProperty('initialDepositCurrency')) {
                obj['initialDepositCurrency'] = ApiClient.convertToType(data['initialDepositCurrency'], 'string');
            }
            if (data.hasOwnProperty('initialDepositAmount')) {
                obj['initialDepositAmount'] = ApiClient.convertToType(data['initialDepositAmount'], 'number');
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
        }
        return obj;
    }
}


export namespace AttachToExternalSignalProviderCommon {
    export type InitialDepositCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    export type FixedCurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
}

