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

var _ConvertingDetails = require('./ConvertingDetails');

var _ConvertingDetails2 = _interopRequireDefault(_ConvertingDetails);

var _ExternalTransactionDetails = require('./ExternalTransactionDetails');

var _ExternalTransactionDetails2 = _interopRequireDefault(_ExternalTransactionDetails);

var _ProgramTransactionDetails = require('./ProgramTransactionDetails');

var _ProgramTransactionDetails2 = _interopRequireDefault(_ProgramTransactionDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface TransactionDetails
 */

/**
 *
 * @name TransactionDetails#type
 * @type TransactionDetailsTypeEnum
 */
/**
 *
 * @name TransactionDetails#programDetails
 * @type {ProgramTransactionDetails}
 */
/**
 *
 * @name TransactionDetails#convertingDetails
 * @type {ConvertingDetails}
 */
/**
 *
 * @name TransactionDetails#externalTransactionDetails
 * @type {ExternalTransactionDetails}
 */
/**
 *
 * @name TransactionDetails#status
 * @type TransactionDetailsStatusEnum
 */
/**
 *
 * @name TransactionDetails#currency
 * @type TransactionDetailsCurrencyEnum
 */
/**
 *
 * @name TransactionDetails#currencyName
 * @type {String}
 */
/**
 *
 * @name TransactionDetails#currencyLogo
 * @type {String}
 */
/**
 *
 * @name TransactionDetails#gvCommission
 * @type {Number}
 */
/**
 *
 * @name TransactionDetails#gvCommissionCurrency
 * @type TransactionDetailsGvCommissionCurrencyEnum
 */
/**
 *
 * @name TransactionDetails#gvCommissionPercent
 * @type {Number}
 */
/**
 *
 * @name TransactionDetails#amount
 * @type {Number}
 */

var TransactionDetails = function () {
    function TransactionDetails() {
        _classCallCheck(this, TransactionDetails);

        this.type = undefined;
        this.programDetails = undefined;
        this.convertingDetails = undefined;
        this.externalTransactionDetails = undefined;
        this.status = undefined;
        this.currency = undefined;
        this.currencyName = undefined;
        this.currencyLogo = undefined;
        this.gvCommission = undefined;
        this.gvCommissionCurrency = undefined;
        this.gvCommissionPercent = undefined;
        this.amount = undefined;
    }

    _createClass(TransactionDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new TransactionDetails();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('programDetails')) {
                    obj['programDetails'] = _ProgramTransactionDetails2.default.constructFromObject(data['programDetails']);
                }
                if (data.hasOwnProperty('convertingDetails')) {
                    obj['convertingDetails'] = _ConvertingDetails2.default.constructFromObject(data['convertingDetails']);
                }
                if (data.hasOwnProperty('externalTransactionDetails')) {
                    obj['externalTransactionDetails'] = _ExternalTransactionDetails2.default.constructFromObject(data['externalTransactionDetails']);
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('currencyName')) {
                    obj['currencyName'] = _ApiClient2.default.convertToType(data['currencyName'], 'String');
                }
                if (data.hasOwnProperty('currencyLogo')) {
                    obj['currencyLogo'] = _ApiClient2.default.convertToType(data['currencyLogo'], 'String');
                }
                if (data.hasOwnProperty('gvCommission')) {
                    obj['gvCommission'] = _ApiClient2.default.convertToType(data['gvCommission'], 'Number');
                }
                if (data.hasOwnProperty('gvCommissionCurrency')) {
                    obj['gvCommissionCurrency'] = _ApiClient2.default.convertToType(data['gvCommissionCurrency'], 'String');
                }
                if (data.hasOwnProperty('gvCommissionPercent')) {
                    obj['gvCommissionPercent'] = _ApiClient2.default.convertToType(data['gvCommissionPercent'], 'Number');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return TransactionDetails;
}();

/**
 * @typedef TransactionDetailsTypeEnum 
 * @type {("Investing"|"Withdrawal"|"ExternalWithdrawal"|"ExternalDeposit"|"Converting"|"Open"|"Close"|"Profit"|"PlatformFee"|"SubscribeSignal"|"ReceiveSignal"|"DepositSignal"|"WithdrawalSignal"|"Platform")}
 */

/**
 * @typedef TransactionDetailsStatusEnum 
 * @type {("Done"|"Pending"|"Canceled"|"Error")}
 */

/**
 * @typedef TransactionDetailsCurrencyEnum 
 * @type {("BTC"|"ETH"|"Undefined"|"GVT"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef TransactionDetailsGvCommissionCurrencyEnum 
 * @type {("BTC"|"ETH"|"Undefined"|"GVT"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */


TransactionDetails.TypeEnum = {

    "Investing": "Investing",

    "Withdrawal": "Withdrawal",

    "ExternalWithdrawal": "ExternalWithdrawal",

    "ExternalDeposit": "ExternalDeposit",

    "Converting": "Converting",

    "Open": "Open",

    "Close": "Close",

    "Profit": "Profit",

    "PlatformFee": "PlatformFee",

    "SubscribeSignal": "SubscribeSignal",

    "ReceiveSignal": "ReceiveSignal",

    "DepositSignal": "DepositSignal",

    "WithdrawalSignal": "WithdrawalSignal",

    "Platform": "Platform"
};
TransactionDetails.StatusEnum = {

    "Done": "Done",

    "Pending": "Pending",

    "Canceled": "Canceled",

    "Error": "Error"
};
TransactionDetails.CurrencyEnum = {

    "BTC": "BTC",

    "ETH": "ETH",

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
TransactionDetails.GvCommissionCurrencyEnum = {

    "BTC": "BTC",

    "ETH": "ETH",

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
exports.default = TransactionDetails;