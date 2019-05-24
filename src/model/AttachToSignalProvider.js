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
 * @interface AttachToSignalProvider
 */

/**
 *
 * @name AttachToSignalProvider#mode
 * @type AttachToSignalProviderModeEnum
 */
/**
 *
 * @name AttachToSignalProvider#percent
 * @type {Number}
 */
/**
 *
 * @name AttachToSignalProvider#openTolerancePercent
 * @type {Number}
 */
/**
 *
 * @name AttachToSignalProvider#fixedVolume
 * @type {Number}
 */
/**
 *
 * @name AttachToSignalProvider#fixedCurrency
 * @type AttachToSignalProviderFixedCurrencyEnum
 */
/**
 *
 * @name AttachToSignalProvider#initialDepositCurrency
 * @type AttachToSignalProviderInitialDepositCurrencyEnum
 */
/**
 *
 * @name AttachToSignalProvider#initialDepositAmount
 * @type {Number}
 */





export default class AttachToSignalProvider {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachToSignalProvider();

            
            
            

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
            if (data.hasOwnProperty('initialDepositCurrency')) {
                obj['initialDepositCurrency'] = ApiClient.convertToType(data['initialDepositCurrency'], 'String');
            }
            if (data.hasOwnProperty('initialDepositAmount')) {
                obj['initialDepositAmount'] = ApiClient.convertToType(data['initialDepositAmount'], 'Number');
            }
        }
        return obj;
    }

    mode = undefined;
    percent = undefined;
    openTolerancePercent = undefined;
    fixedVolume = undefined;
    fixedCurrency = undefined;
    initialDepositCurrency = undefined;
    initialDepositAmount = undefined;






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

    static InitialDepositCurrencyEnum = {
    
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
 * @typedef AttachToSignalProviderModeEnum 
 * @type {("ByBalance"|"Percent"|"Fixed")}
 */

/**
 * @typedef AttachToSignalProviderFixedCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef AttachToSignalProviderInitialDepositCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



