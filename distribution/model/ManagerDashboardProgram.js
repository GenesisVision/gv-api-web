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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ManagerDashboardProgram model module.
* @module model/ManagerDashboardProgram
* @version v1.0
*/
var ManagerDashboardProgram = function () {
    /**
    * Constructs a new <code>ManagerDashboardProgram</code>.
    * @alias module:model/ManagerDashboardProgram
    * @class
    */

    function ManagerDashboardProgram() {
        _classCallCheck(this, ManagerDashboardProgram);

        this.level = undefined;
        this.periodStarts = undefined;
        this.periodEnds = undefined;
        this.id = undefined;
        this.logo = undefined;
        this.url = undefined;
        this.title = undefined;
        this.share = undefined;
        this.investments = undefined;
        this.investmentsCount = undefined;
        this.withdrawals = undefined;
        this.withdrawalsCount = undefined;
        this.balance = undefined;
        this.investorsCount = undefined;
        this.profit = undefined;
        this.chart = undefined;
    }

    /**
    * Constructs a <code>ManagerDashboardProgram</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerDashboardProgram} obj Optional instance to populate.
    * @return {module:model/ManagerDashboardProgram} The populated <code>ManagerDashboardProgram</code> instance.
    */


    _createClass(ManagerDashboardProgram, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ManagerDashboardProgram();

                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
                if (data.hasOwnProperty('periodStarts')) {
                    obj['periodStarts'] = _ApiClient2.default.convertToType(data['periodStarts'], 'Date');
                }
                if (data.hasOwnProperty('periodEnds')) {
                    obj['periodEnds'] = _ApiClient2.default.convertToType(data['periodEnds'], 'Date');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('share')) {
                    obj['share'] = _ApiClient2.default.convertToType(data['share'], 'Number');
                }
                if (data.hasOwnProperty('investments')) {
                    obj['investments'] = _ApiClient2.default.convertToType(data['investments'], 'Number');
                }
                if (data.hasOwnProperty('investmentsCount')) {
                    obj['investmentsCount'] = _ApiClient2.default.convertToType(data['investmentsCount'], 'Number');
                }
                if (data.hasOwnProperty('withdrawals')) {
                    obj['withdrawals'] = _ApiClient2.default.convertToType(data['withdrawals'], 'Number');
                }
                if (data.hasOwnProperty('withdrawalsCount')) {
                    obj['withdrawalsCount'] = _ApiClient2.default.convertToType(data['withdrawalsCount'], 'Number');
                }
                if (data.hasOwnProperty('balance')) {
                    obj['balance'] = _ApiClient2.default.convertToType(data['balance'], 'Number');
                }
                if (data.hasOwnProperty('investorsCount')) {
                    obj['investorsCount'] = _ApiClient2.default.convertToType(data['investorsCount'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('chart')) {
                    obj['chart'] = _ApiClient2.default.convertToType(data['chart'], [_ChartSimple2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Number} level
        */

        /**
        * @member {Date} periodStarts
        */

        /**
        * @member {Date} periodEnds
        */

        /**
        * @member {String} id
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {String} url
        */

        /**
        * @member {String} title
        */

        /**
        * @member {Number} share
        */

        /**
        * @member {Number} investments
        */

        /**
        * @member {Number} investmentsCount
        */

        /**
        * @member {Number} withdrawals
        */

        /**
        * @member {Number} withdrawalsCount
        */

        /**
        * @member {Number} balance
        */

        /**
        * @member {Number} investorsCount
        */

        /**
        * @member {Number} profit
        */

        /**
        * @member {Array.<module:model/ChartSimple>} chart
        */

    }]);

    return ManagerDashboardProgram;
}();

exports.default = ManagerDashboardProgram;