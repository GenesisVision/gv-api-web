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
* The NewProgramRequest model module.
* @module model/NewProgramRequest
* @version v1.0
*/
var NewProgramRequest = function () {
    /**
    * Constructs a new <code>NewProgramRequest</code>.
    * @alias module:model/NewProgramRequest
    * @class
    */

    function NewProgramRequest() {
        _classCallCheck(this, NewProgramRequest);

        this.currency = undefined;
        this.periodLength = undefined;
        this.successFee = undefined;
        this.stopOutLevel = undefined;
        this.leverage = undefined;
        this.title = undefined;
        this.description = undefined;
        this.logo = undefined;
        this.brokerAccountTypeId = undefined;
        this.entryFee = undefined;
    }

    /**
    * Constructs a <code>NewProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NewProgramRequest} obj Optional instance to populate.
    * @return {module:model/NewProgramRequest} The populated <code>NewProgramRequest</code> instance.
    */


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
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('brokerAccountTypeId')) {
                    obj['brokerAccountTypeId'] = _ApiClient2.default.convertToType(data['brokerAccountTypeId'], 'String');
                }
                if (data.hasOwnProperty('entryFee')) {
                    obj['entryFee'] = _ApiClient2.default.convertToType(data['entryFee'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {module:model/NewProgramRequest.CurrencyEnum} currency
        */

        /**
        * @member {Number} periodLength
        */

        /**
        * @member {Number} successFee
        */

        /**
        * @member {Number} stopOutLevel
        */

        /**
        * @member {Number} leverage
        */

        /**
        * @member {String} title
        */

        /**
        * @member {String} description
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {String} brokerAccountTypeId
        */

        /**
        * @member {Number} entryFee
        */


        /**
        * Allowed values for the <code>currency</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return NewProgramRequest;
}();

NewProgramRequest.CurrencyEnum = {

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
exports.default = NewProgramRequest;