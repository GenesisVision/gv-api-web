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

var _InvestorAmount = require('./InvestorAmount');

var _InvestorAmount2 = _interopRequireDefault(_InvestorAmount);

var _Period = require('./Period');

var _Period2 = _interopRequireDefault(_Period);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ClosePeriodData model module.
* @module model/ClosePeriodData
* @version v1.0
*/
var ClosePeriodData = function () {
    /**
    * Constructs a new <code>ClosePeriodData</code>.
    * @alias module:model/ClosePeriodData
    * @class
    */

    function ClosePeriodData() {
        _classCallCheck(this, ClosePeriodData);

        this.currentPeriod = undefined;
        this.tokenHolders = undefined;
        this.canCloseCurrentPeriod = undefined;
        this.investmentProgramStatus = undefined;
    }

    /**
    * Constructs a <code>ClosePeriodData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ClosePeriodData} obj Optional instance to populate.
    * @return {module:model/ClosePeriodData} The populated <code>ClosePeriodData</code> instance.
    */


    _createClass(ClosePeriodData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ClosePeriodData();

                if (data.hasOwnProperty('currentPeriod')) {
                    obj['currentPeriod'] = _Period2.default.constructFromObject(data['currentPeriod']);
                }
                if (data.hasOwnProperty('tokenHolders')) {
                    obj['tokenHolders'] = _ApiClient2.default.convertToType(data['tokenHolders'], [_InvestorAmount2.default]);
                }
                if (data.hasOwnProperty('canCloseCurrentPeriod')) {
                    obj['canCloseCurrentPeriod'] = _ApiClient2.default.convertToType(data['canCloseCurrentPeriod'], 'Boolean');
                }
                if (data.hasOwnProperty('investmentProgramStatus')) {
                    obj['investmentProgramStatus'] = _ApiClient2.default.convertToType(data['investmentProgramStatus'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {module:model/Period} currentPeriod
        */

        /**
        * @member {Array.<module:model/InvestorAmount>} tokenHolders
        */

        /**
        * @member {Boolean} canCloseCurrentPeriod
        */

        /**
        * @member {module:model/ClosePeriodData.InvestmentProgramStatusEnum} investmentProgramStatus
        */


        /**
        * Allowed values for the <code>investmentProgramStatus</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ClosePeriodData;
}();

ClosePeriodData.InvestmentProgramStatusEnum = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "ForClosingDueToInactivity"
     * @const
     */
    "ForClosingDueToInactivity": "ForClosingDueToInactivity"
};
exports.default = ClosePeriodData;