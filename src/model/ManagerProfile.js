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
 * @interface ManagerProfile
 */

/**
 *
 * @name ManagerProfile#id
 * @type {String}
 */
/**
 *
 * @name ManagerProfile#username
 * @type {String}
 */
/**
 *
 * @name ManagerProfile#about
 * @type {String}
 */
/**
 *
 * @name ManagerProfile#avatar
 * @type {String}
 */
/**
 *
 * @name ManagerProfile#regDate
 * @type {Date}
 */
/**
 *
 * @name ManagerProfile#assets
 * @type {Array<String>}
 */
/**
 *
 * @name ManagerProfile#url
 * @type {String}
 */





export default class ManagerProfile {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerProfile();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'String');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('regDate')) {
                obj['regDate'] = ApiClient.convertToType(data['regDate'], 'Date');
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], ['String']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    id = undefined;
    username = undefined;
    about = undefined;
    avatar = undefined;
    regDate = undefined;
    assets = undefined;
    url = undefined;








}






