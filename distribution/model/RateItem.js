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
* The RateItem model module.
* @module model/RateItem
* @version v1.0
*/
var RateItem = function () {
    /**
    * Constructs a new <code>RateItem</code>.
    * @alias module:model/RateItem
    * @class
    */

    function RateItem() {
        _classCallCheck(this, RateItem);

        this.currency = undefined;
        this.rate = undefined;
    }

    /**
    * Constructs a <code>RateItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RateItem} obj Optional instance to populate.
    * @return {module:model/RateItem} The populated <code>RateItem</code> instance.
    */


    _createClass(RateItem, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new RateItem();

                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('rate')) {
                    obj['rate'] = _ApiClient2.default.convertToType(data['rate'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {module:model/RateItem.CurrencyEnum} currency
        */

        /**
        * @member {Number} rate
        */


        /**
        * Allowed values for the <code>currency</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return RateItem;
}();

RateItem.CurrencyEnum = {

    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

    /**
     * value: "ETH"
     * @const
     */
    "ETH": "ETH",

    /**
     * value: "BTC"
     * @const
     */
    "BTC": "BTC",

    /**
     * value: "ADA"
     * @const
     */
    "ADA": "ADA",

    /**
     * value: "USDT"
     * @const
     */
    "USDT": "USDT",

    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",

    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR"
};
exports.default = RateItem;