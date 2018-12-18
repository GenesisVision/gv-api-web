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
* The WalletWithdrawalInfo model module.
* @module model/WalletWithdrawalInfo
* @version v1.0
*/
export default class WalletWithdrawalInfo {
    /**
    * Constructs a new <code>WalletWithdrawalInfo</code>.
    * @alias module:model/WalletWithdrawalInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>WalletWithdrawalInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WalletWithdrawalInfo} obj Optional instance to populate.
    * @return {module:model/WalletWithdrawalInfo} The populated <code>WalletWithdrawalInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletWithdrawalInfo();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
            }
            if (data.hasOwnProperty('rateToGvt')) {
                obj['rateToGvt'] = ApiClient.convertToType(data['rateToGvt'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/WalletWithdrawalInfo.CurrencyEnum} currency
    */
    currency = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {Number} commission
    */
    commission = undefined;
    /**
    * @member {Number} rateToGvt
    */
    rateToGvt = undefined;






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
         * value: "BNB"
         * @const
         */
        "BNB": "BNB",
    
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


