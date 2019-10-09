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
 * @interface ProgramInvestInfoOld
 */

/**
 *
 * @name ProgramInvestInfoOld#periodEnds
 * @type {Date}
 */
/**
 *
 * @name ProgramInvestInfoOld#availableToInvestBase
 * @type {Number}
 */
/**
 *
 * @name ProgramInvestInfoOld#title
 * @type {String}
 */
/**
 *
 * @name ProgramInvestInfoOld#programCurrencyMinInvestment
 * @type {Number}
 */
/**
 *
 * @name ProgramInvestInfoOld#entryFee
 * @type {Number}
 */
/**
 *
 * @name ProgramInvestInfoOld#gvCommission
 * @type {Number}
 */
/**
 *
 * @name ProgramInvestInfoOld#rate
 * @type {Number}
 */
/**
 *
 * @name ProgramInvestInfoOld#isOwnProgram
 * @type {Boolean}
 */





export default class ProgramInvestInfoOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramInvestInfoOld();

            
            
            

            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
            if (data.hasOwnProperty('availableToInvestBase')) {
                obj['availableToInvestBase'] = ApiClient.convertToType(data['availableToInvestBase'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('programCurrencyMinInvestment')) {
                obj['programCurrencyMinInvestment'] = ApiClient.convertToType(data['programCurrencyMinInvestment'], 'Number');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('gvCommission')) {
                obj['gvCommission'] = ApiClient.convertToType(data['gvCommission'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('isOwnProgram')) {
                obj['isOwnProgram'] = ApiClient.convertToType(data['isOwnProgram'], 'Boolean');
            }
        }
        return obj;
    }

    periodEnds = undefined;
    availableToInvestBase = undefined;
    title = undefined;
    programCurrencyMinInvestment = undefined;
    entryFee = undefined;
    gvCommission = undefined;
    rate = undefined;
    isOwnProgram = undefined;








}






