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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ManagerPortfolioEvent
 */

/**
 *
 * @name ManagerPortfolioEvent#assetId
 * @type {String}
 */
/**
 *
 * @name ManagerPortfolioEvent#date
 * @type {Date}
 */
/**
 *
 * @name ManagerPortfolioEvent#title
 * @type {String}
 */
/**
 *
 * @name ManagerPortfolioEvent#value
 * @type {Number}
 */
/**
 *
 * @name ManagerPortfolioEvent#feeValue
 * @type {Number}
 */
/**
 *
 * @name ManagerPortfolioEvent#profitPercent
 * @type {Number}
 */
/**
 *
 * @name ManagerPortfolioEvent#currency
 * @type {("BTC"|"Undefined"|"GVT"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name ManagerPortfolioEvent#type
 * @type {("All"|"AssetStarted"|"ProgramPeriodStats"|"ProgramPeriodEnds"|"InvestorInvest"|"InvestorWithdraw"|"ManagerInvest"|"ManagerWithdraw"|"AssetFinished"|"EntranceFee"|"ExitFee")}
 */
/**
 *
 * @name ManagerPortfolioEvent#programType
 * @type {("Program"|"Fund")}
 */
/**
 *
 * @name ManagerPortfolioEvent#logo
 * @type {String}
 */
/**
 *
 * @name ManagerPortfolioEvent#color
 * @type {String}
 */
/**
 *
 * @name ManagerPortfolioEvent#description
 * @type {String}
 */
/**
 *
 * @name ManagerPortfolioEvent#periodNumber
 * @type {Number}
 */

var ManagerPortfolioEvent = function () {
    function ManagerPortfolioEvent() {
        _classCallCheck(this, ManagerPortfolioEvent);

        this.assetId = undefined;
        this.date = undefined;
        this.title = undefined;
        this.value = undefined;
        this.feeValue = undefined;
        this.profitPercent = undefined;
        this.currency = undefined;
        this.type = undefined;
        this.programType = undefined;
        this.logo = undefined;
        this.color = undefined;
        this.description = undefined;
        this.periodNumber = undefined;
    }

    _createClass(ManagerPortfolioEvent, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ManagerPortfolioEvent();

                if (data.hasOwnProperty('assetId')) {
                    obj['assetId'] = _ApiClient2.default.convertToType(data['assetId'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('feeValue')) {
                    obj['feeValue'] = _ApiClient2.default.convertToType(data['feeValue'], 'Number');
                }
                if (data.hasOwnProperty('profitPercent')) {
                    obj['profitPercent'] = _ApiClient2.default.convertToType(data['profitPercent'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('programType')) {
                    obj['programType'] = _ApiClient2.default.convertToType(data['programType'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('color')) {
                    obj['color'] = _ApiClient2.default.convertToType(data['color'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('periodNumber')) {
                    obj['periodNumber'] = _ApiClient2.default.convertToType(data['periodNumber'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return ManagerPortfolioEvent;
}();

ManagerPortfolioEvent.CurrencyEnum = {

    "BTC": "BTC",

    "Undefined": "Undefined",

    "GVT": "GVT",

    "ETH": "ETH",

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
ManagerPortfolioEvent.TypeEnum = {

    "All": "All",

    "AssetStarted": "AssetStarted",

    "ProgramPeriodStats": "ProgramPeriodStats",

    "ProgramPeriodEnds": "ProgramPeriodEnds",

    "InvestorInvest": "InvestorInvest",

    "InvestorWithdraw": "InvestorWithdraw",

    "ManagerInvest": "ManagerInvest",

    "ManagerWithdraw": "ManagerWithdraw",

    "AssetFinished": "AssetFinished",

    "EntranceFee": "EntranceFee",

    "ExitFee": "ExitFee"
};
ManagerPortfolioEvent.ProgramTypeEnum = {

    "Program": "Program",

    "Fund": "Fund"
};
exports.default = ManagerPortfolioEvent;