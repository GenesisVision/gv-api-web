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

var _SignalSubscription = require('./SignalSubscription');

var _SignalSubscription2 = _interopRequireDefault(_SignalSubscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface PersonalSignalDetailsFull
 */

/**
 *
 * @name PersonalSignalDetailsFull#subscriptionDate
 * @type {Date}
 */
/**
 *
 * @name PersonalSignalDetailsFull#tradesCount
 * @type {Number}
 */
/**
 *
 * @name PersonalSignalDetailsFull#signalSubscription
 * @type {SignalSubscription}
 */
/**
 *
 * @name PersonalSignalDetailsFull#profit
 * @type {Number}
 */
/**
 *
 * @name PersonalSignalDetailsFull#isFavorite
 * @type {Boolean}
 */
/**
 *
 * @name PersonalSignalDetailsFull#isInvested
 * @type {Boolean}
 */

var PersonalSignalDetailsFull = function () {
    function PersonalSignalDetailsFull() {
        _classCallCheck(this, PersonalSignalDetailsFull);

        this.subscriptionDate = undefined;
        this.tradesCount = undefined;
        this.signalSubscription = undefined;
        this.profit = undefined;
        this.isFavorite = undefined;
        this.isInvested = undefined;
    }

    _createClass(PersonalSignalDetailsFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PersonalSignalDetailsFull();

                if (data.hasOwnProperty('subscriptionDate')) {
                    obj['subscriptionDate'] = _ApiClient2.default.convertToType(data['subscriptionDate'], 'Date');
                }
                if (data.hasOwnProperty('tradesCount')) {
                    obj['tradesCount'] = _ApiClient2.default.convertToType(data['tradesCount'], 'Number');
                }
                if (data.hasOwnProperty('signalSubscription')) {
                    obj['signalSubscription'] = _SignalSubscription2.default.constructFromObject(data['signalSubscription']);
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('isFavorite')) {
                    obj['isFavorite'] = _ApiClient2.default.convertToType(data['isFavorite'], 'Boolean');
                }
                if (data.hasOwnProperty('isInvested')) {
                    obj['isInvested'] = _ApiClient2.default.convertToType(data['isInvested'], 'Boolean');
                }
            }
            return obj;
        }
    }]);

    return PersonalSignalDetailsFull;
}();

exports.default = PersonalSignalDetailsFull;