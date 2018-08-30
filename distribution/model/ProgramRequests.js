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

var _ProgramRequest = require('./ProgramRequest');

var _ProgramRequest2 = _interopRequireDefault(_ProgramRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ProgramRequests model module.
* @module model/ProgramRequests
* @version v1.0
*/
var ProgramRequests = function () {
    /**
    * Constructs a new <code>ProgramRequests</code>.
    * @alias module:model/ProgramRequests
    * @class
    */

    function ProgramRequests() {
        _classCallCheck(this, ProgramRequests);

        this.requests = undefined;
        this.total = undefined;
        this.totalValue = undefined;
    }

    /**
    * Constructs a <code>ProgramRequests</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramRequests} obj Optional instance to populate.
    * @return {module:model/ProgramRequests} The populated <code>ProgramRequests</code> instance.
    */


    _createClass(ProgramRequests, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramRequests();

                if (data.hasOwnProperty('requests')) {
                    obj['requests'] = _ApiClient2.default.convertToType(data['requests'], [_ProgramRequest2.default]);
                }
                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
                if (data.hasOwnProperty('totalValue')) {
                    obj['totalValue'] = _ApiClient2.default.convertToType(data['totalValue'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/ProgramRequest>} requests
        */

        /**
        * @member {Number} total
        */

        /**
        * @member {Number} totalValue
        */

    }]);

    return ProgramRequests;
}();

exports.default = ProgramRequests;