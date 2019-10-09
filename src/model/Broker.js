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
import BrokerAccountType from './BrokerAccountType';
import ProgramTag from './ProgramTag';





/**
 *
 * @interface Broker
 */

/**
 *
 * @name Broker#name
 * @type {String}
 */
/**
 *
 * @name Broker#description
 * @type {String}
 */
/**
 *
 * @name Broker#logo
 * @type {String}
 */
/**
 *
 * @name Broker#terms
 * @type {String}
 */
/**
 *
 * @name Broker#assets
 * @type {String}
 */
/**
 *
 * @name Broker#fee
 * @type {Number}
 */
/**
 *
 * @name Broker#leverageMin
 * @type {Number}
 */
/**
 *
 * @name Broker#leverageMax
 * @type {Number}
 */
/**
 *
 * @name Broker#accountTypes
 * @type {Array<BrokerAccountType>}
 */
/**
 *
 * @name Broker#tags
 * @type {Array<ProgramTag>}
 */





export default class Broker {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Broker();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('leverageMin')) {
                obj['leverageMin'] = ApiClient.convertToType(data['leverageMin'], 'Number');
            }
            if (data.hasOwnProperty('leverageMax')) {
                obj['leverageMax'] = ApiClient.convertToType(data['leverageMax'], 'Number');
            }
            if (data.hasOwnProperty('accountTypes')) {
                obj['accountTypes'] = ApiClient.convertToType(data['accountTypes'], [BrokerAccountType]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
        }
        return obj;
    }

    name = undefined;
    description = undefined;
    logo = undefined;
    terms = undefined;
    assets = undefined;
    fee = undefined;
    leverageMin = undefined;
    leverageMax = undefined;
    accountTypes = undefined;
    tags = undefined;








}






