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
 * @interface ManagerFinancialStatistic
 */

/**
 *
 * @name ManagerFinancialStatistic#successFee
 * @type {Number}
 */
/**
 *
 * @name ManagerFinancialStatistic#entryFee
 * @type {Number}
 */
/**
 *
 * @name ManagerFinancialStatistic#profit
 * @type {Number}
 */
/**
 *
 * @name ManagerFinancialStatistic#balance
 * @type {Number}
 */





export default class ManagerFinancialStatistic {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerFinancialStatistic();

            
            
            

            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'Number');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
        }
        return obj;
    }

    successFee = undefined;
    entryFee = undefined;
    profit = undefined;
    balance = undefined;








}





