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
import { FeeType } from './feeType';

import ApiClient from "../ApiClient";

export class OrderSignalFee { 
    public 'amount'?: number;
    public 'currency'?: Currency;
    public 'type'?: FeeType;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: OrderSignalFee = new OrderSignalFee()): OrderSignalFee {
        if (data) {
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = FeeType.constructFromObject(data['type']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


