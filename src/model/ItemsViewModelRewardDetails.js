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
import RewardDetails from './RewardDetails';





/**
 *
 * @interface ItemsViewModelRewardDetails
 */

/**
 *
 * @name ItemsViewModelRewardDetails#items
 * @type {Array<RewardDetails>}
 */
/**
 *
 * @name ItemsViewModelRewardDetails#total
 * @type {Number}
 */





export default class ItemsViewModelRewardDetails {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemsViewModelRewardDetails();

            
            
            

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [RewardDetails]);
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






