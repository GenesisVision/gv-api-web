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
* The DashboardPortfolioEvent model module.
* @module model/DashboardPortfolioEvent
* @version v1.0
*/
export default class DashboardPortfolioEvent {
    /**
    * Constructs a new <code>DashboardPortfolioEvent</code>.
    * @alias module:model/DashboardPortfolioEvent
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>DashboardPortfolioEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DashboardPortfolioEvent} obj Optional instance to populate.
    * @return {module:model/DashboardPortfolioEvent} The populated <code>DashboardPortfolioEvent</code> instance.
    */
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

    /**
    * @member {String} assetId
    */
    assetId = undefined;
    /**
    * @member {Date} date
    */
    date = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {Number} value
    */
    value = undefined;
    /**
    * @member {module:model/DashboardPortfolioEvent.CurrencyEnum} currency
    */
    currency = undefined;
    /**
    * @member {module:model/DashboardPortfolioEvent.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} color
    */
    color = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:model/DashboardPortfolioEvent.AssetTypeEnum} assetType
    */
    assetType = undefined;






    /**
    * Allowed values for the <code>currency</code> property.
    * @enum {String}
    * @readonly
    */
    static CurrencyEnum = {
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "ETH"
         * @const
         */
        "ETH": "ETH",
    
        /**
         * value: "BTC"
         * @const
         */
        "BTC": "BTC",
    
        /**
         * value: "ADA"
         * @const
         */
        "ADA": "ADA",
    
        /**
         * value: "USDT"
         * @const
         */
        "USDT": "USDT",
    
        /**
         * value: "XRP"
         * @const
         */
        "XRP": "XRP",
    
        /**
         * value: "BCH"
         * @const
         */
        "BCH": "BCH",
    
        /**
         * value: "LTC"
         * @const
         */
        "LTC": "LTC",
    
        /**
         * value: "DOGE"
         * @const
         */
        "DOGE": "DOGE",
    
        /**
         * value: "USD"
         * @const
         */
        "USD": "USD",
    
        /**
         * value: "EUR"
         * @const
         */
        "EUR": "EUR"    
    };

    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "Loss"
         * @const
         */
        "Loss": "Loss",
    
        /**
         * value: "Profit"
         * @const
         */
        "Profit": "Profit",
    
        /**
         * value: "Invest"
         * @const
         */
        "Invest": "Invest",
    
        /**
         * value: "Withdraw"
         * @const
         */
        "Withdraw": "Withdraw",
    
        /**
         * value: "All"
         * @const
         */
        "All": "All",
    
        /**
         * value: "Reinvest"
         * @const
         */
        "Reinvest": "Reinvest",
    
        /**
         * value: "Cancelled"
         * @const
         */
        "Cancelled": "Cancelled",
    
        /**
         * value: "Ended"
         * @const
         */
        "Ended": "Ended"    
    };

    /**
    * Allowed values for the <code>assetType</code> property.
    * @enum {String}
    * @readonly
    */
    static AssetTypeEnum = {
    
        /**
         * value: "Program"
         * @const
         */
        "Program": "Program",
    
        /**
         * value: "Fund"
         * @const
         */
        "Fund": "Fund"    
    };



}


