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
import { PersonalCopyTradingAccountInfo } from './personalCopyTradingAccountInfo';

import ApiClient from "../ApiClient";

export class CopyTradingAccountInfo { 
    public 'id'?: string;
    public 'currency'?: Currency;
    public 'logo'?: string;
    public 'title'?: string;
    public 'balance'?: number;
    public 'equity'?: number;
    public 'freeMargin'?: number;
    public 'marginLevel'?: number;
    public 'available'?: number;
    public 'personalInfo'?: PersonalCopyTradingAccountInfo;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: CopyTradingAccountInfo = new CopyTradingAccountInfo()): CopyTradingAccountInfo {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('equity')) {
                obj['equity'] = ApiClient.convertToType(data['equity'], 'number');
            }
            if (data.hasOwnProperty('freeMargin')) {
                obj['freeMargin'] = ApiClient.convertToType(data['freeMargin'], 'number');
            }
            if (data.hasOwnProperty('marginLevel')) {
                obj['marginLevel'] = ApiClient.convertToType(data['marginLevel'], 'number');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'number');
            }
            if (data.hasOwnProperty('personalInfo')) {
                obj['personalInfo'] = PersonalCopyTradingAccountInfo.constructFromObject(data['personalInfo']);
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


