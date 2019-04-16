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
 * @interface ConvertingDetails
 */

/**
 *
 * @name ConvertingDetails#currencyTo
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name ConvertingDetails#currencyToName
 * @type {String}
 */
/**
 *
 * @name ConvertingDetails#amountTo
 * @type {Number}
 */
/**
 *
 * @name ConvertingDetails#rateValue
 * @type {Number}
 */
/**
 *
 * @name ConvertingDetails#currencyToLogo
 * @type {String}
 */

var ConvertingDetails = function () {
    function ConvertingDetails() {
        _classCallCheck(this, ConvertingDetails);

        this.currencyTo = undefined;
        this.currencyToName = undefined;
        this.amountTo = undefined;
        this.rateValue = undefined;
        this.currencyToLogo = undefined;
    }

    _createClass(ConvertingDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ConvertingDetails();

                if (data.hasOwnProperty('currencyTo')) {
                    obj['currencyTo'] = _ApiClient2.default.convertToType(data['currencyTo'], 'String');
                }
                if (data.hasOwnProperty('currencyToName')) {
                    obj['currencyToName'] = _ApiClient2.default.convertToType(data['currencyToName'], 'String');
                }
                if (data.hasOwnProperty('amountTo')) {
                    obj['amountTo'] = _ApiClient2.default.convertToType(data['amountTo'], 'Number');
                }
                if (data.hasOwnProperty('rateValue')) {
                    obj['rateValue'] = _ApiClient2.default.convertToType(data['rateValue'], 'Number');
                }
                if (data.hasOwnProperty('currencyToLogo')) {
                    obj['currencyToLogo'] = _ApiClient2.default.convertToType(data['currencyToLogo'], 'String');
                }
            }
            return obj;
        }
    }]);

    return ConvertingDetails;
}();

ConvertingDetails.CurrencyToEnum = {

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
exports.default = ConvertingDetails;