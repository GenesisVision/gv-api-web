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

var _AttachToSignalProviderInfo = require('../model/AttachToSignalProviderInfo');

var _AttachToSignalProviderInfo2 = _interopRequireDefault(_AttachToSignalProviderInfo);

var _CopyTradingAccountsList = require('../model/CopyTradingAccountsList');

var _CopyTradingAccountsList2 = _interopRequireDefault(_CopyTradingAccountsList);

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _TradesSignalViewModel = require('../model/TradesSignalViewModel');

var _TradesSignalViewModel2 = _interopRequireDefault(_TradesSignalViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Signal service.
* @class SignalApi
* @version v1.0
*/
var SignalApi = function () {

  /**
  * Constructs a new SignalApi. 
  * @function SignalApi#constructor
  * @param {ApiClient} apiClient Optional API client implementation to use,
  * @return {SignalApi}
  */
  function SignalApi(apiClient) {
    _classCallCheck(this, SignalApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  _createClass(SignalApi, [{
    key: 'v10SignalAccountsGetWithHttpInfo',
    value: function v10SignalAccountsGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10SignalAccountsGet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _CopyTradingAccountsList2.default;

      return this.apiClient.callApi('/v1.0/signal/accounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get copytrading accounts
     * @function SignalApi#v10SignalAccountsGet
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<CopyTradingAccountsList>} a Promise, with an object containing data of type CopyTradingAccountsList and HTTP response
     */

  }, {
    key: 'v10SignalAccountsGet',
    value: function v10SignalAccountsGet(authorization) {
      return this.v10SignalAccountsGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10SignalAttachByIdInfoGetWithHttpInfo',
    value: function v10SignalAttachByIdInfoGetWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10SignalAttachByIdInfoGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10SignalAttachByIdInfoGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _AttachToSignalProviderInfo2.default;

      return this.apiClient.callApi('/v1.0/signal/attach/{id}/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get subscribe to programs signals info
     * @function SignalApi#v10SignalAttachByIdInfoGet
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<AttachToSignalProviderInfo>} a Promise, with an object containing data of type AttachToSignalProviderInfo and HTTP response
     */

  }, {
    key: 'v10SignalAttachByIdInfoGet',
    value: function v10SignalAttachByIdInfoGet(id, authorization) {
      return this.v10SignalAttachByIdInfoGetWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10SignalAttachByIdPostWithHttpInfo',
    value: function v10SignalAttachByIdPostWithHttpInfo(id, authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10SignalAttachByIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10SignalAttachByIdPost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'Mode': opts['mode'],
        'Percent': opts['percent'],
        'OpenTolerancePercent': opts['openTolerancePercent'],
        'FixedVolume': opts['fixedVolume'],
        'FixedCurrency': opts['fixedCurrency'],
        'InitialDepositCurrency': opts['initialDepositCurrency'],
        'InitialDepositAmount': opts['initialDepositAmount']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/signal/attach/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Subscribe to programs signals
     * @function SignalApi#v10SignalAttachByIdPost
     * @param {String} id Program Id
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.mode] 
     * @param {Number} [opts.percent] 
     * @param {Number} [opts.openTolerancePercent] 
     * @param {Number} [opts.fixedVolume] 
     * @param {String} [opts.fixedCurrency] 
     * @param {String} [opts.initialDepositCurrency] 
     * @param {Number} [opts.initialDepositAmount] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10SignalAttachByIdPost',
    value: function v10SignalAttachByIdPost(id, authorization, opts) {
      return this.v10SignalAttachByIdPostWithHttpInfo(id, authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10SignalByIdUpdatePostWithHttpInfo',
    value: function v10SignalByIdUpdatePostWithHttpInfo(id, authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10SignalByIdUpdatePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10SignalByIdUpdatePost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'Mode': opts['mode'],
        'Percent': opts['percent'],
        'OpenTolerancePercent': opts['openTolerancePercent'],
        'FixedVolume': opts['fixedVolume'],
        'FixedCurrency': opts['fixedCurrency'],
        'InitialDepositCurrency': opts['initialDepositCurrency'],
        'InitialDepositAmount': opts['initialDepositAmount']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/signal/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update signal subscription settings
     * @function SignalApi#v10SignalByIdUpdatePost
     * @param {String} id Program id
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.mode] 
     * @param {Number} [opts.percent] 
     * @param {Number} [opts.openTolerancePercent] 
     * @param {Number} [opts.fixedVolume] 
     * @param {String} [opts.fixedCurrency] 
     * @param {String} [opts.initialDepositCurrency] 
     * @param {Number} [opts.initialDepositAmount] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10SignalByIdUpdatePost',
    value: function v10SignalByIdUpdatePost(id, authorization, opts) {
      return this.v10SignalByIdUpdatePostWithHttpInfo(id, authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10SignalDetachByIdPostWithHttpInfo',
    value: function v10SignalDetachByIdPostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10SignalDetachByIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10SignalDetachByIdPost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/signal/detach/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Unsubscribe from program signals
     * @function SignalApi#v10SignalDetachByIdPost
     * @param {String} id Program id
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10SignalDetachByIdPost',
    value: function v10SignalDetachByIdPost(id, authorization) {
      return this.v10SignalDetachByIdPostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10SignalTradesByIdClosePostWithHttpInfo',
    value: function v10SignalTradesByIdClosePostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10SignalTradesByIdClosePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10SignalTradesByIdClosePost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/signal/trades/{id}/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Close signal trade
     * @function SignalApi#v10SignalTradesByIdClosePost
     * @param {String} id Trade id
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10SignalTradesByIdClosePost',
    value: function v10SignalTradesByIdClosePost(id, authorization) {
      return this.v10SignalTradesByIdClosePostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10SignalTradesGetWithHttpInfo',
    value: function v10SignalTradesGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10SignalTradesGet");
      }

      var pathParams = {};
      var queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'Symbol': opts['symbol'],
        'Sorting': opts['sorting'],
        'AccountId': opts['accountId'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _TradesSignalViewModel2.default;

      return this.apiClient.callApi('/v1.0/signal/trades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get investors signals trades history
     * @function SignalApi#v10SignalTradesGet
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.dateFrom] 
     * @param {Date} [opts.dateTo] 
     * @param {String} [opts.symbol] 
     * @param {String} [opts.sorting] 
     * @param {String} [opts.accountId] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<TradesSignalViewModel>} a Promise, with an object containing data of type TradesSignalViewModel and HTTP response
     */

  }, {
    key: 'v10SignalTradesGet',
    value: function v10SignalTradesGet(authorization, opts) {
      return this.v10SignalTradesGetWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10SignalTradesOpenGetWithHttpInfo',
    value: function v10SignalTradesOpenGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10SignalTradesOpenGet");
      }

      var pathParams = {};
      var queryParams = {
        'Sorting': opts['sorting'],
        'Symbol': opts['symbol'],
        'AccountId': opts['accountId'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _TradesSignalViewModel2.default;

      return this.apiClient.callApi('/v1.0/signal/trades/open', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get investors signals open trades
     * @function SignalApi#v10SignalTradesOpenGet
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.sorting] 
     * @param {String} [opts.symbol] 
     * @param {String} [opts.accountId] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<TradesSignalViewModel>} a Promise, with an object containing data of type TradesSignalViewModel and HTTP response
     */

  }, {
    key: 'v10SignalTradesOpenGet',
    value: function v10SignalTradesOpenGet(authorization, opts) {
      return this.v10SignalTradesOpenGetWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SignalApi;
}();

exports.default = SignalApi;