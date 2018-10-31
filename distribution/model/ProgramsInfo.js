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
* The ProgramsInfo model module.
* @module model/ProgramsInfo
* @version v1.0
*/
var ProgramsInfo = function () {
    /**
    * Constructs a new <code>ProgramsInfo</code>.
    * @alias module:model/ProgramsInfo
    * @class
    */

    function ProgramsInfo() {
        _classCallCheck(this, ProgramsInfo);

        this.managerProgramInvestment = undefined;
        this.managerMaxEntryFee = undefined;
        this.managerMaxSuccessFee = undefined;
        this.managerFundInvestment = undefined;
        this.managerMaxExitFee = undefined;
        this.periods = undefined;
    }

    /**
    * Constructs a <code>ProgramsInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramsInfo} obj Optional instance to populate.
    * @return {module:model/ProgramsInfo} The populated <code>ProgramsInfo</code> instance.
    */


    _createClass(ProgramsInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramsInfo();

                if (data.hasOwnProperty('managerProgramInvestment')) {
                    obj['managerProgramInvestment'] = _ApiClient2.default.convertToType(data['managerProgramInvestment'], 'Number');
                }
                if (data.hasOwnProperty('managerMaxEntryFee')) {
                    obj['managerMaxEntryFee'] = _ApiClient2.default.convertToType(data['managerMaxEntryFee'], 'Number');
                }
                if (data.hasOwnProperty('managerMaxSuccessFee')) {
                    obj['managerMaxSuccessFee'] = _ApiClient2.default.convertToType(data['managerMaxSuccessFee'], 'Number');
                }
                if (data.hasOwnProperty('managerFundInvestment')) {
                    obj['managerFundInvestment'] = _ApiClient2.default.convertToType(data['managerFundInvestment'], 'Number');
                }
                if (data.hasOwnProperty('managerMaxExitFee')) {
                    obj['managerMaxExitFee'] = _ApiClient2.default.convertToType(data['managerMaxExitFee'], 'Number');
                }
                if (data.hasOwnProperty('periods')) {
                    obj['periods'] = _ApiClient2.default.convertToType(data['periods'], ['Number']);
                }
            }
            return obj;
        }

        /**
        * @member {Number} managerProgramInvestment
        */

        /**
        * @member {Number} managerMaxEntryFee
        */

        /**
        * @member {Number} managerMaxSuccessFee
        */

        /**
        * @member {Number} managerFundInvestment
        */

        /**
        * @member {Number} managerMaxExitFee
        */

        /**
        * @member {Array.<Number>} periods
        */

    }]);

    return ProgramsInfo;
}();

exports.default = ProgramsInfo;