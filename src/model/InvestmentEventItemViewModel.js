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
 * @interface InvestmentEventItemViewModel
 */

/**
 *
 * @name InvestmentEventItemViewModel#title
 * @type {String}
 */
/**
 *
 * @name InvestmentEventItemViewModel#amount
 * @type {Number}
 */
/**
 *
 * @name InvestmentEventItemViewModel#currency
 * @type InvestmentEventItemViewModelCurrencyEnum
 */





export default class InvestmentEventItemViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentEventItemViewModel();

            
            
            

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    title = undefined;
    amount = undefined;
    currency = undefined;






    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "ETH": "ETH",
    
        "USDT": "USDT",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ADA": "ADA",
    
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
 * @typedef InvestmentEventItemViewModelCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



