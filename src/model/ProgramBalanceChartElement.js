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
 * @interface ProgramBalanceChartElement
 */

/**
 *
 * @name ProgramBalanceChartElement#date
 * @type {Date}
 */
/**
 *
 * @name ProgramBalanceChartElement#managerFunds
 * @type {Number}
 */
/**
 *
 * @name ProgramBalanceChartElement#investorsFunds
 * @type {Number}
 */





export default class ProgramBalanceChartElement {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramBalanceChartElement();

            
            
            

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('managerFunds')) {
                obj['managerFunds'] = ApiClient.convertToType(data['managerFunds'], 'Number');
            }
            if (data.hasOwnProperty('investorsFunds')) {
                obj['investorsFunds'] = ApiClient.convertToType(data['investorsFunds'], 'Number');
            }
        }
        return obj;
    }

    date = undefined;
    managerFunds = undefined;
    investorsFunds = undefined;








}






