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
* The CreateWithdrawalRequestModel model module.
* @module model/CreateWithdrawalRequestModel
* @version v1.0
*/
var CreateWithdrawalRequestModel = function () {
    /**
    * Constructs a new <code>CreateWithdrawalRequestModel</code>.
    * @alias module:model/CreateWithdrawalRequestModel
    * @class
    */

    function CreateWithdrawalRequestModel() {
        _classCallCheck(this, CreateWithdrawalRequestModel);

        this.amount = undefined;
        this.currency = undefined;
        this.address = undefined;
        this.twoFactorCode = undefined;
    }

    /**
    * Constructs a <code>CreateWithdrawalRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateWithdrawalRequestModel} obj Optional instance to populate.
    * @return {module:model/CreateWithdrawalRequestModel} The populated <code>CreateWithdrawalRequestModel</code> instance.
    */


    _createClass(CreateWithdrawalRequestModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CreateWithdrawalRequestModel();

                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], 'String');
                }
                if (data.hasOwnProperty('twoFactorCode')) {
                    obj['twoFactorCode'] = _ApiClient2.default.convertToType(data['twoFactorCode'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {Number} amount
        */

        /**
        * @member {module:model/CreateWithdrawalRequestModel.CurrencyEnum} currency
        */

        /**
        * @member {String} address
        */

        /**
        * @member {String} twoFactorCode
        */


        /**
        * Allowed values for the <code>currency</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return CreateWithdrawalRequestModel;
}();

CreateWithdrawalRequestModel.CurrencyEnum = {

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",

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
     * value: "XRP"
     * @const
     */
    "XRP": "XRP",

    /**
     * value: "BCH"
     * @const
     */
    "BCH": "BCH",

    /**
     * value: "LTC"
     * @const
     */
    "LTC": "LTC",

    /**
     * value: "DOGE"
     * @const
     */
    "DOGE": "DOGE",

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
exports.default = CreateWithdrawalRequestModel;