/**
 * Core API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import WalletViewModel from './WalletViewModel';





/**
* The WalletsViewModel model module.
* @module model/WalletsViewModel
* @version v1
*/
export default class WalletsViewModel {
    /**
    * Constructs a new <code>WalletsViewModel</code>.
    * @alias module:model/WalletsViewModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>WalletsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WalletsViewModel} obj Optional instance to populate.
    * @return {module:model/WalletsViewModel} The populated <code>WalletsViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletsViewModel();

            
            
            

            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletViewModel]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/WalletViewModel>} wallets
    */
    wallets = undefined;








}


