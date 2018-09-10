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

var _StatisticProgramDetails = require('./StatisticProgramDetails');

var _StatisticProgramDetails2 = _interopRequireDefault(_StatisticProgramDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ChartProgramDetails model module.
* @module model/ChartProgramDetails
* @version v1.0
*/
var ChartProgramDetails = function () {
    /**
    * Constructs a new <code>ChartProgramDetails</code>.
    * @alias module:model/ChartProgramDetails
    * @class
    */

    function ChartProgramDetails() {
        _classCallCheck(this, ChartProgramDetails);

        this.equityChart = undefined;
        this.pnLChart = undefined;
        this.statistic = undefined;
    }

    /**
    * Constructs a <code>ChartProgramDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ChartProgramDetails} obj Optional instance to populate.
    * @return {module:model/ChartProgramDetails} The populated <code>ChartProgramDetails</code> instance.
    */


    _createClass(ChartProgramDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ChartProgramDetails();

                if (data.hasOwnProperty('equityChart')) {
                    obj['equityChart'] = _ApiClient2.default.convertToType(data['equityChart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('pnLChart')) {
                    obj['pnLChart'] = _ApiClient2.default.convertToType(data['pnLChart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('statistic')) {
                    obj['statistic'] = _StatisticProgramDetails2.default.constructFromObject(data['statistic']);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/ChartSimple>} equityChart
        */

        /**
        * @member {Array.<module:model/ChartSimple>} pnLChart
        */

        /**
        * @member {module:model/StatisticProgramDetails} statistic
        */

    }]);

    return ChartProgramDetails;
}();

exports.default = ChartProgramDetails;