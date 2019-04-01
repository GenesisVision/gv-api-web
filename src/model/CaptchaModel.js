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
import LoginCheckDetails from './LoginCheckDetails';





    /**
     *
     * @interface CaptchaModel
     */
    
    /**
     *
     * @name CaptchaModel#id
     * @type {String}
     */
    /**
     *
     * @name CaptchaModel#route
     * @type {String}
     */
    /**
     *
     * @name CaptchaModel#loginCheckDetails
     * @type {LoginCheckDetails}
     */





export default class CaptchaModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaptchaModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'String');
            }
            if (data.hasOwnProperty('loginCheckDetails')) {
                obj['loginCheckDetails'] = LoginCheckDetails.constructFromObject(data['loginCheckDetails']);
            }
        }
        return obj;
    }

    id = undefined;
    route = undefined;
    loginCheckDetails = undefined;








}


