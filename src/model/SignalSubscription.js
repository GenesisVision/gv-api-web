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
 * @interface SignalSubscription
 */

/**
 *
 * @name SignalSubscription#hasSignalAccount
 * @type {Boolean}
 */
/**
 *
 * @name SignalSubscription#hasActiveSubscription
 * @type {Boolean}
 */
/**
 *
 * @name SignalSubscription#mode
 * @type SignalSubscriptionModeEnum
 */
/**
 *
 * @name SignalSubscription#percent
 * @type {Number}
 */
/**
 *
 * @name SignalSubscription#openTolerancePercent
 * @type {Number}
 */
/**
 *
 * @name SignalSubscription#fixedVolume
 * @type {Number}
 */
/**
 *
 * @name SignalSubscription#fixedCurrency
 * @type SignalSubscriptionFixedCurrencyEnum
 */





export default class SignalSubscription {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignalSubscription();

            
            
            

            if (data.hasOwnProperty('hasSignalAccount')) {
                obj['hasSignalAccount'] = ApiClient.convertToType(data['hasSignalAccount'], 'Boolean');
            }
            if (data.hasOwnProperty('hasActiveSubscription')) {
                obj['hasActiveSubscription'] = ApiClient.convertToType(data['hasActiveSubscription'], 'Boolean');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
            }
            if (data.hasOwnProperty('openTolerancePercent')) {
                obj['openTolerancePercent'] = ApiClient.convertToType(data['openTolerancePercent'], 'Number');
            }
            if (data.hasOwnProperty('fixedVolume')) {
                obj['fixedVolume'] = ApiClient.convertToType(data['fixedVolume'], 'Number');
            }
            if (data.hasOwnProperty('fixedCurrency')) {
                obj['fixedCurrency'] = ApiClient.convertToType(data['fixedCurrency'], 'String');
            }
        }
        return obj;
    }

    hasSignalAccount = undefined;
    hasActiveSubscription = undefined;
    mode = undefined;
    percent = undefined;
    openTolerancePercent = undefined;
    fixedVolume = undefined;
    fixedCurrency = undefined;






    static ModeEnum = {
    
        "ByBalance": "ByBalance",
    
        "Percent": "Percent",
    
        "Fixed": "Fixed"    
    };

    static FixedCurrencyEnum = {
    
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
 * @typedef SignalSubscriptionModeEnum 
 * @type {("ByBalance"|"Percent"|"Fixed")}
 */

/**
 * @typedef SignalSubscriptionFixedCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



