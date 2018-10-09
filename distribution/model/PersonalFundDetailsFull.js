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
* The PersonalFundDetailsFull model module.
* @module model/PersonalFundDetailsFull
* @version v1.0
*/
var PersonalFundDetailsFull = function () {
    /**
    * Constructs a new <code>PersonalFundDetailsFull</code>.
    * @alias module:model/PersonalFundDetailsFull
    * @class
    */

    function PersonalFundDetailsFull() {
        _classCallCheck(this, PersonalFundDetailsFull);

        this.isFavorite = undefined;
        this.isInvested = undefined;
        this.isOwnProgram = undefined;
        this.value = undefined;
        this.profit = undefined;
        this.status = undefined;
    }

    /**
    * Constructs a <code>PersonalFundDetailsFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PersonalFundDetailsFull} obj Optional instance to populate.
    * @return {module:model/PersonalFundDetailsFull} The populated <code>PersonalFundDetailsFull</code> instance.
    */


    _createClass(PersonalFundDetailsFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PersonalFundDetailsFull();

                if (data.hasOwnProperty('isFavorite')) {
                    obj['isFavorite'] = _ApiClient2.default.convertToType(data['isFavorite'], 'Boolean');
                }
                if (data.hasOwnProperty('isInvested')) {
                    obj['isInvested'] = _ApiClient2.default.convertToType(data['isInvested'], 'Boolean');
                }
                if (data.hasOwnProperty('isOwnProgram')) {
                    obj['isOwnProgram'] = _ApiClient2.default.convertToType(data['isOwnProgram'], 'Boolean');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {Boolean} isFavorite
        */

        /**
        * @member {Boolean} isInvested
        */

        /**
        * @member {Boolean} isOwnProgram
        */

        /**
        * @member {Number} value
        */

        /**
        * @member {Number} profit
        */

        /**
        * @member {module:model/PersonalFundDetailsFull.StatusEnum} status
        */


        /**
        * Allowed values for the <code>status</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return PersonalFundDetailsFull;
}();

PersonalFundDetailsFull.StatusEnum = {

    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",

    /**
     * value: "Investing"
     * @const
     */
    "Investing": "Investing",

    /**
     * value: "Withdrawing"
     * @const
     */
    "Withdrawing": "Withdrawing",

    /**
     * value: "Ended"
     * @const
     */
    "Ended": "Ended"
};
exports.default = PersonalFundDetailsFull;