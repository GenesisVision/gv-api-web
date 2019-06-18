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
 * @interface WalletInfo
 */

/**
 *
 * @name WalletInfo#currency
 * @type WalletInfoCurrencyEnum
 */
/**
 *
 * @name WalletInfo#address
 * @type {String}
 */
/**
 *
 * @name WalletInfo#rateToGVT
 * @type {Number}
 */
/**
 *
 * @name WalletInfo#description
 * @type {String}
 */
/**
 *
 * @name WalletInfo#logo
 * @type {String}
 */
/**
 *
 * @name WalletInfo#isDepositEnabled
 * @type {Boolean}
 */

var WalletInfo = function () {
    function WalletInfo() {
        _classCallCheck(this, WalletInfo);

        this.currency = undefined;
        this.address = undefined;
        this.rateToGVT = undefined;
        this.description = undefined;
        this.logo = undefined;
        this.isDepositEnabled = undefined;
    }

    _createClass(WalletInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WalletInfo();

                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], 'String');
                }
                if (data.hasOwnProperty('rateToGVT')) {
                    obj['rateToGVT'] = _ApiClient2.default.convertToType(data['rateToGVT'], 'Number');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('isDepositEnabled')) {
                    obj['isDepositEnabled'] = _ApiClient2.default.convertToType(data['isDepositEnabled'], 'Boolean');
                }
            }
            return obj;
        }
    }]);

    return WalletInfo;
}();

/**
 * @typedef WalletInfoCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */


WalletInfo.CurrencyEnum = {

    "BTC": "BTC",

    "ETH": "ETH",

    "USDT": "USDT",

    "GVT": "GVT",

    "Undefined": "Undefined",

    "ADA": "ADA",

    "XRP": "XRP",

    "BCH": "BCH",

    "LTC": "LTC",

    "DOGE": "DOGE",

    "BNB": "BNB",

    "USD": "USD",

    "EUR": "EUR"
};
exports.default = WalletInfo;