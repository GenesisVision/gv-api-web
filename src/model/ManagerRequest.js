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





/**
* The ManagerRequest model module.
* @module model/ManagerRequest
* @version v1
*/
export default class ManagerRequest {
    /**
    * Constructs a new <code>ManagerRequest</code>.
    * @alias module:model/ManagerRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ManagerRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerRequest} obj Optional instance to populate.
    * @return {module:model/ManagerRequest} The populated <code>ManagerRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerRequest();

            
            
            

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'Number');
            }
            if (data.hasOwnProperty('leverage')) {
                obj['leverage'] = ApiClient.convertToType(data['leverage'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} userId
    */
    userId = undefined;
    /**
    * @member {String} requestId
    */
    requestId = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {module:model/ManagerRequest.CurrencyEnum} currency
    */
    currency = undefined;
    /**
    * @member {String} password
    */
    password = undefined;
    /**
    * @member {Number} depositAmount
    */
    depositAmount = undefined;
    /**
    * @member {Number} leverage
    */
    leverage = undefined;






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


