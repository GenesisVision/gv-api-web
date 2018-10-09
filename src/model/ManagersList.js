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
import ManagerProfile from './ManagerProfile';





/**
* The ManagersList model module.
* @module model/ManagersList
* @version v1.0
*/
export default class ManagersList {
    /**
    * Constructs a new <code>ManagersList</code>.
    * @alias module:model/ManagersList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ManagersList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagersList} obj Optional instance to populate.
    * @return {module:model/ManagersList} The populated <code>ManagersList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagersList();

            
            
            

            if (data.hasOwnProperty('managers')) {
                obj['managers'] = ApiClient.convertToType(data['managers'], [ManagerProfile]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ManagerProfile>} managers
    */
    managers = undefined;
    /**
    * @member {Number} total
    */
    total = undefined;








}


