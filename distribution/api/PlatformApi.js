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

var _CaptchaModel = require('../model/CaptchaModel');

var _CaptchaModel2 = _interopRequireDefault(_CaptchaModel);

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _PlatformInfo = require('../model/PlatformInfo');

var _PlatformInfo2 = _interopRequireDefault(_PlatformInfo);

var _PlatformStatistic = require('../model/PlatformStatistic');

var _PlatformStatistic2 = _interopRequireDefault(_PlatformStatistic);

var _ProgramsLevelsInfo = require('../model/ProgramsLevelsInfo');

var _ProgramsLevelsInfo2 = _interopRequireDefault(_ProgramsLevelsInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Platform service.
* @class PlatformApi
* @version v1.0
*/
var PlatformApi = function () {

  /**
  * Constructs a new PlatformApi. 
  * @function PlatformApi#constructor
  * @param {ApiClient} apiClient Optional API client implementation to use,
  * @return {PlatformApi}
  */
  function PlatformApi(apiClient) {
    _classCallCheck(this, PlatformApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  _createClass(PlatformApi, [{
    key: 'v10PlatformInfoGetWithHttpInfo',
    value: function v10PlatformInfoGetWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _PlatformInfo2.default;

      return this.apiClient.callApi('/v1.0/platform/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Platform info
     * @function PlatformApi#v10PlatformInfoGet
     * @return {CancelablePromise<PlatformInfo>} a Promise, with an object containing data of type PlatformInfo and HTTP response
     */

  }, {
    key: 'v10PlatformInfoGet',
    value: function v10PlatformInfoGet() {
      return this.v10PlatformInfoGetWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10PlatformLevelsGetWithHttpInfo',
    value: function v10PlatformLevelsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'currency': opts['currency']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramsLevelsInfo2.default;

      return this.apiClient.callApi('/v1.0/platform/levels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Investment programs levels
     * @function PlatformApi#v10PlatformLevelsGet
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.currency] 
     * @return {CancelablePromise<ProgramsLevelsInfo>} a Promise, with an object containing data of type ProgramsLevelsInfo and HTTP response
     */

  }, {
    key: 'v10PlatformLevelsGet',
    value: function v10PlatformLevelsGet(opts) {
      return this.v10PlatformLevelsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10PlatformRiskcontrolGetWithHttpInfo',
    value: function v10PlatformRiskcontrolGetWithHttpInfo(route, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'route' is set
      if (route === undefined || route === null) {
        throw new Error("Missing the required parameter 'route' when calling v10PlatformRiskcontrolGet");
      }

      var pathParams = {};
      var queryParams = {
        'Route': route,
        'Device': opts['device'],
        'Version': opts['version']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _CaptchaModel2.default;

      return this.apiClient.callApi('/v1.0/platform/riskcontrol', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Platform captcha details.
     * @function PlatformApi#v10PlatformRiskcontrolGet
     * @param {String} route 
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.device] 
     * @param {String} [opts.version] 
     * @return {CancelablePromise<CaptchaModel>} a Promise, with an object containing data of type CaptchaModel and HTTP response
     */

  }, {
    key: 'v10PlatformRiskcontrolGet',
    value: function v10PlatformRiskcontrolGet(route, opts) {
      return this.v10PlatformRiskcontrolGetWithHttpInfo(route, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10PlatformStatisticGetWithHttpInfo',
    value: function v10PlatformStatisticGetWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _PlatformStatistic2.default;

      return this.apiClient.callApi('/v1.0/platform/statistic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Platform statistic
     * @function PlatformApi#v10PlatformStatisticGet
     * @return {CancelablePromise<PlatformStatistic>} a Promise, with an object containing data of type PlatformStatistic and HTTP response
     */

  }, {
    key: 'v10PlatformStatisticGet',
    value: function v10PlatformStatisticGet() {
      return this.v10PlatformStatisticGetWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PlatformApi;
}();

exports.default = PlatformApi;