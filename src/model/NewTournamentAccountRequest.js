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
* The NewTournamentAccountRequest model module.
* @module model/NewTournamentAccountRequest
* @version v1
*/
export default class NewTournamentAccountRequest {
    /**
    * Constructs a new <code>NewTournamentAccountRequest</code>.
    * @alias module:model/NewTournamentAccountRequest
    * @class
    * @param title {String} 
    */

    constructor(title) {
        

        
        

        this['title'] = title;

        
    }

    /**
    * Constructs a <code>NewTournamentAccountRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NewTournamentAccountRequest} obj Optional instance to populate.
    * @return {module:model/NewTournamentAccountRequest} The populated <code>NewTournamentAccountRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewTournamentAccountRequest();

            
            
            

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;








}


