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
 * @interface ProgramRequest
 */

/**
 *
 * @name ProgramRequest#id
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#programId
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#date
 * @type {Date}
 */
/**
 *
 * @name ProgramRequest#value
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#valueGvt
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#feeEntry
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#feeExit
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#currency
 * @type {("BTC"|"Undefined"|"GVT"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name ProgramRequest#fundWithdrawPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#type
 * @type {("Invest"|"Withdrawal")}
 */
/**
 *
 * @name ProgramRequest#status
 * @type {("New"|"Executed"|"Cancelled")}
 */
/**
 *
 * @name ProgramRequest#logo
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#title
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#color
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#canCancelRequest
 * @type {Boolean}
 */
/**
 *
 * @name ProgramRequest#programType
 * @type {("Program"|"Fund")}
 */

var ProgramRequest = function () {
    function ProgramRequest() {
        _classCallCheck(this, ProgramRequest);

        this.id = undefined;
        this.programId = undefined;
        this.date = undefined;
        this.value = undefined;
        this.valueGvt = undefined;
        this.feeEntry = undefined;
        this.feeExit = undefined;
        this.currency = undefined;
        this.fundWithdrawPercent = undefined;
        this.type = undefined;
        this.status = undefined;
        this.logo = undefined;
        this.title = undefined;
        this.color = undefined;
        this.canCancelRequest = undefined;
        this.programType = undefined;
    }

    _createClass(ProgramRequest, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramRequest();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('programId')) {
                    obj['programId'] = _ApiClient2.default.convertToType(data['programId'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('valueGvt')) {
                    obj['valueGvt'] = _ApiClient2.default.convertToType(data['valueGvt'], 'Number');
                }
                if (data.hasOwnProperty('feeEntry')) {
                    obj['feeEntry'] = _ApiClient2.default.convertToType(data['feeEntry'], 'Number');
                }
                if (data.hasOwnProperty('feeExit')) {
                    obj['feeExit'] = _ApiClient2.default.convertToType(data['feeExit'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('fundWithdrawPercent')) {
                    obj['fundWithdrawPercent'] = _ApiClient2.default.convertToType(data['fundWithdrawPercent'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('color')) {
                    obj['color'] = _ApiClient2.default.convertToType(data['color'], 'String');
                }
                if (data.hasOwnProperty('canCancelRequest')) {
                    obj['canCancelRequest'] = _ApiClient2.default.convertToType(data['canCancelRequest'], 'Boolean');
                }
                if (data.hasOwnProperty('programType')) {
                    obj['programType'] = _ApiClient2.default.convertToType(data['programType'], 'String');
                }
            }
            return obj;
        }
    }]);

    return ProgramRequest;
}();

ProgramRequest.CurrencyEnum = {

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
ProgramRequest.TypeEnum = {

    "Invest": "Invest",

    "Withdrawal": "Withdrawal"
};
ProgramRequest.StatusEnum = {

    "New": "New",

    "Executed": "Executed",

    "Cancelled": "Cancelled"
};
ProgramRequest.ProgramTypeEnum = {

    "Program": "Program",

    "Fund": "Fund"
};
exports.default = ProgramRequest;