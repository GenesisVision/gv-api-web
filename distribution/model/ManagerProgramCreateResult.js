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

var _TwoFactorAuthenticator = require('./TwoFactorAuthenticator');

var _TwoFactorAuthenticator2 = _interopRequireDefault(_TwoFactorAuthenticator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ManagerProgramCreateResult
 */

/**
 *
 * @name ManagerProgramCreateResult#programId
 * @type {String}
 */
/**
 *
 * @name ManagerProgramCreateResult#twoFactorRequired
 * @type {Boolean}
 */
/**
 *
 * @name ManagerProgramCreateResult#twoFactor
 * @type {TwoFactorAuthenticator}
 */

var ManagerProgramCreateResult = function () {
    function ManagerProgramCreateResult() {
        _classCallCheck(this, ManagerProgramCreateResult);

        this.programId = undefined;
        this.twoFactorRequired = undefined;
        this.twoFactor = undefined;
    }

    _createClass(ManagerProgramCreateResult, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ManagerProgramCreateResult();

                if (data.hasOwnProperty('programId')) {
                    obj['programId'] = _ApiClient2.default.convertToType(data['programId'], 'String');
                }
                if (data.hasOwnProperty('twoFactorRequired')) {
                    obj['twoFactorRequired'] = _ApiClient2.default.convertToType(data['twoFactorRequired'], 'Boolean');
                }
                if (data.hasOwnProperty('twoFactor')) {
                    obj['twoFactor'] = _TwoFactorAuthenticator2.default.constructFromObject(data['twoFactor']);
                }
            }
            return obj;
        }
    }]);

    return ManagerProgramCreateResult;
}();

exports.default = ManagerProgramCreateResult;