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

var _ValueChartBar = require('./ValueChartBar');

var _ValueChartBar2 = _interopRequireDefault(_ValueChartBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The DashboardChartValue model module.
* @module model/DashboardChartValue
* @version v1.0
*/
var DashboardChartValue = function () {
    /**
    * Constructs a new <code>DashboardChartValue</code>.
    * @alias module:model/DashboardChartValue
    * @class
    */

    function DashboardChartValue() {
        _classCallCheck(this, DashboardChartValue);

        this.investedProgramsInfo = undefined;
        this.balanceChart = undefined;
        this.value = undefined;
        this.valueCurrency = undefined;
        this.changePercent = undefined;
        this.changeValue = undefined;
        this.changeValueCurrency = undefined;
        this.isNewUser = undefined;
        this.rate = undefined;
    }

    /**
    * Constructs a <code>DashboardChartValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DashboardChartValue} obj Optional instance to populate.
    * @return {module:model/DashboardChartValue} The populated <code>DashboardChartValue</code> instance.
    */


    _createClass(DashboardChartValue, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new DashboardChartValue();

                if (data.hasOwnProperty('investedProgramsInfo')) {
                    obj['investedProgramsInfo'] = _ApiClient2.default.convertToType(data['investedProgramsInfo'], [_ValueChartBar2.default]);
                }
                if (data.hasOwnProperty('balanceChart')) {
                    obj['balanceChart'] = _ApiClient2.default.convertToType(data['balanceChart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('valueCurrency')) {
                    obj['valueCurrency'] = _ApiClient2.default.convertToType(data['valueCurrency'], 'Number');
                }
                if (data.hasOwnProperty('changePercent')) {
                    obj['changePercent'] = _ApiClient2.default.convertToType(data['changePercent'], 'Number');
                }
                if (data.hasOwnProperty('changeValue')) {
                    obj['changeValue'] = _ApiClient2.default.convertToType(data['changeValue'], 'Number');
                }
                if (data.hasOwnProperty('changeValueCurrency')) {
                    obj['changeValueCurrency'] = _ApiClient2.default.convertToType(data['changeValueCurrency'], 'Number');
                }
                if (data.hasOwnProperty('isNewUser')) {
                    obj['isNewUser'] = _ApiClient2.default.convertToType(data['isNewUser'], 'Boolean');
                }
                if (data.hasOwnProperty('rate')) {
                    obj['rate'] = _ApiClient2.default.convertToType(data['rate'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/ValueChartBar>} investedProgramsInfo
        */

        /**
        * @member {Array.<module:model/ChartSimple>} balanceChart
        */

        /**
        * @member {Number} value
        */

        /**
        * @member {Number} valueCurrency
        */

        /**
        * @member {Number} changePercent
        */

        /**
        * @member {Number} changeValue
        */

        /**
        * @member {Number} changeValueCurrency
        */

        /**
        * @member {Boolean} isNewUser
        */

        /**
        * @member {Number} rate
        */

    }]);

    return DashboardChartValue;
}();

exports.default = DashboardChartValue;