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
import OrderModel from './OrderModel';





/**
 *
 * @interface TradesViewModel
 */

/**
 *
 * @name TradesViewModel#showSwaps
 * @type {Boolean}
 */
/**
 *
 * @name TradesViewModel#showTickets
 * @type {Boolean}
 */
/**
 *
 * @name TradesViewModel#trades
 * @type {Array<OrderModel>}
 */
/**
 *
 * @name TradesViewModel#total
 * @type {Number}
 */





export default class TradesViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TradesViewModel();

            
            
            

            if (data.hasOwnProperty('showSwaps')) {
                obj['showSwaps'] = ApiClient.convertToType(data['showSwaps'], 'Boolean');
            }
            if (data.hasOwnProperty('showTickets')) {
                obj['showTickets'] = ApiClient.convertToType(data['showTickets'], 'Boolean');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], [OrderModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    showSwaps = undefined;
    showTickets = undefined;
    trades = undefined;
    total = undefined;








}






