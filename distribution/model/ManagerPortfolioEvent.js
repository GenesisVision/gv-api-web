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
* The ManagerPortfolioEvent model module.
* @module model/ManagerPortfolioEvent
* @version v1.0
*/
var ManagerPortfolioEvent = function () {
    /**
    * Constructs a new <code>ManagerPortfolioEvent</code>.
    * @alias module:model/ManagerPortfolioEvent
    * @class
    */

    function ManagerPortfolioEvent() {
        _classCallCheck(this, ManagerPortfolioEvent);

        this.assetId = undefined;
        this.date = undefined;
        this.title = undefined;
        this.value = undefined;
        this.feeValue = undefined;
        this.profitPercent = undefined;
        this.currency = undefined;
        this.type = undefined;
        this.programType = undefined;
        this.logo = undefined;
        this.description = undefined;
        this.periodNumber = undefined;
    }

    /**
    * Constructs a <code>ManagerPortfolioEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerPortfolioEvent} obj Optional instance to populate.
    * @return {module:model/ManagerPortfolioEvent} The populated <code>ManagerPortfolioEvent</code> instance.
    */


    _createClass(ManagerPortfolioEvent, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ManagerPortfolioEvent();

                if (data.hasOwnProperty('assetId')) {
                    obj['assetId'] = _ApiClient2.default.convertToType(data['assetId'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('feeValue')) {
                    obj['feeValue'] = _ApiClient2.default.convertToType(data['feeValue'], 'Number');
                }
                if (data.hasOwnProperty('profitPercent')) {
                    obj['profitPercent'] = _ApiClient2.default.convertToType(data['profitPercent'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('programType')) {
                    obj['programType'] = _ApiClient2.default.convertToType(data['programType'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('periodNumber')) {
                    obj['periodNumber'] = _ApiClient2.default.convertToType(data['periodNumber'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {String} assetId
        */

        /**
        * @member {Date} date
        */

        /**
        * @member {String} title
        */

        /**
        * @member {Number} value
        */

        /**
        * @member {Number} feeValue
        */

        /**
        * @member {Number} profitPercent
        */

        /**
        * @member {module:model/ManagerPortfolioEvent.CurrencyEnum} currency
        */

        /**
        * @member {module:model/ManagerPortfolioEvent.TypeEnum} type
        */

        /**
        * @member {module:model/ManagerPortfolioEvent.ProgramTypeEnum} programType
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {String} description
        */

        /**
        * @member {Number} periodNumber
        */


        /**
        * Allowed values for the <code>currency</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>programType</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ManagerPortfolioEvent;
}();

ManagerPortfolioEvent.CurrencyEnum = {

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
ManagerPortfolioEvent.TypeEnum = {

    /**
     * value: "All"
     * @const
     */
    "All": "All",

    /**
     * value: "AssetStarted"
     * @const
     */
    "AssetStarted": "AssetStarted",

    /**
     * value: "ProgramPeriodStats"
     * @const
     */
    "ProgramPeriodStats": "ProgramPeriodStats",

    /**
     * value: "ProgramPeriodEnds"
     * @const
     */
    "ProgramPeriodEnds": "ProgramPeriodEnds",

    /**
     * value: "InvestorInvest"
     * @const
     */
    "InvestorInvest": "InvestorInvest",

    /**
     * value: "InvestorWithdraw"
     * @const
     */
    "InvestorWithdraw": "InvestorWithdraw",

    /**
     * value: "ManagerInvest"
     * @const
     */
    "ManagerInvest": "ManagerInvest",

    /**
     * value: "ManagerWithdraw"
     * @const
     */
    "ManagerWithdraw": "ManagerWithdraw",

    /**
     * value: "AssetFinished"
     * @const
     */
    "AssetFinished": "AssetFinished"
};
ManagerPortfolioEvent.ProgramTypeEnum = {

    /**
     * value: "Program"
     * @const
     */
    "Program": "Program",

    /**
     * value: "Fund"
     * @const
     */
    "Fund": "Fund"
};
exports.default = ManagerPortfolioEvent;