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
     * @interface CopyTradingAccountInfo
     */
    
    /**
     *
     * @name CopyTradingAccountInfo#currency
     * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name CopyTradingAccountInfo#currencyLogo
     * @type {String}
     */
    /**
     *
     * @name CopyTradingAccountInfo#balance
     * @type {Number}
     */
    /**
     *
     * @name CopyTradingAccountInfo#equity
     * @type {Number}
     */
    /**
     *
     * @name CopyTradingAccountInfo#freeMargin
     * @type {Number}
     */
    /**
     *
     * @name CopyTradingAccountInfo#marginLevel
     * @type {Number}
     */





export default class CopyTradingAccountInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyTradingAccountInfo();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('currencyLogo')) {
                obj['currencyLogo'] = ApiClient.convertToType(data['currencyLogo'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('equity')) {
                obj['equity'] = ApiClient.convertToType(data['equity'], 'Number');
            }
            if (data.hasOwnProperty('freeMargin')) {
                obj['freeMargin'] = ApiClient.convertToType(data['freeMargin'], 'Number');
            }
            if (data.hasOwnProperty('marginLevel')) {
                obj['marginLevel'] = ApiClient.convertToType(data['marginLevel'], 'Number');
            }
        }
        return obj;
    }

    currency = undefined;
    currencyLogo = undefined;
    balance = undefined;
    equity = undefined;
    freeMargin = undefined;
    marginLevel = undefined;






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


