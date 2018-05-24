/**
 * Core API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import ProfilePublicViewModel from './ProfilePublicViewModel';





/**
* The InvestmentProgramBuyToken model module.
* @module model/InvestmentProgramBuyToken
* @version v1
*/
export default class InvestmentProgramBuyToken {
    /**
    * Constructs a new <code>InvestmentProgramBuyToken</code>.
    * @alias module:model/InvestmentProgramBuyToken
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InvestmentProgramBuyToken</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgramBuyToken} obj Optional instance to populate.
    * @return {module:model/InvestmentProgramBuyToken} The populated <code>InvestmentProgramBuyToken</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentProgramBuyToken();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublicViewModel.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('startOfPeriod')) {
                obj['startOfPeriod'] = ApiClient.convertToType(data['startOfPeriod'], 'Date');
            }
            if (data.hasOwnProperty('endOfPeriod')) {
                obj['endOfPeriod'] = ApiClient.convertToType(data['endOfPeriod'], 'Date');
            }
            if (data.hasOwnProperty('gvtRate')) {
                obj['gvtRate'] = ApiClient.convertToType(data['gvtRate'], 'Number');
            }
            if (data.hasOwnProperty('gvtWalletAmount')) {
                obj['gvtWalletAmount'] = ApiClient.convertToType(data['gvtWalletAmount'], 'Number');
            }
            if (data.hasOwnProperty('periodDuration')) {
                obj['periodDuration'] = ApiClient.convertToType(data['periodDuration'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('availableInvestments')) {
                obj['availableInvestments'] = ApiClient.convertToType(data['availableInvestments'], 'Number');
            }
            if (data.hasOwnProperty('rateCacheId')) {
                obj['rateCacheId'] = ApiClient.convertToType(data['rateCacheId'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:model/ProfilePublicViewModel} manager
    */
    manager = undefined;
    /**
    * @member {Number} level
    */
    level = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {Date} startOfPeriod
    */
    startOfPeriod = undefined;
    /**
    * @member {Date} endOfPeriod
    */
    endOfPeriod = undefined;
    /**
    * @member {Number} gvtRate
    */
    gvtRate = undefined;
    /**
    * @member {Number} gvtWalletAmount
    */
    gvtWalletAmount = undefined;
    /**
    * @member {Number} periodDuration
    */
    periodDuration = undefined;
    /**
    * @member {module:model/InvestmentProgramBuyToken.CurrencyEnum} currency
    */
    currency = undefined;
    /**
    * @member {Number} availableInvestments
    */
    availableInvestments = undefined;
    /**
    * @member {String} rateCacheId
    */
    rateCacheId = undefined;






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



}


