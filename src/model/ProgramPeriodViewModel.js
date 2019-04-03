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
     * @interface ProgramPeriodViewModel
     */
    
    /**
     *
     * @name ProgramPeriodViewModel#dateFrom
     * @type {Date}
     */
    /**
     *
     * @name ProgramPeriodViewModel#dateTo
     * @type {Date}
     */
    /**
     *
     * @name ProgramPeriodViewModel#status
     * @type {("Planned"|"InProccess"|"Closed")}
     */
    /**
     *
     * @name ProgramPeriodViewModel#number
     * @type {Number}
     */
    /**
     *
     * @name ProgramPeriodViewModel#profit
     * @type {Number}
     */





export default class ProgramPeriodViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramPeriodViewModel();

            
            
            

            if (data.hasOwnProperty('dateFrom')) {
                obj['dateFrom'] = ApiClient.convertToType(data['dateFrom'], 'Date');
            }
            if (data.hasOwnProperty('dateTo')) {
                obj['dateTo'] = ApiClient.convertToType(data['dateTo'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
        }
        return obj;
    }

    dateFrom = undefined;
    dateTo = undefined;
    status = undefined;
    number = undefined;
    profit = undefined;






    static StatusEnum = {
    
        "Planned": "Planned",
    
        "InProccess": "InProccess",
    
        "Closed": "Closed"    
    };



}


