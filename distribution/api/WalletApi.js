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

var _CreateWithdrawalRequestModel = require('../model/CreateWithdrawalRequestModel');

var _CreateWithdrawalRequestModel2 = _interopRequireDefault(_CreateWithdrawalRequestModel);

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _WalletInfo = require('../model/WalletInfo');

var _WalletInfo2 = _interopRequireDefault(_WalletInfo);

var _WalletMultiSummary = require('../model/WalletMultiSummary');

var _WalletMultiSummary2 = _interopRequireDefault(_WalletMultiSummary);

var _WalletPendingTransactionsViewModel = require('../model/WalletPendingTransactionsViewModel');

var _WalletPendingTransactionsViewModel2 = _interopRequireDefault(_WalletPendingTransactionsViewModel);

var _WalletSummary = require('../model/WalletSummary');

var _WalletSummary2 = _interopRequireDefault(_WalletSummary);

var _WalletTransactionsViewModel = require('../model/WalletTransactionsViewModel');

var _WalletTransactionsViewModel2 = _interopRequireDefault(_WalletTransactionsViewModel);

var _WalletsInfo = require('../model/WalletsInfo');

var _WalletsInfo2 = _interopRequireDefault(_WalletsInfo);

var _WithdrawalSummary = require('../model/WithdrawalSummary');

