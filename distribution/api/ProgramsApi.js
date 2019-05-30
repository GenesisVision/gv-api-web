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

var _LevelUpSummary = require('../model/LevelUpSummary');

var _LevelUpSummary2 = _interopRequireDefault(_LevelUpSummary);

var _ProgramBalanceChart = require('../model/ProgramBalanceChart');

var _ProgramBalanceChart2 = _interopRequireDefault(_ProgramBalanceChart);

var _ProgramDetailsFull = require('../model/ProgramDetailsFull');

var _ProgramDetailsFull2 = _interopRequireDefault(_ProgramDetailsFull);

var _ProgramPeriodsViewModel = require('../model/ProgramPeriodsViewModel');

var _ProgramPeriodsViewModel2 = _interopRequireDefault(_ProgramPeriodsViewModel);

var _ProgramProfitChart = require('../model/ProgramProfitChart');

var _ProgramProfitChart2 = _interopRequireDefault(_ProgramProfitChart);

var _ProgramSets = require('../model/ProgramSets');

var _ProgramSets2 = _interopRequireDefault(_ProgramSets);

var _ProgramsList = require('../model/ProgramsList');

var _ProgramsList2 = _interopRequireDefault(_ProgramsList);

var _SignalProviderSubscribers = require('../model/SignalProviderSubscribers');

var _SignalProviderSubscribers2 = _interopRequireDefault(_SignalProviderSubscribers);

var _TradesViewModel = require('../model/TradesViewModel');

