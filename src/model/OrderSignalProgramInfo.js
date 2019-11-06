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
import OrderProgramData from './OrderProgramData';
import OrderSignalFee from './OrderSignalFee';
import ProfilePublic from './ProfilePublic';





/**
 *
 * @interface OrderSignalProgramInfo
 */

/**
 *
 * @name OrderSignalProgramInfo#manager
 * @type {ProfilePublic}
 */
/**
 *
 * @name OrderSignalProgramInfo#program
 * @type {OrderProgramData}
 */
/**
 *
 * @name OrderSignalProgramInfo#programId
 * @type {String}
 */
/**
 *
 * @name OrderSignalProgramInfo#volume
 * @type {Number}
 */
/**
 *
 * @name OrderSignalProgramInfo#priceOpenAvg
 * @type {Number}
 */
/**
 *
 * @name OrderSignalProgramInfo#profit
 * @type {Number}
 */
/**
 *
 * @name OrderSignalProgramInfo#firstOrderDate
 * @type {Date}
 */
/**
 *
 * @name OrderSignalProgramInfo#fees
 * @type {Array<OrderSignalFee>}
 */





export default class OrderSignalProgramInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSignalProgramInfo();

            
            
            

            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = OrderProgramData.constructFromObject(data['program']);
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('priceOpenAvg')) {
                obj['priceOpenAvg'] = ApiClient.convertToType(data['priceOpenAvg'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('firstOrderDate')) {
                obj['firstOrderDate'] = ApiClient.convertToType(data['firstOrderDate'], 'Date');
            }
            if (data.hasOwnProperty('fees')) {
                obj['fees'] = ApiClient.convertToType(data['fees'], [OrderSignalFee]);
            }
        }
        return obj;
    }

    manager = undefined;
    program = undefined;
    programId = undefined;
    volume = undefined;
    priceOpenAvg = undefined;
    profit = undefined;
    firstOrderDate = undefined;
    fees = undefined;








}





