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

var _ProgramBalanceChartElement = require('./ProgramBalanceChartElement');

var _ProgramBalanceChartElement2 = _interopRequireDefault(_ProgramBalanceChartElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ProgramBalanceChart model module.
* @module model/ProgramBalanceChart
* @version v1.0
*/
var ProgramBalanceChart = function () {
    /**
    * Constructs a new <code>ProgramBalanceChart</code>.
    * @alias module:model/ProgramBalanceChart
    * @class
    */

    function ProgramBalanceChart() {
        _classCallCheck(this, ProgramBalanceChart);

        this.programCurrencyBalance = undefined;
        this.programCurrency = undefined;
        this.balanceChart = undefined;
        this.gvtBalance = undefined;
    }

    /**
    * Constructs a <code>ProgramBalanceChart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramBalanceChart} obj Optional instance to populate.
    * @return {module:model/ProgramBalanceChart} The populated <code>ProgramBalanceChart</code> instance.
    */


    _createClass(ProgramBalanceChart, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramBalanceChart();

                if (data.hasOwnProperty('programCurrencyBalance')) {
                    obj['programCurrencyBalance'] = _ApiClient2.default.convertToType(data['programCurrencyBalance'], 'Number');
                }
                if (data.hasOwnProperty('programCurrency')) {
                    obj['programCurrency'] = _ApiClient2.default.convertToType(data['programCurrency'], 'String');
                }
                if (data.hasOwnProperty('balanceChart')) {
                    obj['balanceChart'] = _ApiClient2.default.convertToType(data['balanceChart'], [_ProgramBalanceChartElement2.default]);
                }
                if (data.hasOwnProperty('gvtBalance')) {
                    obj['gvtBalance'] = _ApiClient2.default.convertToType(data['gvtBalance'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Number} programCurrencyBalance
        */

        /**
        * @member {module:model/ProgramBalanceChart.ProgramCurrencyEnum} programCurrency
        */

        /**
        * @member {Array.<module:model/ProgramBalanceChartElement>} balanceChart
        */

        /**
        * @member {Number} gvtBalance
        */


        /**
        * Allowed values for the <code>programCurrency</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ProgramBalanceChart;
}();

ProgramBalanceChart.ProgramCurrencyEnum = {

    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

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
exports.default = ProgramBalanceChart;