/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateWithdrawalRequestModel', 'model/ErrorViewModel', 'model/InternalTransferRequest', 'model/MultiWalletExternalTransactionsViewModel', 'model/MultiWalletTransactionsViewModel', 'model/TransactionDetails', 'model/UserCommissionData', 'model/WalletInfo', 'model/WalletMultiAvailable', 'model/WalletMultiSummary', 'model/WalletSummary', 'model/WalletTransactionsViewModel', 'model/WalletsInfo', 'model/WithdrawalSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateWithdrawalRequestModel'), require('../model/ErrorViewModel'), require('../model/InternalTransferRequest'), require('../model/MultiWalletExternalTransactionsViewModel'), require('../model/MultiWalletTransactionsViewModel'), require('../model/TransactionDetails'), require('../model/UserCommissionData'), require('../model/WalletInfo'), require('../model/WalletMultiAvailable'), require('../model/WalletMultiSummary'), require('../model/WalletSummary'), require('../model/WalletTransactionsViewModel'), require('../model/WalletsInfo'), require('../model/WithdrawalSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.CoreApiV10) {
      root.CoreApiV10 = {};
    }
    root.CoreApiV10.WalletApi = factory(root.CoreApiV10.ApiClient, root.CoreApiV10.CreateWithdrawalRequestModel, root.CoreApiV10.ErrorViewModel, root.CoreApiV10.InternalTransferRequest, root.CoreApiV10.MultiWalletExternalTransactionsViewModel, root.CoreApiV10.MultiWalletTransactionsViewModel, root.CoreApiV10.TransactionDetails, root.CoreApiV10.UserCommissionData, root.CoreApiV10.WalletInfo, root.CoreApiV10.WalletMultiAvailable, root.CoreApiV10.WalletMultiSummary, root.CoreApiV10.WalletSummary, root.CoreApiV10.WalletTransactionsViewModel, root.CoreApiV10.WalletsInfo, root.CoreApiV10.WithdrawalSummary);
  }
}(this, function(ApiClient, CreateWithdrawalRequestModel, ErrorViewModel, InternalTransferRequest, MultiWalletExternalTransactionsViewModel, MultiWalletTransactionsViewModel, TransactionDetails, UserCommissionData, WalletInfo, WalletMultiAvailable, WalletMultiSummary, WalletSummary, WalletTransactionsViewModel, WalletsInfo, WithdrawalSummary) {
  'use strict';

  /**
   * Wallet service.
   * @module api/WalletApi
   * @version v1.0
   */

  /**
   * Constructs a new WalletApi. 
   * @alias module:api/WalletApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get user addresses
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletInfo} and HTTP response
     */
    this.v10WalletAddressesByCurrencyGetWithHttpInfo = function(currency, authorization) {
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
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = WalletInfo;

      return this.apiClient.callApi(
        '/v1.0/wallet/addresses/{currency}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get user addresses
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletInfo}
     */
    this.v10WalletAddressesByCurrencyGet = function(currency, authorization) {
      return this.v10WalletAddressesByCurrencyGetWithHttpInfo(currency, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user addresses
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletsInfo} and HTTP response
     */
    this.v10WalletAddressesGetWithHttpInfo = function(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletAddressesGet");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = WalletsInfo;

      return this.apiClient.callApi(
        '/v1.0/wallet/addresses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get user addresses
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletsInfo}
     */
    this.v10WalletAddressesGet = function(authorization) {
      return this.v10WalletAddressesGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Wallet summary
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletSummary} and HTTP response
     */
    this.v10WalletByCurrencyGetWithHttpInfo = function(currency, authorization) {
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
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = WalletSummary;

      return this.apiClient.callApi(
        '/v1.0/wallet/{currency}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wallet summary
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletSummary}
     */
    this.v10WalletByCurrencyGet = function(currency, authorization) {
      return this.v10WalletByCurrencyGetWithHttpInfo(currency, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GenesisMarkets commission data
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserCommissionData} and HTTP response
     */
    this.v10WalletFeeGvtholdingGetWithHttpInfo = function(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletFeeGvtholdingGet");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = UserCommissionData;

      return this.apiClient.callApi(
        '/v1.0/wallet/fee/gvtholding', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * GenesisMarkets commission data
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserCommissionData}
     */
    this.v10WalletFeeGvtholdingGet = function(authorization) {
      return this.v10WalletFeeGvtholdingGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Multi wallet available
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletMultiAvailable} and HTTP response
     */
    this.v10WalletMultiByCurrencyAvailableGetWithHttpInfo = function(currency, authorization) {
      var postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10WalletMultiByCurrencyAvailableGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletMultiByCurrencyAvailableGet");
      }


      var pathParams = {
        'currency': currency
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = WalletMultiAvailable;

      return this.apiClient.callApi(
        '/v1.0/wallet/multi/{currency}/available', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Multi wallet available
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletMultiAvailable}
     */
    this.v10WalletMultiByCurrencyAvailableGet = function(currency, authorization) {
      return this.v10WalletMultiByCurrencyAvailableGetWithHttpInfo(currency, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Multi wallet summary
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletMultiSummary} and HTTP response
     */
    this.v10WalletMultiByCurrencyGetWithHttpInfo = function(currency, authorization) {
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
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = WalletMultiSummary;

      return this.apiClient.callApi(
        '/v1.0/wallet/multi/{currency}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Multi wallet summary
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletMultiSummary}
     */
    this.v10WalletMultiByCurrencyGet = function(currency, authorization) {
      return this.v10WalletMultiByCurrencyGetWithHttpInfo(currency, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Wallet pending transactions
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.type 
     * @param {module:model/String} opts.currency 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MultiWalletExternalTransactionsViewModel} and HTTP response
     */
    this.v10WalletMultiTransactionsExternalGetWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletMultiTransactionsExternalGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'From': opts['from'],
        'To': opts['to'],
        'Type': opts['type'],
        'Currency': opts['currency'],
        'Skip': opts['skip'],
        'Take': opts['take'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = MultiWalletExternalTransactionsViewModel;

      return this.apiClient.callApi(
        '/v1.0/wallet/multi/transactions/external', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wallet pending transactions
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.type 
     * @param {module:model/String} opts.currency 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MultiWalletExternalTransactionsViewModel}
     */
    this.v10WalletMultiTransactionsExternalGet = function(authorization, opts) {
      return this.v10WalletMultiTransactionsExternalGetWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Multi wallet transactions
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.type 
     * @param {module:model/String} opts.currency 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MultiWalletTransactionsViewModel} and HTTP response
     */
    this.v10WalletMultiTransactionsGetWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletMultiTransactionsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'From': opts['from'],
        'To': opts['to'],
        'Type': opts['type'],
        'Currency': opts['currency'],
        'Skip': opts['skip'],
        'Take': opts['take'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = MultiWalletTransactionsViewModel;

      return this.apiClient.callApi(
        '/v1.0/wallet/multi/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Multi wallet transactions
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.type 
     * @param {module:model/String} opts.currency 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MultiWalletTransactionsViewModel}
     */
    this.v10WalletMultiTransactionsGet = function(authorization, opts) {
      return this.v10WalletMultiTransactionsGetWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Disable paying platform fees with GVT
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10WalletPaygvtfeeOffPostWithHttpInfo = function(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletPaygvtfeeOffPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/paygvtfee/off', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Disable paying platform fees with GVT
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10WalletPaygvtfeeOffPost = function(authorization) {
      return this.v10WalletPaygvtfeeOffPostWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Enable paying platform fees with GVT
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10WalletPaygvtfeeOnPostWithHttpInfo = function(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletPaygvtfeeOnPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/paygvtfee/on', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Enable paying platform fees with GVT
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10WalletPaygvtfeeOnPost = function(authorization) {
      return this.v10WalletPaygvtfeeOnPostWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get transaction details
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionDetails} and HTTP response
     */
    this.v10WalletTransactionByIdGetWithHttpInfo = function(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10WalletTransactionByIdGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletTransactionByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = TransactionDetails;

      return this.apiClient.callApi(
        '/v1.0/wallet/transaction/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get transaction details
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionDetails}
     */
    this.v10WalletTransactionByIdGet = function(id, authorization) {
      return this.v10WalletTransactionByIdGetWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Wallet transactions
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.assetId 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.assetType 
     * @param {module:model/String} opts.txAction 
     * @param {module:model/String} opts.wallet 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletTransactionsViewModel} and HTTP response
     */
    this.v10WalletTransactionsGetWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletTransactionsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'AssetId': opts['assetId'],
        'From': opts['from'],
        'To': opts['to'],
        'AssetType': opts['assetType'],
        'TxAction': opts['txAction'],
        'Wallet': opts['wallet'],
        'Skip': opts['skip'],
        'Take': opts['take'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = WalletTransactionsViewModel;

      return this.apiClient.callApi(
        '/v1.0/wallet/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wallet transactions
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.assetId 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.assetType 
     * @param {module:model/String} opts.txAction 
     * @param {module:model/String} opts.wallet 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletTransactionsViewModel}
     */
    this.v10WalletTransactionsGet = function(authorization, opts) {
      return this.v10WalletTransactionsGetWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Transfer money
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/InternalTransferRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10WalletTransferPostWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletTransferPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/transfer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Transfer money
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/InternalTransferRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10WalletTransferPost = function(authorization, opts) {
      return this.v10WalletTransferPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WithdrawalSummary} and HTTP response
     */
    this.v10WalletWithdrawInfoGetWithHttpInfo = function(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawInfoGet");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = WithdrawalSummary;

      return this.apiClient.callApi(
        '/v1.0/wallet/withdraw/info', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WithdrawalSummary}
     */
    this.v10WalletWithdrawInfoGet = function(authorization) {
      return this.v10WalletWithdrawInfoGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} txId 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo = function(txId, authorization) {
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
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/withdraw/request/cancel/{txId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} txId 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10WalletWithdrawRequestCancelByTxIdPost = function(txId, authorization) {
      return this.v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo(txId, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.requestId 
     * @param {String} opts.code 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10WalletWithdrawRequestConfirmPostWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'requestId': opts['requestId'],
        'code': opts['code'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/withdraw/request/confirm', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.requestId 
     * @param {String} opts.code 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10WalletWithdrawRequestConfirmPost = function(opts) {
      return this.v10WalletWithdrawRequestConfirmPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWithdrawalRequestModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10WalletWithdrawRequestNewPostWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawRequestNewPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/withdraw/request/new', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWithdrawalRequestModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10WalletWithdrawRequestNewPost = function(authorization, opts) {
      return this.v10WalletWithdrawRequestNewPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} txId 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo = function(txId, authorization) {
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
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/withdraw/request/resend/{txId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} txId 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.v10WalletWithdrawRequestResendByTxIdPost = function(txId, authorization) {
      return this.v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo(txId, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