var _WithdrawalSummary2 = _interopRequireDefault(_WithdrawalSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Wallet service.
* @class WalletApi
* @version v1.0
*/
var WalletApi = function () {

  /**
  * Constructs a new WalletApi. 
  * @function WalletApi#constructor
  * @param {ApiClient} apiClient Optional API client implementation to use,
  * @return {WalletApi}
  */
  function WalletApi(apiClient) {
    _classCallCheck(this, WalletApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  _createClass(WalletApi, [{
    key: 'v10WalletAddressesByCurrencyGetWithHttpInfo',
    value: function v10WalletAddressesByCurrencyGetWithHttpInfo(currency, authorization) {
      var postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10WalletAddressesByCurrencyGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletAddressesByCurrencyGet");
      }

      var pathParams = {
        'currency': currency
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _WalletInfo2.default;

      return this.apiClient.callApi('/v1.0/wallet/addresses/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * @function WalletApi#v10WalletAddressesByCurrencyGet
     * @param {String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise<WalletInfo>} a Promise, with an object containing data of type WalletInfo and HTTP response
     */

  }, {
    key: 'v10WalletAddressesByCurrencyGet',
    value: function v10WalletAddressesByCurrencyGet(currency, authorization) {
      return this.v10WalletAddressesByCurrencyGetWithHttpInfo(currency, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletAddressesGetWithHttpInfo',
    value: function v10WalletAddressesGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletAddressesGet");
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
      var returnType = _WalletsInfo2.default;

      return this.apiClient.callApi('/v1.0/wallet/addresses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * @function WalletApi#v10WalletAddressesGet
     * @param {String} authorization JWT access token
     * @return {Promise<WalletsInfo>} a Promise, with an object containing data of type WalletsInfo and HTTP response
     */

  }, {
    key: 'v10WalletAddressesGet',
    value: function v10WalletAddressesGet(authorization) {
      return this.v10WalletAddressesGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletByCurrencyGetWithHttpInfo',
    value: function v10WalletByCurrencyGetWithHttpInfo(currency, authorization) {
      var postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10WalletByCurrencyGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletByCurrencyGet");
      }

      var pathParams = {
        'currency': currency
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _WalletSummary2.default;

      return this.apiClient.callApi('/v1.0/wallet/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Wallet summary
     * @function WalletApi#v10WalletByCurrencyGet
     * @param {String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise<WalletSummary>} a Promise, with an object containing data of type WalletSummary and HTTP response
     */

  }, {
    key: 'v10WalletByCurrencyGet',
    value: function v10WalletByCurrencyGet(currency, authorization) {
      return this.v10WalletByCurrencyGetWithHttpInfo(currency, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletMultiByCurrencyGetWithHttpInfo',
    value: function v10WalletMultiByCurrencyGetWithHttpInfo(currency, authorization) {
      var postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10WalletMultiByCurrencyGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletMultiByCurrencyGet");
      }

      var pathParams = {
        'currency': currency
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _WalletMultiSummary2.default;

      return this.apiClient.callApi('/v1.0/wallet/multi/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Multi wallet summary
     * @function WalletApi#v10WalletMultiByCurrencyGet
     * @param {String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise<WalletMultiSummary>} a Promise, with an object containing data of type WalletMultiSummary and HTTP response
     */

  }, {
    key: 'v10WalletMultiByCurrencyGet',
    value: function v10WalletMultiByCurrencyGet(currency, authorization) {
      return this.v10WalletMultiByCurrencyGetWithHttpInfo(currency, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletTransactionsGetWithHttpInfo',
    value: function v10WalletTransactionsGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletTransactionsGet");
      }

      var pathParams = {};
      var queryParams = {
        'AssetId': opts['assetId'],
        'From': opts['from'],
        'To': opts['to'],
        'AssetType': opts['assetType'],
        'TxAction': opts['txAction'],
        'Wallet': opts['wallet'],
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
      var returnType = _WalletTransactionsViewModel2.default;

      return this.apiClient.callApi('/v1.0/wallet/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Wallet transactions
     * @function WalletApi#v10WalletTransactionsGet
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.assetId] 
     * @param {Date} [opts.from] 
     * @param {Date} [opts.to] 
     * @param {String} [opts.assetType] 
     * @param {String} [opts.txAction] 
     * @param {String} [opts.wallet] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {Promise<WalletTransactionsViewModel>} a Promise, with an object containing data of type WalletTransactionsViewModel and HTTP response
     */

  }, {
    key: 'v10WalletTransactionsGet',
    value: function v10WalletTransactionsGet(authorization, opts) {
      return this.v10WalletTransactionsGetWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletTransactionsPendingGetWithHttpInfo',
    value: function v10WalletTransactionsPendingGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletTransactionsPendingGet");
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
      var returnType = _WalletPendingTransactionsViewModel2.default;

      return this.apiClient.callApi('/v1.0/wallet/transactions/pending', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Wallet pending transactions
     * @function WalletApi#v10WalletTransactionsPendingGet
     * @param {String} authorization JWT access token
     * @return {Promise<WalletPendingTransactionsViewModel>} a Promise, with an object containing data of type WalletPendingTransactionsViewModel and HTTP response
     */

  }, {
    key: 'v10WalletTransactionsPendingGet',
    value: function v10WalletTransactionsPendingGet(authorization) {
      return this.v10WalletTransactionsPendingGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletTransferPostWithHttpInfo',
    value: function v10WalletTransferPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletTransferPost");
      }

      var pathParams = {};
      var queryParams = {
        'From': opts['from'],
        'To': opts['to'],
        'Amount': opts['amount']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/wallet/transfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Transfer money
     * @function WalletApi#v10WalletTransferPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.from] 
     * @param {String} [opts.to] 
     * @param {Number} [opts.amount] 
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10WalletTransferPost',
    value: function v10WalletTransferPost(authorization, opts) {
      return this.v10WalletTransferPostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletWithdrawInfoGetWithHttpInfo',
    value: function v10WalletWithdrawInfoGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawInfoGet");
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
      var returnType = _WithdrawalSummary2.default;

      return this.apiClient.callApi('/v1.0/wallet/withdraw/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * @function WalletApi#v10WalletWithdrawInfoGet
     * @param {String} authorization JWT access token
     * @return {Promise<WithdrawalSummary>} a Promise, with an object containing data of type WithdrawalSummary and HTTP response
     */

  }, {
    key: 'v10WalletWithdrawInfoGet',
    value: function v10WalletWithdrawInfoGet(authorization) {
      return this.v10WalletWithdrawInfoGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo',
    value: function v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo(txId, authorization) {
      var postBody = null;

      // verify the required parameter 'txId' is set
      if (txId === undefined || txId === null) {
        throw new Error("Missing the required parameter 'txId' when calling v10WalletWithdrawRequestCancelByTxIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawRequestCancelByTxIdPost");
      }

      var pathParams = {
        'txId': txId
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

      return this.apiClient.callApi('/v1.0/wallet/withdraw/request/cancel/{txId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * @function WalletApi#v10WalletWithdrawRequestCancelByTxIdPost
     * @param {String} txId 
     * @param {String} authorization JWT access token
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10WalletWithdrawRequestCancelByTxIdPost',
    value: function v10WalletWithdrawRequestCancelByTxIdPost(txId, authorization) {
      return this.v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo(txId, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletWithdrawRequestConfirmPostWithHttpInfo',
    value: function v10WalletWithdrawRequestConfirmPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'requestId': opts['requestId'],
        'code': opts['code']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/wallet/withdraw/request/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * @function WalletApi#v10WalletWithdrawRequestConfirmPost
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.requestId] 
     * @param {String} [opts.code] 
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10WalletWithdrawRequestConfirmPost',
    value: function v10WalletWithdrawRequestConfirmPost(opts) {
      return this.v10WalletWithdrawRequestConfirmPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletWithdrawRequestNewPostWithHttpInfo',
    value: function v10WalletWithdrawRequestNewPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawRequestNewPost");
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

      return this.apiClient.callApi('/v1.0/wallet/withdraw/request/new', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * @function WalletApi#v10WalletWithdrawRequestNewPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {CreateWithdrawalRequestModel} [opts.model] 
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10WalletWithdrawRequestNewPost',
    value: function v10WalletWithdrawRequestNewPost(authorization, opts) {
      return this.v10WalletWithdrawRequestNewPostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo',
    value: function v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo(txId, authorization) {
      var postBody = null;

      // verify the required parameter 'txId' is set
      if (txId === undefined || txId === null) {
        throw new Error("Missing the required parameter 'txId' when calling v10WalletWithdrawRequestResendByTxIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawRequestResendByTxIdPost");
      }

      var pathParams = {
        'txId': txId
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

      return this.apiClient.callApi('/v1.0/wallet/withdraw/request/resend/{txId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * @function WalletApi#v10WalletWithdrawRequestResendByTxIdPost
     * @param {String} txId 
     * @param {String} authorization JWT access token
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10WalletWithdrawRequestResendByTxIdPost',
    value: function v10WalletWithdrawRequestResendByTxIdPost(txId, authorization) {
      return this.v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo(txId, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WalletApi;
}();

exports.default = WalletApi;