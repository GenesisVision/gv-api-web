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

var _InvestToProgram = require('../model/InvestToProgram');

var _InvestToProgram2 = _interopRequireDefault(_InvestToProgram);

var _NewProgramRequest = require('../model/NewProgramRequest');

var _NewProgramRequest2 = _interopRequireDefault(_NewProgramRequest);

var _WalletsViewModel = require('../model/WalletsViewModel');

var _WalletsViewModel2 = _interopRequireDefault(_WalletsViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Program service.
* @module api/ProgramApi
* @version v1.0
*/
var ProgramApi = function () {

  /**
  * Constructs a new ProgramApi. 
  * @alias module:api/ProgramApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProgramApi(apiClient) {
    _classCallCheck(this, ProgramApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Cancel investment request
   * @param {String} authorization JWT access token
   * @param {Object} opts Optional parameters
   * @param {String} opts.requestId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(ProgramApi, [{
    key: 'v10ProgramCancelInvestmentRequestPostWithHttpInfo',
    value: function v10ProgramCancelInvestmentRequestPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramCancelInvestmentRequestPost");
      }

      var pathParams = {};
      var queryParams = {
        'requestId': opts['requestId']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/program/cancelInvestmentRequest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Cancel investment request
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ProgramCancelInvestmentRequestPost',
    value: function v10ProgramCancelInvestmentRequestPost(authorization, opts) {
      return this.v10ProgramCancelInvestmentRequestPostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a investment program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/NewProgramRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ProgramCreatePostWithHttpInfo',
    value: function v10ProgramCreatePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramCreatePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/program/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a investment program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/NewProgramRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ProgramCreatePost',
    value: function v10ProgramCreatePost(authorization, opts) {
      return this.v10ProgramCreatePostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Invest to program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/InvestToProgram} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletsViewModel} and HTTP response
     */

  }, {
    key: 'v10ProgramInvestPostWithHttpInfo',
    value: function v10ProgramInvestPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramInvestPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _WalletsViewModel2.default;

      return this.apiClient.callApi('/v1.0/program/invest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Invest to program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/InvestToProgram} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletsViewModel}
     */

  }, {
    key: 'v10ProgramInvestPost',
    value: function v10ProgramInvestPost(authorization, opts) {
      return this.v10ProgramInvestPostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProgramApi;
}();

exports.default = ProgramApi;