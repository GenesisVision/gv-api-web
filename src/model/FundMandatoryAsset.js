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
import PlatformAsset from './PlatformAsset';





/**
 *
 * @interface FundMandatoryAsset
 */

/**
 *
 * @name FundMandatoryAsset#asset
 * @type {PlatformAsset}
 */
/**
 *
 * @name FundMandatoryAsset#mandatoryPart
 * @type {Number}
 */





export default class FundMandatoryAsset {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundMandatoryAsset();

            
            
            

            if (data.hasOwnProperty('asset')) {
                obj['asset'] = PlatformAsset.constructFromObject(data['asset']);
            }
            if (data.hasOwnProperty('mandatoryPart')) {
                obj['mandatoryPart'] = ApiClient.convertToType(data['mandatoryPart'], 'Number');
            }
        }
        return obj;
    }

    asset = undefined;
    mandatoryPart = undefined;








}