var _TradesViewModel2 = _interopRequireDefault(_TradesViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Programs service.
* @class ProgramsApi
* @version v1.0
*/
var ProgramsApi = function () {

  /**
  * Constructs a new ProgramsApi. 
  * @function ProgramsApi#constructor
  * @param {ApiClient} apiClient Optional API client implementation to use,
  * @return {ProgramsApi}
  */
  function ProgramsApi(apiClient) {
    _classCallCheck(this, ProgramsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  _createClass(ProgramsApi, [{
    key: 'v10ProgramsByIdChartsBalanceGetWithHttpInfo',
    value: function v10ProgramsByIdChartsBalanceGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdChartsBalanceGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'MaxPointCount': opts['maxPointCount']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramBalanceChart2.default;

      return this.apiClient.callApi('/v1.0/programs/{id}/charts/balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Program balance chart
     * @function ProgramsApi#v10ProgramsByIdChartsBalanceGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.dateFrom] 
     * @param {Date} [opts.dateTo] 
     * @param {Number} [opts.maxPointCount] 
     * @return {CancelablePromise<ProgramBalanceChart>} a Promise, with an object containing data of type ProgramBalanceChart and HTTP response
     */

  }, {
    key: 'v10ProgramsByIdChartsBalanceGet',
    value: function v10ProgramsByIdChartsBalanceGet(id, opts) {
      return this.v10ProgramsByIdChartsBalanceGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsByIdChartsProfitGetWithHttpInfo',
    value: function v10ProgramsByIdChartsProfitGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdChartsProfitGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'MaxPointCount': opts['maxPointCount']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramProfitChart2.default;

      return this.apiClient.callApi('/v1.0/programs/{id}/charts/profit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Program profit chart
     * @function ProgramsApi#v10ProgramsByIdChartsProfitGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.dateFrom] 
     * @param {Date} [opts.dateTo] 
     * @param {Number} [opts.maxPointCount] 
     * @return {CancelablePromise<ProgramProfitChart>} a Promise, with an object containing data of type ProgramProfitChart and HTTP response
     */

  }, {
    key: 'v10ProgramsByIdChartsProfitGet',
    value: function v10ProgramsByIdChartsProfitGet(id, opts) {
      return this.v10ProgramsByIdChartsProfitGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsByIdFavoriteAddPostWithHttpInfo',
    value: function v10ProgramsByIdFavoriteAddPostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdFavoriteAddPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramsByIdFavoriteAddPost");
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

      return this.apiClient.callApi('/v1.0/programs/{id}/favorite/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Add to favorites
     * @function ProgramsApi#v10ProgramsByIdFavoriteAddPost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10ProgramsByIdFavoriteAddPost',
    value: function v10ProgramsByIdFavoriteAddPost(id, authorization) {
      return this.v10ProgramsByIdFavoriteAddPostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsByIdFavoriteRemovePostWithHttpInfo',
    value: function v10ProgramsByIdFavoriteRemovePostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdFavoriteRemovePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramsByIdFavoriteRemovePost");
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

      return this.apiClient.callApi('/v1.0/programs/{id}/favorite/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove from favorites
     * @function ProgramsApi#v10ProgramsByIdFavoriteRemovePost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10ProgramsByIdFavoriteRemovePost',
    value: function v10ProgramsByIdFavoriteRemovePost(id, authorization) {
      return this.v10ProgramsByIdFavoriteRemovePostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsByIdGetWithHttpInfo',
    value: function v10ProgramsByIdGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'currencySecondary': opts['currencySecondary']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramDetailsFull2.default;

      return this.apiClient.callApi('/v1.0/programs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Program details
     * @function ProgramsApi#v10ProgramsByIdGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.authorization] 
     * @param {String} [opts.currencySecondary] 
     * @return {CancelablePromise<ProgramDetailsFull>} a Promise, with an object containing data of type ProgramDetailsFull and HTTP response
     */

  }, {
    key: 'v10ProgramsByIdGet',
    value: function v10ProgramsByIdGet(id, opts) {
      return this.v10ProgramsByIdGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsByIdPeriodsGetWithHttpInfo',
    value: function v10ProgramsByIdPeriodsGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdPeriodsGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'NumberMin': opts['numberMin'],
        'NumberMax': opts['numberMax'],
        'Status': opts['status'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramPeriodsViewModel2.default;

      return this.apiClient.callApi('/v1.0/programs/{id}/periods', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Program periods
     * @function ProgramsApi#v10ProgramsByIdPeriodsGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.dateFrom] 
     * @param {Date} [opts.dateTo] 
     * @param {Number} [opts.numberMin] 
     * @param {Number} [opts.numberMax] 
     * @param {String} [opts.status] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<ProgramPeriodsViewModel>} a Promise, with an object containing data of type ProgramPeriodsViewModel and HTTP response
     */

  }, {
    key: 'v10ProgramsByIdPeriodsGet',
    value: function v10ProgramsByIdPeriodsGet(id, opts) {
      return this.v10ProgramsByIdPeriodsGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsByIdSubscribersGetWithHttpInfo',
    value: function v10ProgramsByIdSubscribersGetWithHttpInfo(id, authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdSubscribersGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramsByIdSubscribersGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'DashboardActionStatus': opts['dashboardActionStatus'],
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
      var returnType = _SignalProviderSubscribers2.default;

      return this.apiClient.callApi('/v1.0/programs/{id}/subscribers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Signal subscribers
     * @function ProgramsApi#v10ProgramsByIdSubscribersGet
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.dashboardActionStatus] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<SignalProviderSubscribers>} a Promise, with an object containing data of type SignalProviderSubscribers and HTTP response
     */

  }, {
    key: 'v10ProgramsByIdSubscribersGet',
    value: function v10ProgramsByIdSubscribersGet(id, authorization, opts) {
      return this.v10ProgramsByIdSubscribersGetWithHttpInfo(id, authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsByIdTradesGetWithHttpInfo',
    value: function v10ProgramsByIdTradesGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdTradesGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'Symbol': opts['symbol'],
        'Sorting': opts['sorting'],
        'AccountId': opts['accountId'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _TradesViewModel2.default;

      return this.apiClient.callApi('/v1.0/programs/{id}/trades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Trade history
     * @function ProgramsApi#v10ProgramsByIdTradesGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.dateFrom] 
     * @param {Date} [opts.dateTo] 
     * @param {String} [opts.symbol] 
     * @param {String} [opts.sorting] 
     * @param {String} [opts.accountId] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<TradesViewModel>} a Promise, with an object containing data of type TradesViewModel and HTTP response
     */

  }, {
    key: 'v10ProgramsByIdTradesGet',
    value: function v10ProgramsByIdTradesGet(id, opts) {
      return this.v10ProgramsByIdTradesGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsByIdTradesOpenGetWithHttpInfo',
    value: function v10ProgramsByIdTradesOpenGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdTradesOpenGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'Sorting': opts['sorting'],
        'Symbol': opts['symbol'],
        'AccountId': opts['accountId'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _TradesViewModel2.default;

      return this.apiClient.callApi('/v1.0/programs/{id}/trades/open', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Open positions
     * @function ProgramsApi#v10ProgramsByIdTradesOpenGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.sorting] 
     * @param {String} [opts.symbol] 
     * @param {String} [opts.accountId] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<TradesViewModel>} a Promise, with an object containing data of type TradesViewModel and HTTP response
     */

  }, {
    key: 'v10ProgramsByIdTradesOpenGet',
    value: function v10ProgramsByIdTradesOpenGet(id, opts) {
      return this.v10ProgramsByIdTradesOpenGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsGetWithHttpInfo',
    value: function v10ProgramsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'LevelMin': opts['levelMin'],
        'LevelMax': opts['levelMax'],
        'LevelsSet': this.apiClient.buildCollectionParam(opts['levelsSet'], 'multi'),
        'ProfitAvgMin': opts['profitAvgMin'],
        'ProfitAvgMax': opts['profitAvgMax'],
        'Sorting': opts['sorting'],
        'ProgramCurrency': opts['programCurrency'],
        'CurrencySecondary': opts['currencySecondary'],
        'LevelUpFrom': opts['levelUpFrom'],
        'Tags': this.apiClient.buildCollectionParam(opts['tags'], 'multi'),
        'IsSignal': opts['isSignal'],
        'StatisticDateFrom': opts['statisticDateFrom'],
        'StatisticDateTo': opts['statisticDateTo'],
        'ChartPointsCount': opts['chartPointsCount'],
        'Mask': opts['mask'],
        'FacetId': opts['facetId'],
        'IsFavorite': opts['isFavorite'],
        'IsEnabled': opts['isEnabled'],
        'HasInvestorsForAll': opts['hasInvestorsForAll'],
        'HasInvestorsForClosed': opts['hasInvestorsForClosed'],
        'Ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),
        'ManagerId': opts['managerId'],
        'ProgramManagerId': opts['programManagerId'],
        'Status': this.apiClient.buildCollectionParam(opts['status'], 'multi'),
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramsList2.default;

      return this.apiClient.callApi('/v1.0/programs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Programs list
     * @function ProgramsApi#v10ProgramsGet
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.authorization] 
     * @param {Number} [opts.levelMin] 
     * @param {Number} [opts.levelMax] 
     * @param {[Number]} [opts.levelsSet] 
     * @param {Number} [opts.profitAvgMin] 
     * @param {Number} [opts.profitAvgMax] 
     * @param {String} [opts.sorting] 
     * @param {String} [opts.programCurrency] 
     * @param {String} [opts.currencySecondary] 
     * @param {Number} [opts.levelUpFrom] 
     * @param {[String]} [opts.tags] 
     * @param {Boolean} [opts.isSignal] 
     * @param {Date} [opts.statisticDateFrom] 
     * @param {Date} [opts.statisticDateTo] 
     * @param {Number} [opts.chartPointsCount] 
     * @param {String} [opts.mask] 
     * @param {String} [opts.facetId] 
     * @param {Boolean} [opts.isFavorite] 
     * @param {Boolean} [opts.isEnabled] 
     * @param {Boolean} [opts.hasInvestorsForAll] 
     * @param {Boolean} [opts.hasInvestorsForClosed] 
     * @param {[String]} [opts.ids] 
     * @param {String} [opts.managerId] 
     * @param {String} [opts.programManagerId] 
     * @param {[String]} [opts.status] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<ProgramsList>} a Promise, with an object containing data of type ProgramsList and HTTP response
     */

  }, {
    key: 'v10ProgramsGet',
    value: function v10ProgramsGet(opts) {
      return this.v10ProgramsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsLevelupSummaryGetWithHttpInfo',
    value: function v10ProgramsLevelupSummaryGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _LevelUpSummary2.default;

      return this.apiClient.callApi('/v1.0/programs/levelup/summary', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Level up summary
     * @function ProgramsApi#v10ProgramsLevelupSummaryGet
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.authorization] 
     * @return {CancelablePromise<LevelUpSummary>} a Promise, with an object containing data of type LevelUpSummary and HTTP response
     */

  }, {
    key: 'v10ProgramsLevelupSummaryGet',
    value: function v10ProgramsLevelupSummaryGet(opts) {
      return this.v10ProgramsLevelupSummaryGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10ProgramsSetsGetWithHttpInfo',
    value: function v10ProgramsSetsGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramsSetsGet");
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
      var returnType = _ProgramSets2.default;

      return this.apiClient.callApi('/v1.0/programs/sets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Programs sets
     * @function ProgramsApi#v10ProgramsSetsGet
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<ProgramSets>} a Promise, with an object containing data of type ProgramSets and HTTP response
     */

  }, {
    key: 'v10ProgramsSetsGet',
    value: function v10ProgramsSetsGet(authorization) {
      return this.v10ProgramsSetsGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProgramsApi;
}();

exports.default = ProgramsApi;