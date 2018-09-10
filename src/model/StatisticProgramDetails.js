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





/**
* The StatisticProgramDetails model module.
* @module model/StatisticProgramDetails
* @version v1.0
*/
export default class StatisticProgramDetails {
    /**
    * Constructs a new <code>StatisticProgramDetails</code>.
    * @alias module:model/StatisticProgramDetails
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>StatisticProgramDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StatisticProgramDetails} obj Optional instance to populate.
    * @return {module:model/StatisticProgramDetails} The populated <code>StatisticProgramDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatisticProgramDetails();

            
            
            

            if (data.hasOwnProperty('pnL')) {
                obj['pnL'] = ApiClient.convertToType(data['pnL'], 'Number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'Number');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], 'Number');
            }
            if (data.hasOwnProperty('successTrades')) {
                obj['successTrades'] = ApiClient.convertToType(data['successTrades'], 'Number');
            }
            if (data.hasOwnProperty('profitFactor')) {
                obj['profitFactor'] = ApiClient.convertToType(data['profitFactor'], 'Number');
            }
            if (data.hasOwnProperty('sharpeRatio')) {
                obj['sharpeRatio'] = ApiClient.convertToType(data['sharpeRatio'], 'Number');
            }
            if (data.hasOwnProperty('maxDrawdown')) {
                obj['maxDrawdown'] = ApiClient.convertToType(data['maxDrawdown'], 'Number');
            }
            if (data.hasOwnProperty('periodStarts')) {
                obj['periodStarts'] = ApiClient.convertToType(data['periodStarts'], 'Date');
            }
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
        }
        return obj;
    }

    /**
    * @member {Number} pnL
    */
    pnL = undefined;
    /**
    * @member {Number} investors
    */
    investors = undefined;
    /**
    * @member {Number} trades
    */
    trades = undefined;
    /**
    * @member {Number} successTrades
    */
    successTrades = undefined;
    /**
    * @member {Number} profitFactor
    */
    profitFactor = undefined;
    /**
    * @member {Number} sharpeRatio
    */
    sharpeRatio = undefined;
    /**
    * @member {Number} maxDrawdown
    */
    maxDrawdown = undefined;
    /**
    * @member {Date} periodStarts
    */
    periodStarts = undefined;
    /**
    * @member {Date} periodEnds
    */
    periodEnds = undefined;








}


