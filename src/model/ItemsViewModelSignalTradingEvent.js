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
import SignalTradingEvent from './SignalTradingEvent';





/**
 *
 * @interface ItemsViewModelSignalTradingEvent
 */

/**
 *
 * @name ItemsViewModelSignalTradingEvent#items
 * @type {Array<SignalTradingEvent>}
 */
/**
 *
 * @name ItemsViewModelSignalTradingEvent#total
 * @type {Number}
 */





export default class ItemsViewModelSignalTradingEvent {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemsViewModelSignalTradingEvent();

            
            
            

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [SignalTradingEvent]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    items = undefined;
    total = undefined;








}






