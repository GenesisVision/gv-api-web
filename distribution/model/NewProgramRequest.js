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
 * @interface NewProgramRequest
 */

/**
 *
 * @name NewProgramRequest#currency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name NewProgramRequest#periodLength
 * @type {Number}
 */
/**
 *
 * @name NewProgramRequest#successFee
 * @type {Number}
 */
/**
 *
 * @name NewProgramRequest#stopOutLevel
 * @type {Number}
 */
/**
 *
 * @name NewProgramRequest#leverage
 * @type {Number}
 */
/**
 *
 * @name NewProgramRequest#brokerAccountTypeId
 * @type {String}
 */
/**
 *
 * @name NewProgramRequest#signalSuccessFee
 * @type {Number}
 */
/**
 *
 * @name NewProgramRequest#signalSubscriptionFee
 * @type {Number}
 */
/**
 *
 * @name NewProgramRequest#title
 * @type {String}
 */
/**
 *
 * @name NewProgramRequest#description
 * @type {String}
 */
/**
 *
 * @name NewProgramRequest#logo
 * @type {String}
 */
/**
 *
 * @name NewProgramRequest#entryFee
 * @type {Number}
 */
/**
 *
 * @name NewProgramRequest#depositAmount
 * @type {Number}
 */
/**
 *
 * @name NewProgramRequest#depositWalletId
 * @type {String}
 */

var NewProgramRequest = function () {
    function NewProgramRequest() {
        _classCallCheck(this, NewProgramRequest);

        this.currency = undefined;
        this.periodLength = undefined;
        this.successFee = undefined;
        this.stopOutLevel = undefined;
        this.leverage = undefined;
        this.brokerAccountTypeId = undefined;
        this.signalSuccessFee = undefined;
        this.signalSubscriptionFee = undefined;
        this.title = undefined;
        this.description = undefined;
        this.logo = undefined;
        this.entryFee = undefined;
        this.depositAmount = undefined;
        this.depositWalletId = undefined;
    }

    _createClass(NewProgramRequest, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NewProgramRequest();

                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('periodLength')) {
                    obj['periodLength'] = _ApiClient2.default.convertToType(data['periodLength'], 'Number');
                }
                if (data.hasOwnProperty('successFee')) {
                    obj['successFee'] = _ApiClient2.default.convertToType(data['successFee'], 'Number');
                }
                if (data.hasOwnProperty('stopOutLevel')) {
                    obj['stopOutLevel'] = _ApiClient2.default.convertToType(data['stopOutLevel'], 'Number');
                }
                if (data.hasOwnProperty('leverage')) {
                    obj['leverage'] = _ApiClient2.default.convertToType(data['leverage'], 'Number');
                }
                if (data.hasOwnProperty('brokerAccountTypeId')) {
                    obj['brokerAccountTypeId'] = _ApiClient2.default.convertToType(data['brokerAccountTypeId'], 'String');
                }
                if (data.hasOwnProperty('signalSuccessFee')) {
                    obj['signalSuccessFee'] = _ApiClient2.default.convertToType(data['signalSuccessFee'], 'Number');
                }
                if (data.hasOwnProperty('signalSubscriptionFee')) {
                    obj['signalSubscriptionFee'] = _ApiClient2.default.convertToType(data['signalSubscriptionFee'], 'Number');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('entryFee')) {
                    obj['entryFee'] = _ApiClient2.default.convertToType(data['entryFee'], 'Number');
                }
                if (data.hasOwnProperty('depositAmount')) {
                    obj['depositAmount'] = _ApiClient2.default.convertToType(data['depositAmount'], 'Number');
                }
                if (data.hasOwnProperty('depositWalletId')) {
                    obj['depositWalletId'] = _ApiClient2.default.convertToType(data['depositWalletId'], 'String');
                }
            }
            return obj;
        }
    }]);

    return NewProgramRequest;
}();

NewProgramRequest.CurrencyEnum = {

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
exports.default = NewProgramRequest;