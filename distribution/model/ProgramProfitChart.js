'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ChartSimple = require('./ChartSimple');

var _ChartSimple2 = _interopRequireDefault(_ChartSimple);

var _PeriodDate = require('./PeriodDate');

var _PeriodDate2 = _interopRequireDefault(_PeriodDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ProgramProfitChart model module.
* @module model/ProgramProfitChart
* @version v1.0
*/
var ProgramProfitChart = function () {
    /**
    * Constructs a new <code>ProgramProfitChart</code>.
    * @alias module:model/ProgramProfitChart
    * @class
    */

    function ProgramProfitChart() {
        _classCallCheck(this, ProgramProfitChart);

        this.totalProgramCurrencyProfit = undefined;
        this.timeframeProgramCurrencyProfit = undefined;
        this.programCurrency = undefined;
        this.trades = undefined;
        this.successTradesPercent = undefined;
        this.profitFactor = undefined;
        this.pnLChart = undefined;
        this.periods = undefined;
        this.equityChart = undefined;
        this.balance = undefined;
        this.investors = undefined;
        this.sharpeRatio = undefined;
        this.sortinoRatio = undefined;
        this.calmarRatio = undefined;
        this.maxDrawdown = undefined;
        this.totalGvtProfit = undefined;
        this.timeframeGvtProfit = undefined;
        this.profitChangePercent = undefined;
        this.lastPeriodStarts = undefined;
        this.lastPeriodEnds = undefined;
        this.rate = undefined;
    }

    /**
    * Constructs a <code>ProgramProfitChart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramProfitChart} obj Optional instance to populate.
    * @return {module:model/ProgramProfitChart} The populated <code>ProgramProfitChart</code> instance.
    */


    _createClass(ProgramProfitChart, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramProfitChart();

                if (data.hasOwnProperty('totalProgramCurrencyProfit')) {
                    obj['totalProgramCurrencyProfit'] = _ApiClient2.default.convertToType(data['totalProgramCurrencyProfit'], 'Number');
                }
                if (data.hasOwnProperty('timeframeProgramCurrencyProfit')) {
                    obj['timeframeProgramCurrencyProfit'] = _ApiClient2.default.convertToType(data['timeframeProgramCurrencyProfit'], 'Number');
                }
                if (data.hasOwnProperty('programCurrency')) {
                    obj['programCurrency'] = _ApiClient2.default.convertToType(data['programCurrency'], 'String');
                }
                if (data.hasOwnProperty('trades')) {
                    obj['trades'] = _ApiClient2.default.convertToType(data['trades'], 'Number');
                }
                if (data.hasOwnProperty('successTradesPercent')) {
                    obj['successTradesPercent'] = _ApiClient2.default.convertToType(data['successTradesPercent'], 'Number');
                }
                if (data.hasOwnProperty('profitFactor')) {
                    obj['profitFactor'] = _ApiClient2.default.convertToType(data['profitFactor'], 'Number');
                }
                if (data.hasOwnProperty('pnLChart')) {
                    obj['pnLChart'] = _ApiClient2.default.convertToType(data['pnLChart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('periods')) {
                    obj['periods'] = _ApiClient2.default.convertToType(data['periods'], [_PeriodDate2.default]);
                }
                if (data.hasOwnProperty('equityChart')) {
                    obj['equityChart'] = _ApiClient2.default.convertToType(data['equityChart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('balance')) {
                    obj['balance'] = _ApiClient2.default.convertToType(data['balance'], 'Number');
                }
                if (data.hasOwnProperty('investors')) {
                    obj['investors'] = _ApiClient2.default.convertToType(data['investors'], 'Number');
                }
                if (data.hasOwnProperty('sharpeRatio')) {
                    obj['sharpeRatio'] = _ApiClient2.default.convertToType(data['sharpeRatio'], 'Number');
                }
                if (data.hasOwnProperty('sortinoRatio')) {
                    obj['sortinoRatio'] = _ApiClient2.default.convertToType(data['sortinoRatio'], 'Number');
                }
                if (data.hasOwnProperty('calmarRatio')) {
                    obj['calmarRatio'] = _ApiClient2.default.convertToType(data['calmarRatio'], 'Number');
                }
                if (data.hasOwnProperty('maxDrawdown')) {
                    obj['maxDrawdown'] = _ApiClient2.default.convertToType(data['maxDrawdown'], 'Number');
                }
                if (data.hasOwnProperty('totalGvtProfit')) {
                    obj['totalGvtProfit'] = _ApiClient2.default.convertToType(data['totalGvtProfit'], 'Number');
                }
                if (data.hasOwnProperty('timeframeGvtProfit')) {
                    obj['timeframeGvtProfit'] = _ApiClient2.default.convertToType(data['timeframeGvtProfit'], 'Number');
                }
                if (data.hasOwnProperty('profitChangePercent')) {
                    obj['profitChangePercent'] = _ApiClient2.default.convertToType(data['profitChangePercent'], 'Number');
                }
                if (data.hasOwnProperty('lastPeriodStarts')) {
                    obj['lastPeriodStarts'] = _ApiClient2.default.convertToType(data['lastPeriodStarts'], 'Date');
                }
                if (data.hasOwnProperty('lastPeriodEnds')) {
                    obj['lastPeriodEnds'] = _ApiClient2.default.convertToType(data['lastPeriodEnds'], 'Date');
                }
                if (data.hasOwnProperty('rate')) {
                    obj['rate'] = _ApiClient2.default.convertToType(data['rate'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Number} totalProgramCurrencyProfit
        */

        /**
        * @member {Number} timeframeProgramCurrencyProfit
        */

        /**
        * @member {module:model/ProgramProfitChart.ProgramCurrencyEnum} programCurrency
        */

        /**
        * @member {Number} trades
        */

        /**
        * @member {Number} successTradesPercent
        */

        /**
        * @member {Number} profitFactor
        */

        /**
        * @member {Array.<module:model/ChartSimple>} pnLChart
        */

        /**
        * @member {Array.<module:model/PeriodDate>} periods
        */

        /**
        * @member {Array.<module:model/ChartSimple>} equityChart
        */

        /**
        * @member {Number} balance
        */

        /**
        * @member {Number} investors
        */

        /**
        * @member {Number} sharpeRatio
        */

        /**
        * @member {Number} sortinoRatio
        */

        /**
        * @member {Number} calmarRatio
        */

        /**
        * @member {Number} maxDrawdown
        */

        /**
        * @member {Number} totalGvtProfit
        */

        /**
        * @member {Number} timeframeGvtProfit
        */

        /**
        * @member {Number} profitChangePercent
        */

        /**
        * @member {Date} lastPeriodStarts
        */

        /**
        * @member {Date} lastPeriodEnds
        */

        /**
        * @member {Number} rate
        */


        /**
        * Allowed values for the <code>programCurrency</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ProgramProfitChart;
}();

ProgramProfitChart.ProgramCurrencyEnum = {

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
exports.default = ProgramProfitChart;