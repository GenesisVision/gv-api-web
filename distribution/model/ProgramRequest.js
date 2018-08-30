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
* The ProgramRequest model module.
* @module model/ProgramRequest
* @version v1.0
*/
var ProgramRequest = function () {
    /**
    * Constructs a new <code>ProgramRequest</code>.
    * @alias module:model/ProgramRequest
    * @class
    */

    function ProgramRequest() {
        _classCallCheck(this, ProgramRequest);

        this.id = undefined;
        this.programId = undefined;
        this.date = undefined;
        this.value = undefined;
        this.type = undefined;
        this.status = undefined;
        this.logo = undefined;
        this.canCancelRequest = undefined;
    }

    /**
    * Constructs a <code>ProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramRequest} obj Optional instance to populate.
    * @return {module:model/ProgramRequest} The populated <code>ProgramRequest</code> instance.
    */


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
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('canCancelRequest')) {
                    obj['canCancelRequest'] = _ApiClient2.default.convertToType(data['canCancelRequest'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * @member {String} programId
        */

        /**
        * @member {Date} date
        */

        /**
        * @member {Number} value
        */

        /**
        * @member {module:model/ProgramRequest.TypeEnum} type
        */

        /**
        * @member {module:model/ProgramRequest.StatusEnum} status
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {Boolean} canCancelRequest
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>status</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ProgramRequest;
}();

ProgramRequest.TypeEnum = {

    /**
     * value: "Invest"
     * @const
     */
    "Invest": "Invest",

    /**
     * value: "Withdrawal"
     * @const
     */
    "Withdrawal": "Withdrawal"
};
ProgramRequest.StatusEnum = {

    /**
     * value: "New"
     * @const
     */
    "New": "New",

    /**
     * value: "Executed"
     * @const
     */
    "Executed": "Executed",

    /**
     * value: "Cancelled"
     * @const
     */
    "Cancelled": "Cancelled"
};
exports.default = ProgramRequest;