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
import ChartSimple from './ChartSimple';





/**
* The FundProfitChart model module.
* @module model/FundProfitChart
* @version v1.0
*/
export default class FundProfitChart {
    /**
    * Constructs a new <code>FundProfitChart</code>.
    * @alias module:model/FundProfitChart
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>FundProfitChart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FundProfitChart} obj Optional instance to populate.
    * @return {module:model/FundProfitChart} The populated <code>FundProfitChart</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundProfitChart();

            
            
            

            if (data.hasOwnProperty('totalUsdProfit')) {
                obj['totalUsdProfit'] = ApiClient.convertToType(data['totalUsdProfit'], 'Number');
            }
            if (data.hasOwnProperty('timeframeUsdProfit')) {
                obj['timeframeUsdProfit'] = ApiClient.convertToType(data['timeframeUsdProfit'], 'Number');
            }
            if (data.hasOwnProperty('rebalances')) {
                obj['rebalances'] = ApiClient.convertToType(data['rebalances'], 'Number');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'Number');
            }
            if (data.hasOwnProperty('equityChart')) {
                obj['equityChart'] = ApiClient.convertToType(data['equityChart'], [ChartSimple]);
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'Number');
            }
            if (data.hasOwnProperty('profitChangePercent')) {
                obj['profitChangePercent'] = ApiClient.convertToType(data['profitChangePercent'], 'Number');
            }
            if (data.hasOwnProperty('sharpeRatio')) {
                obj['sharpeRatio'] = ApiClient.convertToType(data['sharpeRatio'], 'Number');
            }
            if (data.hasOwnProperty('sortinoRatio')) {
                obj['sortinoRatio'] = ApiClient.convertToType(data['sortinoRatio'], 'Number');
            }
            if (data.hasOwnProperty('calmarRatio')) {
                obj['calmarRatio'] = ApiClient.convertToType(data['calmarRatio'], 'Number');
            }
            if (data.hasOwnProperty('maxDrawdown')) {
                obj['maxDrawdown'] = ApiClient.convertToType(data['maxDrawdown'], 'Number');
            }
            if (data.hasOwnProperty('totalGvtProfit')) {
                obj['totalGvtProfit'] = ApiClient.convertToType(data['totalGvtProfit'], 'Number');
            }
            if (data.hasOwnProperty('timeframeGvtProfit')) {
                obj['timeframeGvtProfit'] = ApiClient.convertToType(data['timeframeGvtProfit'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} totalUsdProfit
    */
    totalUsdProfit = undefined;
    /**
    * @member {Number} timeframeUsdProfit
    */
    timeframeUsdProfit = undefined;
    /**
    * @member {Number} rebalances
    */
    rebalances = undefined;
    /**
    * @member {Date} creationDate
    */
    creationDate = undefined;
    /**
    * @member {Number} profitPercent
    */
    profitPercent = undefined;
    /**
    * @member {Array.<module:model/ChartSimple>} equityChart
    */
    equityChart = undefined;
    /**
    * @member {Number} balance
    */
    balance = undefined;
    /**
    * @member {Number} investors
    */
    investors = undefined;
    /**
    * @member {Number} profitChangePercent
    */
    profitChangePercent = undefined;
    /**
    * @member {Number} sharpeRatio
    */
    sharpeRatio = undefined;
    /**
    * @member {Number} sortinoRatio
    */
    sortinoRatio = undefined;
    /**
    * @member {Number} calmarRatio
    */
    calmarRatio = undefined;
    /**
    * @member {Number} maxDrawdown
    */
    maxDrawdown = undefined;
    /**
    * @member {Number} totalGvtProfit
    */
    totalGvtProfit = undefined;
    /**
    * @member {Number} timeframeGvtProfit
    */
    timeframeGvtProfit = undefined;
    /**
    * @member {Number} rate
    */
    rate = undefined;








}


