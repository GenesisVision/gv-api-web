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
     * @name DashboardPortfolioEvent#value
     * @type {Number}
     */
    /**
     *
     * @name DashboardPortfolioEvent#currency
     * @type {("BTC"|"Undefined"|"GVT"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name DashboardPortfolioEvent#type
     * @type {("All"|"Invest"|"Withdraw"|"Profit"|"Loss"|"Reinvest"|"Cancelled"|"Ended")}
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
     * @type {("Program"|"Fund")}
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
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
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
    value = undefined;
    currency = undefined;
    type = undefined;
    logo = undefined;
    color = undefined;
    description = undefined;
    assetType = undefined;






    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
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
    
        "All": "All",
    
        "Invest": "Invest",
    
        "Withdraw": "Withdraw",
    
        "Profit": "Profit",
    
        "Loss": "Loss",
    
        "Reinvest": "Reinvest",
    
        "Cancelled": "Cancelled",
    
        "Ended": "Ended"    
    };

    static AssetTypeEnum = {
    
        "Program": "Program",
    
        "Fund": "Fund"    
    };



}


