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
import EventFilters from './EventFilters';
import FundFilters from './FundFilters';
import MultiWalletFilters from './MultiWalletFilters';
import ProgramFilters from './ProgramFilters';





/**
 *
 * @interface Enums
 */

/**
 *
 * @name Enums#multiWallet
 * @type {MultiWalletFilters}
 */
/**
 *
 * @name Enums#program
 * @type {ProgramFilters}
 */
/**
 *
 * @name Enums#fund
 * @type {FundFilters}
 */
/**
 *
 * @name Enums#event
 * @type {EventFilters}
 */
/**
 *
 * @name Enums#assetTypes
 * @type {Array<String>}
 */





export default class Enums {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Enums();

            
            
            

            if (data.hasOwnProperty('multiWallet')) {
                obj['multiWallet'] = MultiWalletFilters.constructFromObject(data['multiWallet']);
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = ProgramFilters.constructFromObject(data['program']);
            }
            if (data.hasOwnProperty('fund')) {
                obj['fund'] = FundFilters.constructFromObject(data['fund']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = EventFilters.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('assetTypes')) {
                obj['assetTypes'] = ApiClient.convertToType(data['assetTypes'], ['String']);
            }
        }
        return obj;
    }

    multiWallet = undefined;
    program = undefined;
    fund = undefined;
    event = undefined;
    assetTypes = undefined;








}





