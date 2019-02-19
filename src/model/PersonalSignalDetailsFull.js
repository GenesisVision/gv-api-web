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
     * @interface PersonalSignalDetailsFull
     */
    
    /**
     *
     * @name PersonalSignalDetailsFull#subscribeDate
     * @type {Date}
     */
    /**
     *
     * @name PersonalSignalDetailsFull#investorProfit
     * @type {Number}
     */
    /**
     *
     * @name PersonalSignalDetailsFull#investorTrades
     * @type {Number}
     */





export default class PersonalSignalDetailsFull {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalSignalDetailsFull();

            
            
            

            if (data.hasOwnProperty('subscribeDate')) {
                obj['subscribeDate'] = ApiClient.convertToType(data['subscribeDate'], 'Date');
            }
            if (data.hasOwnProperty('investorProfit')) {
                obj['investorProfit'] = ApiClient.convertToType(data['investorProfit'], 'Number');
            }
            if (data.hasOwnProperty('investorTrades')) {
                obj['investorTrades'] = ApiClient.convertToType(data['investorTrades'], 'Number');
            }
        }
        return obj;
    }

    subscribeDate = undefined;
    investorProfit = undefined;
    investorTrades = undefined;








}


