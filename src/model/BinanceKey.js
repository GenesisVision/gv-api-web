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
 * @interface BinanceKey
 */

/**
 *
 * @name BinanceKey#id
 * @type {String}
 */
/**
 *
 * @name BinanceKey#appKey
 * @type {String}
 */
/**
 *
 * @name BinanceKey#title
 * @type {String}
 */
/**
 *
 * @name BinanceKey#isValid
 * @type {Boolean}
 */





export default class BinanceKey {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BinanceKey();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('appKey')) {
                obj['appKey'] = ApiClient.convertToType(data['appKey'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('isValid')) {
                obj['isValid'] = ApiClient.convertToType(data['isValid'], 'Boolean');
            }
        }
        return obj;
    }

    id = undefined;
    appKey = undefined;
    title = undefined;
    isValid = undefined;








}






