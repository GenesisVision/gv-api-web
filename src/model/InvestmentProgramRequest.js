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
* The InvestmentProgramRequest model module.
* @module model/InvestmentProgramRequest
* @version v1.0
*/
export default class InvestmentProgramRequest {
    /**
    * Constructs a new <code>InvestmentProgramRequest</code>.
    * @alias module:model/InvestmentProgramRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InvestmentProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgramRequest} obj Optional instance to populate.
    * @return {module:model/InvestmentProgramRequest} The populated <code>InvestmentProgramRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentProgramRequest();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('canCancelRequest')) {
                obj['canCancelRequest'] = ApiClient.convertToType(data['canCancelRequest'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {Date} date
    */
    date = undefined;
    /**
    * @member {Number} amount
    */
    amount = undefined;
    /**
    * @member {module:model/InvestmentProgramRequest.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {module:model/InvestmentProgramRequest.StatusEnum} status
    */
    status = undefined;
    /**
    * @member {Boolean} canCancelRequest
    */
    canCancelRequest = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "Invest"
         * @const
         */
        "Invest": "Invest",
    
        /**
         * value: "Withdrawal"
         * @const
         */
        "Withdrawal": "Withdrawal"    
    };

    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "New"
         * @const
         */
        "New": "New",
    
        /**
         * value: "Executed"
         * @const
         */
        "Executed": "Executed",
    
        /**
         * value: "Cancelled"
         * @const
         */
        "Cancelled": "Cancelled"    
    };



}


