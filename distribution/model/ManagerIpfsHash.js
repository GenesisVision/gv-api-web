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
* The ManagerIpfsHash model module.
* @module model/ManagerIpfsHash
* @version v1.0
*/
var ManagerIpfsHash = function () {
    /**
    * Constructs a new <code>ManagerIpfsHash</code>.
    * @alias module:model/ManagerIpfsHash
    * @class
    */

    function ManagerIpfsHash() {
        _classCallCheck(this, ManagerIpfsHash);

        this.managerId = undefined;
        this.ipfsHash = undefined;
    }

    /**
    * Constructs a <code>ManagerIpfsHash</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerIpfsHash} obj Optional instance to populate.
    * @return {module:model/ManagerIpfsHash} The populated <code>ManagerIpfsHash</code> instance.
    */


    _createClass(ManagerIpfsHash, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ManagerIpfsHash();

                if (data.hasOwnProperty('managerId')) {
                    obj['managerId'] = _ApiClient2.default.convertToType(data['managerId'], 'String');
                }
                if (data.hasOwnProperty('ipfsHash')) {
                    obj['ipfsHash'] = _ApiClient2.default.convertToType(data['ipfsHash'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} managerId
        */

        /**
        * @member {String} ipfsHash
        */

    }]);

    return ManagerIpfsHash;
}();

exports.default = ManagerIpfsHash;