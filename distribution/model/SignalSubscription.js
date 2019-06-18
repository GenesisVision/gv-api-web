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
 * @interface SignalSubscription
 */

/**
 *
 * @name SignalSubscription#hasSignalAccount
 * @type {Boolean}
 */
/**
 *
 * @name SignalSubscription#hasActiveSubscription
 * @type {Boolean}
 */
/**
 *
 * @name SignalSubscription#mode
 * @type SignalSubscriptionModeEnum
 */
/**
 *
 * @name SignalSubscription#percent
 * @type {Number}
 */
/**
 *
 * @name SignalSubscription#openTolerancePercent
 * @type {Number}
 */
/**
 *
 * @name SignalSubscription#fixedVolume
 * @type {Number}
 */
/**
 *
 * @name SignalSubscription#fixedCurrency
 * @type SignalSubscriptionFixedCurrencyEnum
 */

var SignalSubscription = function () {
    function SignalSubscription() {
        _classCallCheck(this, SignalSubscription);

        this.hasSignalAccount = undefined;
        this.hasActiveSubscription = undefined;
        this.mode = undefined;
        this.percent = undefined;
        this.openTolerancePercent = undefined;
        this.fixedVolume = undefined;
        this.fixedCurrency = undefined;
    }

    _createClass(SignalSubscription, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SignalSubscription();

                if (data.hasOwnProperty('hasSignalAccount')) {
                    obj['hasSignalAccount'] = _ApiClient2.default.convertToType(data['hasSignalAccount'], 'Boolean');
                }
                if (data.hasOwnProperty('hasActiveSubscription')) {
                    obj['hasActiveSubscription'] = _ApiClient2.default.convertToType(data['hasActiveSubscription'], 'Boolean');
                }
                if (data.hasOwnProperty('mode')) {
                    obj['mode'] = _ApiClient2.default.convertToType(data['mode'], 'String');
                }
                if (data.hasOwnProperty('percent')) {
                    obj['percent'] = _ApiClient2.default.convertToType(data['percent'], 'Number');
                }
                if (data.hasOwnProperty('openTolerancePercent')) {
                    obj['openTolerancePercent'] = _ApiClient2.default.convertToType(data['openTolerancePercent'], 'Number');
                }
                if (data.hasOwnProperty('fixedVolume')) {
                    obj['fixedVolume'] = _ApiClient2.default.convertToType(data['fixedVolume'], 'Number');
                }
                if (data.hasOwnProperty('fixedCurrency')) {
                    obj['fixedCurrency'] = _ApiClient2.default.convertToType(data['fixedCurrency'], 'String');
                }
            }
            return obj;
        }
    }]);

    return SignalSubscription;
}();

/**
 * @typedef SignalSubscriptionModeEnum 
 * @type {("ByBalance"|"Percent"|"Fixed")}
 */

/**
 * @typedef SignalSubscriptionFixedCurrencyEnum 
 * @type {("BTC"|"ETH"|"Undefined"|"GVT"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */


SignalSubscription.ModeEnum = {

    "ByBalance": "ByBalance",

    "Percent": "Percent",

    "Fixed": "Fixed"
};
SignalSubscription.FixedCurrencyEnum = {

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
exports.default = SignalSubscription;