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
import WalletInfo from './WalletInfo';





/**
 *
 * @interface WalletsInfo
 */

/**
 *
 * @name WalletsInfo#wallets
 * @type {Array<WalletInfo>}
 */





export default class WalletsInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletsInfo();

            
            
            

            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletInfo]);
            }
        }
        return obj;
    }

    wallets = undefined;








}






