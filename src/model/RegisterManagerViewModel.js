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
 *
 * @interface RegisterManagerViewModel
 */

/**
 *
 * @name RegisterManagerViewModel#userName
 * @type {String}
 */
/**
 *
 * @name RegisterManagerViewModel#email
 * @type {String}
 */
/**
 *
 * @name RegisterManagerViewModel#password
 * @type {String}
 */
/**
 *
 * @name RegisterManagerViewModel#confirmPassword
 * @type {String}
 */
/**
 *
 * @name RegisterManagerViewModel#refCode
 * @type {String}
 */
/**
 *
 * @name RegisterManagerViewModel#isAuto
 * @type {Boolean}
 */





export default class RegisterManagerViewModel {

    constructor(userName, email, password) {
        

        
        

        this['userName'] = userName;this['email'] = email;this['password'] = password;

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterManagerViewModel();

            
            
            

            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
            }
            if (data.hasOwnProperty('refCode')) {
                obj['refCode'] = ApiClient.convertToType(data['refCode'], 'String');
            }
            if (data.hasOwnProperty('isAuto')) {
                obj['isAuto'] = ApiClient.convertToType(data['isAuto'], 'Boolean');
            }
        }
        return obj;
    }

    userName = undefined;
    email = undefined;
    password = undefined;
    confirmPassword = undefined;
    refCode = undefined;
    isAuto = undefined;








}






