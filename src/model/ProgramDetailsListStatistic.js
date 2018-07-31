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
import AmountWithCurrency from './AmountWithCurrency';





/**
* The ProgramDetailsListStatistic model module.
* @module model/ProgramDetailsListStatistic
* @version v1.0
*/
export default class ProgramDetailsListStatistic {
    /**
    * Constructs a new <code>ProgramDetailsListStatistic</code>.
    * @alias module:model/ProgramDetailsListStatistic
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramDetailsListStatistic</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramDetailsListStatistic} obj Optional instance to populate.
    * @return {module:model/ProgramDetailsListStatistic} The populated <code>ProgramDetailsListStatistic</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramDetailsListStatistic();

            
            
            

            if (data.hasOwnProperty('balanceInBase')) {
                obj['balanceInBase'] = AmountWithCurrency.constructFromObject(data['balanceInBase']);
            }
            if (data.hasOwnProperty('balanceInGVT')) {
                obj['balanceInGVT'] = AmountWithCurrency.constructFromObject(data['balanceInGVT']);
            }
            if (data.hasOwnProperty('balanceInFavorite')) {
                obj['balanceInFavorite'] = AmountWithCurrency.constructFromObject(data['balanceInFavorite']);
            }
            if (data.hasOwnProperty('investorsCount')) {
                obj['investorsCount'] = ApiClient.convertToType(data['investorsCount'], 'Number');
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'Number');
            }
            if (data.hasOwnProperty('drawdownPercent')) {
                obj['drawdownPercent'] = ApiClient.convertToType(data['drawdownPercent'], 'Number');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AmountWithCurrency} balanceInBase
    */
    balanceInBase = undefined;
    /**
    * @member {module:model/AmountWithCurrency} balanceInGVT
    */
    balanceInGVT = undefined;
    /**
    * @member {module:model/AmountWithCurrency} balanceInFavorite
    */
    balanceInFavorite = undefined;
    /**
    * @member {Number} investorsCount
    */
    investorsCount = undefined;
    /**
    * @member {Number} tradesCount
    */
    tradesCount = undefined;
    /**
    * @member {Number} drawdownPercent
    */
    drawdownPercent = undefined;
    /**
    * @member {Number} profitPercent
    */
    profitPercent = undefined;








}


