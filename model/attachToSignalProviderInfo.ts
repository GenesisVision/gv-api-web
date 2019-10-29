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
import { Currency } from './currency';

import ApiClient from "../ApiClient";

export class AttachToSignalProviderInfo { 
    public 'hasSignalAccount'?: boolean;
    public 'hasActiveSubscription'?: boolean;
    public 'volumeFee'?: number;
    public 'minDeposit'?: number;
    public 'minDepositCurrency'?: Currency;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: AttachToSignalProviderInfo = new AttachToSignalProviderInfo()): AttachToSignalProviderInfo {
        if (data) {
            if (data.hasOwnProperty('hasSignalAccount')) {
                obj['hasSignalAccount'] = ApiClient.convertToType(data['hasSignalAccount'], 'boolean');
            }
            if (data.hasOwnProperty('hasActiveSubscription')) {
                obj['hasActiveSubscription'] = ApiClient.convertToType(data['hasActiveSubscription'], 'boolean');
            }
            if (data.hasOwnProperty('volumeFee')) {
                obj['volumeFee'] = ApiClient.convertToType(data['volumeFee'], 'number');
            }
            if (data.hasOwnProperty('minDeposit')) {
                obj['minDeposit'] = ApiClient.convertToType(data['minDeposit'], 'number');
            }
            if (data.hasOwnProperty('minDepositCurrency')) {
                obj['minDepositCurrency'] = Currency.constructFromObject(data['minDepositCurrency']);
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


