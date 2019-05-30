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
 * @interface SignalSubscriber
 */

/**
 *
 * @name SignalSubscriber#number
 * @type {Number}
 */
/**
 *
 * @name SignalSubscriber#trades
 * @type {Number}
 */
/**
 *
 * @name SignalSubscriber#profit
 * @type {Number}
 */
/**
 *
 * @name SignalSubscriber#volume
 * @type {Number}
 */
/**
 *
 * @name SignalSubscriber#subscriptionDate
 * @type {Date}
 */
/**
 *
 * @name SignalSubscriber#unsubscriptionDate
 * @type {Date}
 */
/**
 *
 * @name SignalSubscriber#status
 * @type SignalSubscriberStatusEnum
 */

var SignalSubscriber = function () {
    function SignalSubscriber() {
        _classCallCheck(this, SignalSubscriber);

        this.number = undefined;
        this.trades = undefined;
        this.profit = undefined;
        this.volume = undefined;
        this.subscriptionDate = undefined;
        this.unsubscriptionDate = undefined;
        this.status = undefined;
    }

    _createClass(SignalSubscriber, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SignalSubscriber();

                if (data.hasOwnProperty('number')) {
                    obj['number'] = _ApiClient2.default.convertToType(data['number'], 'Number');
                }
                if (data.hasOwnProperty('trades')) {
                    obj['trades'] = _ApiClient2.default.convertToType(data['trades'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('volume')) {
                    obj['volume'] = _ApiClient2.default.convertToType(data['volume'], 'Number');
                }
                if (data.hasOwnProperty('subscriptionDate')) {
                    obj['subscriptionDate'] = _ApiClient2.default.convertToType(data['subscriptionDate'], 'Date');
                }
                if (data.hasOwnProperty('unsubscriptionDate')) {
                    obj['unsubscriptionDate'] = _ApiClient2.default.convertToType(data['unsubscriptionDate'], 'Date');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
            }
            return obj;
        }
    }]);

    return SignalSubscriber;
}();

/**
 * @typedef SignalSubscriberStatusEnum 
 * @type {("Active"|"Ended")}
 */


SignalSubscriber.StatusEnum = {

    "Active": "Active",

    "Ended": "Ended"
};
exports.default = SignalSubscriber;