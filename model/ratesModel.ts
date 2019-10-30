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
import { RatesModelRates } from './ratesModelRates';

import ApiClient from "../ApiClient";

export class RatesModel { 
    public 'rates'?: RatesModelRates;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: RatesModel = new RatesModel()): RatesModel {
        if (data) {
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = RatesModelRates.constructFromObject(data['rates']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


