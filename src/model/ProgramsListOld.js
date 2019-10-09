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
import ProgramDetailsOld from './ProgramDetailsOld';





/**
 *
 * @interface ProgramsListOld
 */

/**
 *
 * @name ProgramsListOld#programs
 * @type {Array<ProgramDetailsOld>}
 */
/**
 *
 * @name ProgramsListOld#total
 * @type {Number}
 */





export default class ProgramsListOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramsListOld();

            
            
            

            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ApiClient.convertToType(data['programs'], [ProgramDetailsOld]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    programs = undefined;
    total = undefined;








}






