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
 * @interface ManagerSimpleProgram
 */

/**
 *
 * @name ManagerSimpleProgram#level
 * @type {Number}
 */
/**
 *
 * @name ManagerSimpleProgram#levelProgress
 * @type {Number}
 */
/**
 *
 * @name ManagerSimpleProgram#id
 * @type {String}
 */
/**
 *
 * @name ManagerSimpleProgram#title
 * @type {String}
 */
/**
 *
 * @name ManagerSimpleProgram#color
 * @type {String}
 */
/**
 *
 * @name ManagerSimpleProgram#logo
 * @type {String}
 */
/**
 *
 * @name ManagerSimpleProgram#url
 * @type {String}
 */





export default class ManagerSimpleProgram {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerSimpleProgram();

            
            
            

            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('levelProgress')) {
                obj['levelProgress'] = ApiClient.convertToType(data['levelProgress'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    level = undefined;
    levelProgress = undefined;
    id = undefined;
    title = undefined;
    color = undefined;
    logo = undefined;
    url = undefined;








}





