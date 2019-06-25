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
 * @interface DashboardPortfolioEvent
 */

/**
 *
 * @name DashboardPortfolioEvent#assetId
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#date
 * @type {Date}
 */
/**
 *
 * @name DashboardPortfolioEvent#title
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#url
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#value
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#valueTotal
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#feeSuccessManager
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#feeSuccessManagerCurrency
 * @type DashboardPortfolioEventFeeSuccessManagerCurrencyEnum
 */
/**
 *
 * @name DashboardPortfolioEvent#feeSuccessPlatform
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#feeSuccessPlatformCurrency
 * @type DashboardPortfolioEventFeeSuccessPlatformCurrencyEnum
 */
/**
 *
 * @name DashboardPortfolioEvent#profitPercent
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#currency
 * @type DashboardPortfolioEventCurrencyEnum
 */
/**
 *
 * @name DashboardPortfolioEvent#type
 * @type DashboardPortfolioEventTypeEnum
 */
/**
 *
 * @name DashboardPortfolioEvent#logo
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#color
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#description
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#assetType
 * @type DashboardPortfolioEventAssetTypeEnum
 */





export default class DashboardPortfolioEvent {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardPortfolioEvent();

            
            
            

            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('valueTotal')) {
                obj['valueTotal'] = ApiClient.convertToType(data['valueTotal'], 'Number');
            }
            if (data.hasOwnProperty('feeSuccessManager')) {
                obj['feeSuccessManager'] = ApiClient.convertToType(data['feeSuccessManager'], 'Number');
            }
            if (data.hasOwnProperty('feeSuccessManagerCurrency')) {
                obj['feeSuccessManagerCurrency'] = ApiClient.convertToType(data['feeSuccessManagerCurrency'], 'String');
            }
            if (data.hasOwnProperty('feeSuccessPlatform')) {
                obj['feeSuccessPlatform'] = ApiClient.convertToType(data['feeSuccessPlatform'], 'Number');
            }
            if (data.hasOwnProperty('feeSuccessPlatformCurrency')) {
                obj['feeSuccessPlatformCurrency'] = ApiClient.convertToType(data['feeSuccessPlatformCurrency'], 'String');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
        }
        return obj;
    }

    assetId = undefined;
    date = undefined;
    title = undefined;
    url = undefined;
    value = undefined;
    valueTotal = undefined;
    feeSuccessManager = undefined;
    feeSuccessManagerCurrency = undefined;
    feeSuccessPlatform = undefined;
    feeSuccessPlatformCurrency = undefined;
    profitPercent = undefined;
    currency = undefined;
    type = undefined;
    logo = undefined;
    color = undefined;
    description = undefined;
    assetType = undefined;






    static FeeSuccessManagerCurrencyEnum = {
    
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

    static FeeSuccessPlatformCurrencyEnum = {
    
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

    static TypeEnum = {
    
        "WithdrawByStopOut": "WithdrawByStopOut",
    
        "Loss": "Loss",
    
        "Reinvest": "Reinvest",
    
        "Profit": "Profit",
    
        "Invest": "Invest",
    
        "All": "All",
    
        "Withdraw": "Withdraw",
    
        "Canceled": "Canceled",
    
        "Ended": "Ended"    
    };

    static AssetTypeEnum = {
    
        "Program": "Program",
    
        "Fund": "Fund"    
    };



}




/**
 * @typedef DashboardPortfolioEventFeeSuccessManagerCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef DashboardPortfolioEventFeeSuccessPlatformCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef DashboardPortfolioEventCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef DashboardPortfolioEventTypeEnum 
 * @type {("WithdrawByStopOut"|"Loss"|"Reinvest"|"Profit"|"Invest"|"All"|"Withdraw"|"Canceled"|"Ended")}
 */

/**
 * @typedef DashboardPortfolioEventAssetTypeEnum 
 * @type {("Program"|"Fund")}
 */



