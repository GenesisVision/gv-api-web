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

var _DashboardProgramDetails = require('./DashboardProgramDetails');

var _DashboardProgramDetails2 = _interopRequireDefault(_DashboardProgramDetails);

var _PersonalProgramDetailsFull = require('./PersonalProgramDetailsFull');

var _PersonalProgramDetailsFull2 = _interopRequireDefault(_PersonalProgramDetailsFull);

var _ProfilePublic = require('./ProfilePublic');

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

var _ProgramDetailsListStatistic = require('./ProgramDetailsListStatistic');

var _ProgramDetailsListStatistic2 = _interopRequireDefault(_ProgramDetailsListStatistic);

var _ProgramDetailsRating = require('./ProgramDetailsRating');

var _ProgramDetailsRating2 = _interopRequireDefault(_ProgramDetailsRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ProgramDetails
 */

/**
 *
 * @name ProgramDetails#currency
 * @type {("ETH"|"BTC"|"Undefined"|"GVT"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name ProgramDetails#level
 * @type {Number}
 */
/**
 *
 * @name ProgramDetails#periodDuration
 * @type {Number}
 */
/**
 *
 * @name ProgramDetails#periodStarts
 * @type {Date}
 */
/**
 *
 * @name ProgramDetails#periodEnds
 * @type {Date}
 */
/**
 *
 * @name ProgramDetails#availableInvestment
 * @type {Number}
 */
/**
 *
 * @name ProgramDetails#statistic
 * @type {ProgramDetailsListStatistic}
 */
/**
 *
 * @name ProgramDetails#rating
 * @type {ProgramDetailsRating}
 */
/**
 *
 * @name ProgramDetails#personalDetails
 * @type {PersonalProgramDetailsFull}
 */
/**
 *
 * @name ProgramDetails#id
 * @type {String}
 */
/**
 *
 * @name ProgramDetails#logo
 * @type {String}
 */
/**
 *
 * @name ProgramDetails#url
 * @type {String}
 */
/**
 *
 * @name ProgramDetails#color
 * @type {String}
 */
/**
 *
 * @name ProgramDetails#title
 * @type {String}
 */
/**
 *
 * @name ProgramDetails#description
 * @type {String}
 */
/**
 *
 * @name ProgramDetails#status
 * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
 */
/**
 *
 * @name ProgramDetails#manager
 * @type {ProfilePublic}
 */
/**
 *
 * @name ProgramDetails#chart
 * @type {[ChartSimple]}
 */
/**
 *
 * @name ProgramDetails#dashboardAssetsDetails
 * @type {DashboardProgramDetails}
 */

var ProgramDetails = function () {
    function ProgramDetails() {
        _classCallCheck(this, ProgramDetails);

        this.currency = undefined;
        this.level = undefined;
        this.periodDuration = undefined;
        this.periodStarts = undefined;
        this.periodEnds = undefined;
        this.availableInvestment = undefined;
        this.statistic = undefined;
        this.rating = undefined;
        this.personalDetails = undefined;
        this.id = undefined;
        this.logo = undefined;
        this.url = undefined;
        this.color = undefined;
        this.title = undefined;
        this.description = undefined;
        this.status = undefined;
        this.manager = undefined;
        this.chart = undefined;
        this.dashboardAssetsDetails = undefined;
    }

    _createClass(ProgramDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramDetails();

                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
                if (data.hasOwnProperty('periodDuration')) {
                    obj['periodDuration'] = _ApiClient2.default.convertToType(data['periodDuration'], 'Number');
                }
                if (data.hasOwnProperty('periodStarts')) {
                    obj['periodStarts'] = _ApiClient2.default.convertToType(data['periodStarts'], 'Date');
                }
                if (data.hasOwnProperty('periodEnds')) {
                    obj['periodEnds'] = _ApiClient2.default.convertToType(data['periodEnds'], 'Date');
                }
                if (data.hasOwnProperty('availableInvestment')) {
                    obj['availableInvestment'] = _ApiClient2.default.convertToType(data['availableInvestment'], 'Number');
                }
                if (data.hasOwnProperty('statistic')) {
                    obj['statistic'] = _ProgramDetailsListStatistic2.default.constructFromObject(data['statistic']);
                }
                if (data.hasOwnProperty('rating')) {
                    obj['rating'] = _ProgramDetailsRating2.default.constructFromObject(data['rating']);
                }
                if (data.hasOwnProperty('personalDetails')) {
                    obj['personalDetails'] = _PersonalProgramDetailsFull2.default.constructFromObject(data['personalDetails']);
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
                if (data.hasOwnProperty('color')) {
                    obj['color'] = _ApiClient2.default.convertToType(data['color'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('manager')) {
                    obj['manager'] = _ProfilePublic2.default.constructFromObject(data['manager']);
                }
                if (data.hasOwnProperty('chart')) {
                    obj['chart'] = _ApiClient2.default.convertToType(data['chart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('dashboardAssetsDetails')) {
                    obj['dashboardAssetsDetails'] = _DashboardProgramDetails2.default.constructFromObject(data['dashboardAssetsDetails']);
                }
            }
            return obj;
        }
    }]);

    return ProgramDetails;
}();

ProgramDetails.CurrencyEnum = {

    "ETH": "ETH",

    "BTC": "BTC",

    "Undefined": "Undefined",

    "GVT": "GVT",

    "ADA": "ADA",

    "USDT": "USDT",

    "XRP": "XRP",

    "BCH": "BCH",

    "LTC": "LTC",

    "DOGE": "DOGE",

    "BNB": "BNB",

    "USD": "USD",

    "EUR": "EUR"
};
ProgramDetails.StatusEnum = {

    "None": "None",

    "Pending": "Pending",

    "ErrorCreating": "ErrorCreating",

    "Active": "Active",

    "Closed": "Closed",

    "Archived": "Archived",

    "ClosedDueToInactivity": "ClosedDueToInactivity"
};
exports.default = ProgramDetails;