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
 * @interface CopyTradingAccountInfo
 */

/**
 *
 * @name CopyTradingAccountInfo#currency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name CopyTradingAccountInfo#currencyLogo
 * @type {String}
 */
/**
 *
 * @name CopyTradingAccountInfo#balance
 * @type {Number}
 */
/**
 *
 * @name CopyTradingAccountInfo#equity
 * @type {Number}
 */
/**
 *
 * @name CopyTradingAccountInfo#freeMargin
 * @type {Number}
 */

var CopyTradingAccountInfo = function () {
    function CopyTradingAccountInfo() {
        _classCallCheck(this, CopyTradingAccountInfo);

        this.currency = undefined;
        this.currencyLogo = undefined;
        this.balance = undefined;
        this.equity = undefined;
        this.freeMargin = undefined;
    }

    _createClass(CopyTradingAccountInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CopyTradingAccountInfo();

                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('currencyLogo')) {
                    obj['currencyLogo'] = _ApiClient2.default.convertToType(data['currencyLogo'], 'String');
                }
                if (data.hasOwnProperty('balance')) {
                    obj['balance'] = _ApiClient2.default.convertToType(data['balance'], 'Number');
                }
                if (data.hasOwnProperty('equity')) {
                    obj['equity'] = _ApiClient2.default.convertToType(data['equity'], 'Number');
                }
                if (data.hasOwnProperty('freeMargin')) {
                    obj['freeMargin'] = _ApiClient2.default.convertToType(data['freeMargin'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return CopyTradingAccountInfo;
}();

CopyTradingAccountInfo.CurrencyEnum = {

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
exports.default = CopyTradingAccountInfo;