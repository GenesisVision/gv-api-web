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
* The PersonalFundDetailsList model module.
* @module model/PersonalFundDetailsList
* @version v1.0
*/
export default class PersonalFundDetailsList {
    /**
    * Constructs a new <code>PersonalFundDetailsList</code>.
    * @alias module:model/PersonalFundDetailsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PersonalFundDetailsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PersonalFundDetailsList} obj Optional instance to populate.
    * @return {module:model/PersonalFundDetailsList} The populated <code>PersonalFundDetailsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalFundDetailsList();

            
            
            

            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'Boolean');
            }
            if (data.hasOwnProperty('isInvested')) {
                obj['isInvested'] = ApiClient.convertToType(data['isInvested'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} isFavorite
    */
    isFavorite = undefined;
    /**
    * @member {Boolean} isInvested
    */
    isInvested = undefined;
    /**
    * @member {module:model/PersonalFundDetailsList.StatusEnum} status
    */
    status = undefined;






    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "Active"
         * @const
         */
        "Active": "Active",
    
        /**
         * value: "Investing"
         * @const
         */
        "Investing": "Investing",
    
        /**
         * value: "Withdrawing"
         * @const
         */
        "Withdrawing": "Withdrawing",
    
        /**
         * value: "Ended"
         * @const
         */
        "Ended": "Ended"    
    };



}


