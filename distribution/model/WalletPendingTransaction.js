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
 * @interface WalletPendingTransaction
 */

/**
 *
 * @name WalletPendingTransaction#id
 * @type {String}
 */
/**
 *
 * @name WalletPendingTransaction#hash
 * @type {String}
 */
/**
 *
 * @name WalletPendingTransaction#amount
 * @type {Number}
 */
/**
 *
 * @name WalletPendingTransaction#currency
 * @type {("GVT"|"Undefined"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name WalletPendingTransaction#type
 * @type {("Deposit"|"Withdrawn")}
 */
/**
 *
 * @name WalletPendingTransaction#dateCreated
 * @type {Date}
 */
/**
 *
 * @name WalletPendingTransaction#lastUpdated
 * @type {Date}
 */
/**
 *
 * @name WalletPendingTransaction#address
 * @type {String}
 */

var WalletPendingTransaction = function () {
    function WalletPendingTransaction() {
        _classCallCheck(this, WalletPendingTransaction);

        this.id = undefined;
        this.hash = undefined;
        this.amount = undefined;
        this.currency = undefined;
        this.type = undefined;
        this.dateCreated = undefined;
        this.lastUpdated = undefined;
        this.address = undefined;
    }

    _createClass(WalletPendingTransaction, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WalletPendingTransaction();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('hash')) {
                    obj['hash'] = _ApiClient2.default.convertToType(data['hash'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('dateCreated')) {
                    obj['dateCreated'] = _ApiClient2.default.convertToType(data['dateCreated'], 'Date');
                }
                if (data.hasOwnProperty('lastUpdated')) {
                    obj['lastUpdated'] = _ApiClient2.default.convertToType(data['lastUpdated'], 'Date');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], 'String');
                }
            }
            return obj;
        }
    }]);

    return WalletPendingTransaction;
}();

WalletPendingTransaction.CurrencyEnum = {

    "GVT": "GVT",

    "Undefined": "Undefined",

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
WalletPendingTransaction.TypeEnum = {

    "Deposit": "Deposit",

    "Withdrawn": "Withdrawn"
};
exports.default = WalletPendingTransaction;