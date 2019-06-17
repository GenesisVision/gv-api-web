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

var _PersonalSignalDetailsFull = require('./PersonalSignalDetailsFull');

var _PersonalSignalDetailsFull2 = _interopRequireDefault(_PersonalSignalDetailsFull);

var _ProfilePublic = require('./ProfilePublic');

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

var _ProgramDetailsListStatistic = require('./ProgramDetailsListStatistic');

var _ProgramDetailsListStatistic2 = _interopRequireDefault(_ProgramDetailsListStatistic);

var _ProgramTag = require('./ProgramTag');

var _ProgramTag2 = _interopRequireDefault(_ProgramTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface SignalDetails
 */

/**
 *
 * @name SignalDetails#statistic
 * @type {ProgramDetailsListStatistic}
 */
/**
 *
 * @name SignalDetails#personalDetails
 * @type {PersonalSignalDetailsFull}
 */
/**
 *
 * @name SignalDetails#currency
 * @type SignalDetailsCurrencyEnum
 */
/**
 *
 * @name SignalDetails#level
 * @type {Number}
 */
/**
 *
 * @name SignalDetails#levelProgress
 * @type {Number}
 */
/**
 *
 * @name SignalDetails#tags
 * @type {[ProgramTag]}
 */
/**
 *
 * @name SignalDetails#subscribers
 * @type {Number}
 */
/**
 *
 * @name SignalDetails#id
 * @type {String}
 */
/**
 *
 * @name SignalDetails#logo
 * @type {String}
 */
/**
 *
 * @name SignalDetails#url
 * @type {String}
 */
/**
 *
 * @name SignalDetails#color
 * @type {String}
 */
/**
 *
 * @name SignalDetails#title
 * @type {String}
 */
/**
 *
 * @name SignalDetails#description
 * @type {String}
 */
/**
 *
 * @name SignalDetails#status
 * @type SignalDetailsStatusEnum
 */
/**
 *
 * @name SignalDetails#creationDate
 * @type {Date}
 */
/**
 *
 * @name SignalDetails#manager
 * @type {ProfilePublic}
 */
/**
 *
 * @name SignalDetails#chart
 * @type {[ChartSimple]}
 */

var SignalDetails = function () {
    function SignalDetails() {
        _classCallCheck(this, SignalDetails);

        this.statistic = undefined;
        this.personalDetails = undefined;
        this.currency = undefined;
        this.level = undefined;
        this.levelProgress = undefined;
        this.tags = undefined;
        this.subscribers = undefined;
        this.id = undefined;
        this.logo = undefined;
        this.url = undefined;
        this.color = undefined;
        this.title = undefined;
        this.description = undefined;
        this.status = undefined;
        this.creationDate = undefined;
        this.manager = undefined;
        this.chart = undefined;
    }

    _createClass(SignalDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SignalDetails();

                if (data.hasOwnProperty('statistic')) {
                    obj['statistic'] = _ProgramDetailsListStatistic2.default.constructFromObject(data['statistic']);
                }
                if (data.hasOwnProperty('personalDetails')) {
                    obj['personalDetails'] = _PersonalSignalDetailsFull2.default.constructFromObject(data['personalDetails']);
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
                if (data.hasOwnProperty('levelProgress')) {
                    obj['levelProgress'] = _ApiClient2.default.convertToType(data['levelProgress'], 'Number');
                }
                if (data.hasOwnProperty('tags')) {
                    obj['tags'] = _ApiClient2.default.convertToType(data['tags'], [_ProgramTag2.default]);
                }
                if (data.hasOwnProperty('subscribers')) {
                    obj['subscribers'] = _ApiClient2.default.convertToType(data['subscribers'], 'Number');
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
                if (data.hasOwnProperty('creationDate')) {
                    obj['creationDate'] = _ApiClient2.default.convertToType(data['creationDate'], 'Date');
                }
                if (data.hasOwnProperty('manager')) {
                    obj['manager'] = _ProfilePublic2.default.constructFromObject(data['manager']);
                }
                if (data.hasOwnProperty('chart')) {
                    obj['chart'] = _ApiClient2.default.convertToType(data['chart'], [_ChartSimple2.default]);
                }
            }
            return obj;
        }
    }]);

    return SignalDetails;
}();

/**
 * @typedef SignalDetailsCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef SignalDetailsStatusEnum 
 * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
 */


SignalDetails.CurrencyEnum = {

    "Undefined": "Undefined",

    "GVT": "GVT",

    "ETH": "ETH",

    "BTC": "BTC",

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
SignalDetails.StatusEnum = {

    "None": "None",

    "Pending": "Pending",

    "ErrorCreating": "ErrorCreating",

    "Active": "Active",

    "Closed": "Closed",

    "Archived": "Archived",

    "ClosedDueToInactivity": "ClosedDueToInactivity"
};
exports.default = SignalDetails;