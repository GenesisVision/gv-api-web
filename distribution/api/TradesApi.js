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

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _TradesViewModel = require('../model/TradesViewModel');

var _TradesViewModel2 = _interopRequireDefault(_TradesViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Trades service.
* @module api/TradesApi
* @version v1
*/
var TradesApi = function () {

  /**
  * Constructs a new TradesApi. 
  * @alias module:api/TradesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TradesApi(apiClient) {
    _classCallCheck(this, TradesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get trades by IPFS hash id
   * @param {module:model/String} type 
   * @param {Object} opts Optional parameters
   * @param {String} opts.ipfsHashId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TradesViewModel} and HTTP response
   */


  _createClass(TradesApi, [{
    key: 'apiTradesIpfsHistoryGetWithHttpInfo',
    value: function apiTradesIpfsHistoryGetWithHttpInfo(type, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling apiTradesIpfsHistoryGet");
      }

      var pathParams = {};
      var queryParams = {
        'ipfsHashId': opts['ipfsHashId'],
        'type': type
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _TradesViewModel2.default;

      return this.apiClient.callApi('/api/trades/ipfsHistory', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get trades by IPFS hash id
     * @param {module:model/String} type 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ipfsHashId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TradesViewModel}
     */

  }, {
    key: 'apiTradesIpfsHistoryGet',
    value: function apiTradesIpfsHistoryGet(type, opts) {
      return this.apiTradesIpfsHistoryGetWithHttpInfo(type, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TradesApi;
}();

exports.default = TradesApi;