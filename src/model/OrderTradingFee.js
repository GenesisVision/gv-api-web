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
 * @interface OrderTradingFee
 */

/**
 *
 * @name OrderTradingFee#amount
 * @type {Number}
 */
/**
 *
 * @name OrderTradingFee#currency
 * @type OrderTradingFeeCurrencyEnum
 */





export default class OrderTradingFee {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderTradingFee();

            
            
            

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    amount = undefined;
    currency = undefined;






    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "ETH": "ETH",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
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
 * @typedef OrderTradingFeeCurrencyEnum 
 * @type {("BTC"|"ETH"|"Undefined"|"GVT"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



