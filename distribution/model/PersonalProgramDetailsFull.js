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
* The PersonalProgramDetailsFull model module.
* @module model/PersonalProgramDetailsFull
* @version v1.0
*/
var PersonalProgramDetailsFull = function () {
    /**
    * Constructs a new <code>PersonalProgramDetailsFull</code>.
    * @alias module:model/PersonalProgramDetailsFull
    * @class
    */

    function PersonalProgramDetailsFull() {
        _classCallCheck(this, PersonalProgramDetailsFull);

        this.isFavorite = undefined;
        this.isInvested = undefined;
        this.isOwnProgram = undefined;
        this.isReinvest = undefined;
        this.hasNotifications = undefined;
        this.invested = undefined;
        this.value = undefined;
        this.profit = undefined;
        this.investmentProgramStatus = undefined;
    }

    /**
    * Constructs a <code>PersonalProgramDetailsFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PersonalProgramDetailsFull} obj Optional instance to populate.
    * @return {module:model/PersonalProgramDetailsFull} The populated <code>PersonalProgramDetailsFull</code> instance.
    */


    _createClass(PersonalProgramDetailsFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PersonalProgramDetailsFull();

                if (data.hasOwnProperty('isFavorite')) {
                    obj['isFavorite'] = _ApiClient2.default.convertToType(data['isFavorite'], 'Boolean');
                }
                if (data.hasOwnProperty('isInvested')) {
                    obj['isInvested'] = _ApiClient2.default.convertToType(data['isInvested'], 'Boolean');
                }
                if (data.hasOwnProperty('isOwnProgram')) {
                    obj['isOwnProgram'] = _ApiClient2.default.convertToType(data['isOwnProgram'], 'Boolean');
                }
                if (data.hasOwnProperty('isReinvest')) {
                    obj['isReinvest'] = _ApiClient2.default.convertToType(data['isReinvest'], 'Boolean');
                }
                if (data.hasOwnProperty('hasNotifications')) {
                    obj['hasNotifications'] = _ApiClient2.default.convertToType(data['hasNotifications'], 'Boolean');
                }
                if (data.hasOwnProperty('invested')) {
                    obj['invested'] = _ApiClient2.default.convertToType(data['invested'], 'Number');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('investmentProgramStatus')) {
                    obj['investmentProgramStatus'] = _ApiClient2.default.convertToType(data['investmentProgramStatus'], 'String');
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
        * @member {Boolean} isReinvest
        */

        /**
        * @member {Boolean} hasNotifications
        */

        /**
        * @member {Number} invested
        */

        /**
        * @member {Number} value
        */

        /**
        * @member {Number} profit
        */

        /**
        * @member {module:model/PersonalProgramDetailsFull.InvestmentProgramStatusEnum} investmentProgramStatus
        */


        /**
        * Allowed values for the <code>investmentProgramStatus</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return PersonalProgramDetailsFull;
}();

PersonalProgramDetailsFull.InvestmentProgramStatusEnum = {

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
exports.default = PersonalProgramDetailsFull;