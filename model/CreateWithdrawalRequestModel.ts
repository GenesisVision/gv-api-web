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

export class CreateWithdrawalRequestModel { 
    public 'amount': number;
    public 'currency': Currency;
    public 'address': string;
    public 'twoFactorCode': string;

    constructor(data: {[key: string]: any}) { 
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['address'] = data['address'];
        this['twoFactorCode'] = data['twoFactorCode'];
    }

    static constructFromObject(data: {[key: string]: any}): CreateWithdrawalRequestModel | undefined {
        if (data) {
            return new CreateWithdrawalRequestModel({ 
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': Currency.constructFromObject(data['currency']),
                'address': ApiClient.convertToType(data['address'], 'string'),
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
            });
        }
    }
}


