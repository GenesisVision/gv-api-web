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
* The ProfileFullViewModel model module.
* @module model/ProfileFullViewModel
* @version v1
*/
export default class ProfileFullViewModel {
    /**
    * Constructs a new <code>ProfileFullViewModel</code>.
    * @alias module:model/ProfileFullViewModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProfileFullViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProfileFullViewModel} obj Optional instance to populate.
    * @return {module:model/ProfileFullViewModel} The populated <code>ProfileFullViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfileFullViewModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('middleName')) {
                obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('documentType')) {
                obj['documentType'] = ApiClient.convertToType(data['documentType'], 'String');
            }
            if (data.hasOwnProperty('documentNumber')) {
                obj['documentNumber'] = ApiClient.convertToType(data['documentNumber'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('birthday')) {
                obj['birthday'] = ApiClient.convertToType(data['birthday'], 'Date');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'Boolean');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} firstName
    */
    firstName = undefined;
    /**
    * @member {String} middleName
    */
    middleName = undefined;
    /**
    * @member {String} lastName
    */
    lastName = undefined;
    /**
    * @member {String} documentType
    */
    documentType = undefined;
    /**
    * @member {String} documentNumber
    */
    documentNumber = undefined;
    /**
    * @member {String} country
    */
    country = undefined;
    /**
    * @member {String} city
    */
    city = undefined;
    /**
    * @member {String} address
    */
    address = undefined;
    /**
    * @member {String} phone
    */
    phone = undefined;
    /**
    * @member {Date} birthday
    */
    birthday = undefined;
    /**
    * @member {Boolean} gender
    */
    gender = undefined;
    /**
    * @member {String} avatar
    */
    avatar = undefined;
    /**
    * @member {String} userName
    */
    userName = undefined;








}


