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
import PeriodDate from './PeriodDate';





/**
* The ProgramProfitChart model module.
* @module model/ProgramProfitChart
* @version v1.0
*/
export default class ProgramProfitChart {
    /**
    * Constructs a new <code>ProgramProfitChart</code>.
    * @alias module:model/ProgramProfitChart
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramProfitChart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramProfitChart} obj Optional instance to populate.
    * @return {module:model/ProgramProfitChart} The populated <code>ProgramProfitChart</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramProfitChart();

            
            
            

            if (data.hasOwnProperty('totalProgramCurrencyProfit')) {
                obj['totalProgramCurrencyProfit'] = ApiClient.convertToType(data['totalProgramCurrencyProfit'], 'Number');
            }
            if (data.hasOwnProperty('timeframeProgramCurrencyProfit')) {
                obj['timeframeProgramCurrencyProfit'] = ApiClient.convertToType(data['timeframeProgramCurrencyProfit'], 'Number');
            }
            if (data.hasOwnProperty('programCurrency')) {
                obj['programCurrency'] = ApiClient.convertToType(data['programCurrency'], 'String');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], 'Number');
            }
            if (data.hasOwnProperty('successTradesPercent')) {
                obj['successTradesPercent'] = ApiClient.convertToType(data['successTradesPercent'], 'Number');
            }
            if (data.hasOwnProperty('profitFactor')) {
                obj['profitFactor'] = ApiClient.convertToType(data['profitFactor'], 'Number');
            }
            if (data.hasOwnProperty('pnLChart')) {
                obj['pnLChart'] = ApiClient.convertToType(data['pnLChart'], [ChartSimple]);
            }
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], [PeriodDate]);
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
            if (data.hasOwnProperty('profitChangePercent')) {
                obj['profitChangePercent'] = ApiClient.convertToType(data['profitChangePercent'], 'Number');
            }
            if (data.hasOwnProperty('lastPeriodStarts')) {
                obj['lastPeriodStarts'] = ApiClient.convertToType(data['lastPeriodStarts'], 'Date');
            }
            if (data.hasOwnProperty('lastPeriodEnds')) {
                obj['lastPeriodEnds'] = ApiClient.convertToType(data['lastPeriodEnds'], 'Date');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} totalProgramCurrencyProfit
    */
    totalProgramCurrencyProfit = undefined;
    /**
    * @member {Number} timeframeProgramCurrencyProfit
    */
    timeframeProgramCurrencyProfit = undefined;
    /**
    * @member {module:model/ProgramProfitChart.ProgramCurrencyEnum} programCurrency
    */
    programCurrency = undefined;
    /**
    * @member {Number} trades
    */
    trades = undefined;
    /**
    * @member {Number} successTradesPercent
    */
    successTradesPercent = undefined;
    /**
    * @member {Number} profitFactor
    */
    profitFactor = undefined;
    /**
    * @member {Array.<module:model/ChartSimple>} pnLChart
    */
    pnLChart = undefined;
    /**
    * @member {Array.<module:model/PeriodDate>} periods
    */
    periods = undefined;
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
    * @member {Number} profitChangePercent
    */
    profitChangePercent = undefined;
    /**
    * @member {Date} lastPeriodStarts
    */
    lastPeriodStarts = undefined;
    /**
    * @member {Date} lastPeriodEnds
    */
    lastPeriodEnds = undefined;
    /**
    * @member {Number} rate
    */
    rate = undefined;






    /**
    * Allowed values for the <code>programCurrency</code> property.
    * @enum {String}
    * @readonly
    */
    static ProgramCurrencyEnum = {
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "ETH"
         * @const
         */
        "ETH": "ETH",
    
        /**
         * value: "BTC"
         * @const
         */
        "BTC": "BTC",
    
        /**
         * value: "ADA"
         * @const
         */
        "ADA": "ADA",
    
        /**
         * value: "USDT"
         * @const
         */
        "USDT": "USDT",
    
        /**
         * value: "XRP"
         * @const
         */
        "XRP": "XRP",
    
        /**
         * value: "BCH"
         * @const
         */
        "BCH": "BCH",
    
        /**
         * value: "LTC"
         * @const
         */
        "LTC": "LTC",
    
        /**
         * value: "DOGE"
         * @const
         */
        "DOGE": "DOGE",
    
        /**
         * value: "USD"
         * @const
         */
        "USD": "USD",
    
        /**
         * value: "EUR"
         * @const
         */
        "EUR": "EUR"    
    };



}


