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

var _ErrorMessage = require('./ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ErrorViewModel
 */

/**
 *
 * @name ErrorViewModel#errors
 * @type {[ErrorMessage]}
 */
/**
 *
 * @name ErrorViewModel#code
 * @type ErrorViewModelCodeEnum
 */

var ErrorViewModel = function () {
    function ErrorViewModel() {
        _classCallCheck(this, ErrorViewModel);

        this.errors = undefined;
        this.code = undefined;
    }

    _createClass(ErrorViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ErrorViewModel();

                if (data.hasOwnProperty('errors')) {
                    obj['errors'] = _ApiClient2.default.convertToType(data['errors'], [_ErrorMessage2.default]);
                }
                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
            }
            return obj;
        }
    }]);

    return ErrorViewModel;
}();

/**
 * @typedef ErrorViewModelCodeEnum 
 * @type {("InternalServerError"|"ValidationError"|"RequiresTwoFactor"|"WrongCaptcha")}
 */


ErrorViewModel.CodeEnum = {

    "InternalServerError": "InternalServerError",

    "ValidationError": "ValidationError",

    "RequiresTwoFactor": "RequiresTwoFactor",

    "WrongCaptcha": "WrongCaptcha"
};
exports.default = ErrorViewModel;