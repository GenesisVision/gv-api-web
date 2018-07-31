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
* The LoginViewModel model module.
* @module model/LoginViewModel
* @version v1.0
*/
var LoginViewModel = function () {
    /**
    * Constructs a new <code>LoginViewModel</code>.
    * @alias module:model/LoginViewModel
    * @class
    * @param email {String} 
    * @param password {String} 
    */

    function LoginViewModel(email, password) {
        _classCallCheck(this, LoginViewModel);

        this.email = undefined;
        this.password = undefined;
        this.rememberMe = undefined;
        this.twoFactorCode = undefined;
        this.recoveryCode = undefined;


        this['email'] = email;this['password'] = password;
    }

    /**
    * Constructs a <code>LoginViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoginViewModel} obj Optional instance to populate.
    * @return {module:model/LoginViewModel} The populated <code>LoginViewModel</code> instance.
    */


    _createClass(LoginViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoginViewModel();

                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('password')) {
                    obj['password'] = _ApiClient2.default.convertToType(data['password'], 'String');
                }
                if (data.hasOwnProperty('rememberMe')) {
                    obj['rememberMe'] = _ApiClient2.default.convertToType(data['rememberMe'], 'Boolean');
                }
                if (data.hasOwnProperty('twoFactorCode')) {
                    obj['twoFactorCode'] = _ApiClient2.default.convertToType(data['twoFactorCode'], 'String');
                }
                if (data.hasOwnProperty('recoveryCode')) {
                    obj['recoveryCode'] = _ApiClient2.default.convertToType(data['recoveryCode'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} email
        */

        /**
        * @member {String} password
        */

        /**
        * @member {Boolean} rememberMe
        */

        /**
        * @member {String} twoFactorCode
        */

        /**
        * @member {String} recoveryCode
        */

    }]);

    return LoginViewModel;
}();

exports.default = LoginViewModel;