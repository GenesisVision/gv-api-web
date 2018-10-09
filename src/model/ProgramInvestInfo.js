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
* The ProgramInvestInfo model module.
* @module model/ProgramInvestInfo
* @version v1.0
*/
export default class ProgramInvestInfo {
    /**
    * Constructs a new <code>ProgramInvestInfo</code>.
    * @alias module:model/ProgramInvestInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramInvestInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramInvestInfo} obj Optional instance to populate.
    * @return {module:model/ProgramInvestInfo} The populated <code>ProgramInvestInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramInvestInfo();

            
            
            

            if (data.hasOwnProperty('availableToInvest')) {
                obj['availableToInvest'] = ApiClient.convertToType(data['availableToInvest'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('availableInWallet')) {
                obj['availableInWallet'] = ApiClient.convertToType(data['availableInWallet'], 'Number');
            }
            if (data.hasOwnProperty('minInvestmentAmount')) {
                obj['minInvestmentAmount'] = ApiClient.convertToType(data['minInvestmentAmount'], 'Number');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} availableToInvest
    */
    availableToInvest = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {Number} availableInWallet
    */
    availableInWallet = undefined;
    /**
    * @member {Number} minInvestmentAmount
    */
    minInvestmentAmount = undefined;
    /**
    * @member {Number} entryFee
    */
    entryFee = undefined;
    /**
    * @member {Date} periodEnds
    */
    periodEnds = undefined;
    /**
    * @member {Number} rate
    */
    rate = undefined;








}


