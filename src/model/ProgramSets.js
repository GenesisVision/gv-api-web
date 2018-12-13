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
import Facet from './Facet';





    /**
     *
     * @interface ProgramSets
     */
    
    /**
     *
     * @name ProgramSets#sets
     * @type {Array<Facet>}
     */
    /**
     *
     * @name ProgramSets#favoritesCount
     * @type {Number}
     */





export default class ProgramSets {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramSets();

            
            
            

            if (data.hasOwnProperty('sets')) {
                obj['sets'] = ApiClient.convertToType(data['sets'], [Facet]);
            }
            if (data.hasOwnProperty('favoritesCount')) {
                obj['favoritesCount'] = ApiClient.convertToType(data['favoritesCount'], 'Number');
            }
        }
        return obj;
    }

    sets = undefined;
    favoritesCount = undefined;








}


