/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
 *
 * @interface CreateWithdrawalRequestModel
 */

/**
 *
 * @name CreateWithdrawalRequestModel#amount
 * @type {Number}
 */
/**
 *
 * @name CreateWithdrawalRequestModel#currency
 * @type CreateWithdrawalRequestModelCurrencyEnum
 */
/**
 *
 * @name CreateWithdrawalRequestModel#address
 * @type {String}
 */
/**
 *
 * @name CreateWithdrawalRequestModel#twoFactorCode
 * @type {String}
 */





export default class CreateWithdrawalRequestModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWithdrawalRequestModel();

            
            
            

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'String');
            }
        }
        return obj;
    }

    amount = undefined;
    currency = undefined;
    address = undefined;
    twoFactorCode = undefined;






    static CurrencyEnum = {
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };



}




/**
 * @typedef CreateWithdrawalRequestModelCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



