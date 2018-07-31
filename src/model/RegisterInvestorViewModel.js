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
* The RegisterInvestorViewModel model module.
* @module model/RegisterInvestorViewModel
* @version v1.0
*/
export default class RegisterInvestorViewModel {
    /**
    * Constructs a new <code>RegisterInvestorViewModel</code>.
    * @alias module:model/RegisterInvestorViewModel
    * @class
    * @param email {String} 
    * @param password {String} 
    */

    constructor(email, password) {
        

        
        

        this['email'] = email;this['password'] = password;

        
    }

    /**
    * Constructs a <code>RegisterInvestorViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RegisterInvestorViewModel} obj Optional instance to populate.
    * @return {module:model/RegisterInvestorViewModel} The populated <code>RegisterInvestorViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterInvestorViewModel();

            
            
            

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} password
    */
    password = undefined;
    /**
    * @member {String} confirmPassword
    */
    confirmPassword = undefined;








}


