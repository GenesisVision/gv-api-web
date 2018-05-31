'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Core API
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: v1
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
* The TwoFactorCodeModel model module.
* @module model/TwoFactorCodeModel
* @version v1
*/
var TwoFactorCodeModel = function () {
    /**
    * Constructs a new <code>TwoFactorCodeModel</code>.
    * @alias module:model/TwoFactorCodeModel
    * @class
    * @param twoFactorCode {String} 
    * @param password {String} 
    */

    function TwoFactorCodeModel(twoFactorCode, password) {
        _classCallCheck(this, TwoFactorCodeModel);

        this.twoFactorCode = undefined;
        this.password = undefined;


        this['twoFactorCode'] = twoFactorCode;this['password'] = password;
    }

    /**
    * Constructs a <code>TwoFactorCodeModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TwoFactorCodeModel} obj Optional instance to populate.
    * @return {module:model/TwoFactorCodeModel} The populated <code>TwoFactorCodeModel</code> instance.
    */


    _createClass(TwoFactorCodeModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new TwoFactorCodeModel();

                if (data.hasOwnProperty('twoFactorCode')) {
                    obj['twoFactorCode'] = _ApiClient2.default.convertToType(data['twoFactorCode'], 'String');
                }
                if (data.hasOwnProperty('password')) {
                    obj['password'] = _ApiClient2.default.convertToType(data['password'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} twoFactorCode
        */

        /**
        * @member {String} password
        */

    }]);

    return TwoFactorCodeModel;
}();

exports.default = TwoFactorCodeModel;