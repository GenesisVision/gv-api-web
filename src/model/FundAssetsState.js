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
import FundAssetPartWithIcon from './FundAssetPartWithIcon';





/**
 *
 * @interface FundAssetsState
 */

/**
 *
 * @name FundAssetsState#dateFrom
 * @type {Date}
 */
/**
 *
 * @name FundAssetsState#assets
 * @type {Array<FundAssetPartWithIcon>}
 */
/**
 *
 * @name FundAssetsState#otherPercent
 * @type {Number}
 */





export default class FundAssetsState {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundAssetsState();

            
            
            

            if (data.hasOwnProperty('dateFrom')) {
                obj['dateFrom'] = ApiClient.convertToType(data['dateFrom'], 'Date');
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetPartWithIcon]);
            }
            if (data.hasOwnProperty('otherPercent')) {
                obj['otherPercent'] = ApiClient.convertToType(data['otherPercent'], 'Number');
            }
        }
        return obj;
    }

    dateFrom = undefined;
    assets = undefined;
    otherPercent = undefined;








}






