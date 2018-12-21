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

var _AndroidAppVersion = require('./AndroidAppVersion');

var _AndroidAppVersion2 = _interopRequireDefault(_AndroidAppVersion);

var _Facet = require('./Facet');

var _Facet2 = _interopRequireDefault(_Facet);

var _IOsAppVersion = require('./IOsAppVersion');

var _IOsAppVersion2 = _interopRequireDefault(_IOsAppVersion);

var _PlatformCurrency = require('./PlatformCurrency');

var _PlatformCurrency2 = _interopRequireDefault(_PlatformCurrency);

var _ProgramsInfo = require('./ProgramsInfo');

var _ProgramsInfo2 = _interopRequireDefault(_ProgramsInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface PlatformInfo
 */

/**
 *
 * @name PlatformInfo#iOSVersion
 * @type {IOsAppVersion}
 */
/**
 *
 * @name PlatformInfo#androidVersion
 * @type {AndroidAppVersion}
 */
/**
 *
 * @name PlatformInfo#programsFacets
 * @type {[Facet]}
 */
/**
 *
 * @name PlatformInfo#fundsFacets
 * @type {[Facet]}
 */
/**
 *
 * @name PlatformInfo#programsInfo
 * @type {ProgramsInfo}
 */
/**
 *
 * @name PlatformInfo#currencies
 * @type {[String]}
 */
/**
 *
 * @name PlatformInfo#platformCurrencies
 * @type {[PlatformCurrency]}
 */

var PlatformInfo = function () {
    function PlatformInfo() {
        _classCallCheck(this, PlatformInfo);

        this.iOSVersion = undefined;
        this.androidVersion = undefined;
        this.programsFacets = undefined;
        this.fundsFacets = undefined;
        this.programsInfo = undefined;
        this.currencies = undefined;
        this.platformCurrencies = undefined;
    }

    _createClass(PlatformInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PlatformInfo();

                if (data.hasOwnProperty('iOSVersion')) {
                    obj['iOSVersion'] = _IOsAppVersion2.default.constructFromObject(data['iOSVersion']);
                }
                if (data.hasOwnProperty('androidVersion')) {
                    obj['androidVersion'] = _AndroidAppVersion2.default.constructFromObject(data['androidVersion']);
                }
                if (data.hasOwnProperty('programsFacets')) {
                    obj['programsFacets'] = _ApiClient2.default.convertToType(data['programsFacets'], [_Facet2.default]);
                }
                if (data.hasOwnProperty('fundsFacets')) {
                    obj['fundsFacets'] = _ApiClient2.default.convertToType(data['fundsFacets'], [_Facet2.default]);
                }
                if (data.hasOwnProperty('programsInfo')) {
                    obj['programsInfo'] = _ProgramsInfo2.default.constructFromObject(data['programsInfo']);
                }
                if (data.hasOwnProperty('currencies')) {
                    obj['currencies'] = _ApiClient2.default.convertToType(data['currencies'], ['String']);
                }
                if (data.hasOwnProperty('platformCurrencies')) {
                    obj['platformCurrencies'] = _ApiClient2.default.convertToType(data['platformCurrencies'], [_PlatformCurrency2.default]);
                }
            }
            return obj;
        }
    }]);

    return PlatformInfo;
}();

exports.default = PlatformInfo;