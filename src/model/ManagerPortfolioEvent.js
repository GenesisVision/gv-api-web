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
* The ManagerPortfolioEvent model module.
* @module model/ManagerPortfolioEvent
* @version v1.0
*/
export default class ManagerPortfolioEvent {
    /**
    * Constructs a new <code>ManagerPortfolioEvent</code>.
    * @alias module:model/ManagerPortfolioEvent
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ManagerPortfolioEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerPortfolioEvent} obj Optional instance to populate.
    * @return {module:model/ManagerPortfolioEvent} The populated <code>ManagerPortfolioEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerPortfolioEvent();

            
            
            

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
            if (data.hasOwnProperty('feeValue')) {
                obj['feeValue'] = ApiClient.convertToType(data['feeValue'], 'Number');
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
            if (data.hasOwnProperty('programType')) {
                obj['programType'] = ApiClient.convertToType(data['programType'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('periodNumber')) {
                obj['periodNumber'] = ApiClient.convertToType(data['periodNumber'], 'Number');
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
    * @member {Number} feeValue
    */
    feeValue = undefined;
    /**
    * @member {Number} profitPercent
    */
    profitPercent = undefined;
    /**
    * @member {module:model/ManagerPortfolioEvent.CurrencyEnum} currency
    */
    currency = undefined;
    /**
    * @member {module:model/ManagerPortfolioEvent.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {module:model/ManagerPortfolioEvent.ProgramTypeEnum} programType
    */
    programType = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {Number} periodNumber
    */
    periodNumber = undefined;






    /**
    * Allowed values for the <code>currency</code> property.
    * @enum {String}
    * @readonly
    */
    static CurrencyEnum = {
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
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
         * value: "All"
         * @const
         */
        "All": "All",
    
        /**
         * value: "AssetStarted"
         * @const
         */
        "AssetStarted": "AssetStarted",
    
        /**
         * value: "ProgramPeriodStats"
         * @const
         */
        "ProgramPeriodStats": "ProgramPeriodStats",
    
        /**
         * value: "ProgramPeriodEnds"
         * @const
         */
        "ProgramPeriodEnds": "ProgramPeriodEnds",
    
        /**
         * value: "InvestorInvest"
         * @const
         */
        "InvestorInvest": "InvestorInvest",
    
        /**
         * value: "InvestorWithdraw"
         * @const
         */
        "InvestorWithdraw": "InvestorWithdraw",
    
        /**
         * value: "ManagerInvest"
         * @const
         */
        "ManagerInvest": "ManagerInvest",
    
        /**
         * value: "ManagerWithdraw"
         * @const
         */
        "ManagerWithdraw": "ManagerWithdraw",
    
        /**
         * value: "AssetFinished"
         * @const
         */
        "AssetFinished": "AssetFinished"    
    };

    /**
    * Allowed values for the <code>programType</code> property.
    * @enum {String}
    * @readonly
    */
    static ProgramTypeEnum = {
    
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


