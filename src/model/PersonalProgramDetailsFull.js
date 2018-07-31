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
* The PersonalProgramDetailsFull model module.
* @module model/PersonalProgramDetailsFull
* @version v1.0
*/
export default class PersonalProgramDetailsFull {
    /**
    * Constructs a new <code>PersonalProgramDetailsFull</code>.
    * @alias module:model/PersonalProgramDetailsFull
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PersonalProgramDetailsFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PersonalProgramDetailsFull} obj Optional instance to populate.
    * @return {module:model/PersonalProgramDetailsFull} The populated <code>PersonalProgramDetailsFull</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalProgramDetailsFull();

            
            
            

            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'Boolean');
            }
            if (data.hasOwnProperty('isInvested')) {
                obj['isInvested'] = ApiClient.convertToType(data['isInvested'], 'Boolean');
            }
            if (data.hasOwnProperty('isOwnProgram')) {
                obj['isOwnProgram'] = ApiClient.convertToType(data['isOwnProgram'], 'Boolean');
            }
            if (data.hasOwnProperty('canCloseProgram')) {
                obj['canCloseProgram'] = ApiClient.convertToType(data['canCloseProgram'], 'Boolean');
            }
            if (data.hasOwnProperty('canClosePeriod')) {
                obj['canClosePeriod'] = ApiClient.convertToType(data['canClosePeriod'], 'Boolean');
            }
            if (data.hasOwnProperty('canInvest')) {
                obj['canInvest'] = ApiClient.convertToType(data['canInvest'], 'Boolean');
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
    * @member {Boolean} isOwnProgram
    */
    isOwnProgram = undefined;
    /**
    * @member {Boolean} canCloseProgram
    */
    canCloseProgram = undefined;
    /**
    * @member {Boolean} canClosePeriod
    */
    canClosePeriod = undefined;
    /**
    * @member {Boolean} canInvest
    */
    canInvest = undefined;








}


