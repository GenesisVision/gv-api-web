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
* The RegisterManagerViewModel model module.
* @module model/RegisterManagerViewModel
* @version v1.0
*/
var RegisterManagerViewModel = function () {
    /**
    * Constructs a new <code>RegisterManagerViewModel</code>.
    * @alias module:model/RegisterManagerViewModel
    * @class
    * @param userName {String} 
    * @param email {String} 
    * @param password {String} 
    */

    function RegisterManagerViewModel(userName, email, password) {
        _classCallCheck(this, RegisterManagerViewModel);

        this.userName = undefined;
        this.email = undefined;
        this.password = undefined;
        this.confirmPassword = undefined;


        this['userName'] = userName;this['email'] = email;this['password'] = password;
    }

    /**
    * Constructs a <code>RegisterManagerViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RegisterManagerViewModel} obj Optional instance to populate.
    * @return {module:model/RegisterManagerViewModel} The populated <code>RegisterManagerViewModel</code> instance.
    */


    _createClass(RegisterManagerViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new RegisterManagerViewModel();

                if (data.hasOwnProperty('userName')) {
                    obj['userName'] = _ApiClient2.default.convertToType(data['userName'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('password')) {
                    obj['password'] = _ApiClient2.default.convertToType(data['password'], 'String');
                }
                if (data.hasOwnProperty('confirmPassword')) {
                    obj['confirmPassword'] = _ApiClient2.default.convertToType(data['confirmPassword'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} userName
        */

        /**
        * @member {String} email
        */

        /**
        * @member {String} password
        */

        /**
        * @member {String} confirmPassword
        */

    }]);

    return RegisterManagerViewModel;
}();

exports.default = RegisterManagerViewModel;