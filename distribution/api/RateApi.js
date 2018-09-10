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

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _RatesModel = require('../model/RatesModel');

var _RatesModel2 = _interopRequireDefault(_RatesModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Rate service.
* @module api/RateApi
* @version v1.0
*/
var RateApi = function () {

  /**
  * Constructs a new RateApi. 
  * @alias module:api/RateApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RateApi(apiClient) {
    _classCallCheck(this, RateApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get rate
   * @param {String} from 
   * @param {String} to 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Number'} and HTTP response
   */


  _createClass(RateApi, [{
    key: 'v10RateByFromByToGetWithHttpInfo',
    value: function v10RateByFromByToGetWithHttpInfo(from, to) {
      var postBody = null;

      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling v10RateByFromByToGet");
      }

      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling v10RateByFromByToGet");
      }

      var pathParams = {
        'from': from,
        'to': to
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = 'Number';

      return this.apiClient.callApi('/v1.0/rate/{from}/{to}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get rate
     * @param {String} from 
     * @param {String} to 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Number'}
     */

  }, {
    key: 'v10RateByFromByToGet',
    value: function v10RateByFromByToGet(from, to) {
      return this.v10RateByFromByToGetWithHttpInfo(from, to).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get rates
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.from 
     * @param {Array.<String>} opts.to 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RatesModel} and HTTP response
     */

  }, {
    key: 'v10RateGetWithHttpInfo',
    value: function v10RateGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'from': this.apiClient.buildCollectionParam(opts['from'], 'multi'),
        'to': this.apiClient.buildCollectionParam(opts['to'], 'multi')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _RatesModel2.default;

      return this.apiClient.callApi('/v1.0/rate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get rates
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.from 
     * @param {Array.<String>} opts.to 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RatesModel}
     */

  }, {
    key: 'v10RateGet',
    value: function v10RateGet(opts) {
      return this.v10RateGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RateApi;
}();

exports.default = RateApi;