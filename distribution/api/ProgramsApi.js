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

var _ProgramProfitChart = require('../model/ProgramProfitChart');

var _ProgramProfitChart2 = _interopRequireDefault(_ProgramProfitChart);

var _ProgramSets = require('../model/ProgramSets');

var _ProgramSets2 = _interopRequireDefault(_ProgramSets);

var _ProgramsList = require('../model/ProgramsList');

var _ProgramsList2 = _interopRequireDefault(_ProgramsList);

var _TradesViewModel = require('../model/TradesViewModel');

var _TradesViewModel2 = _interopRequireDefault(_TradesViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Programs service.
* @module api/ProgramsApi
* @version v1.0
*/
var ProgramsApi = function () {

  /**
  * Constructs a new ProgramsApi. 
  * @alias module:api/ProgramsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProgramsApi(apiClient) {
    _classCallCheck(this, ProgramsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Program balance chart
   * @param {String} id 
   * @param {Object} opts Optional parameters
   * @param {Date} opts.dateFrom 
   * @param {Date} opts.dateTo 
   * @param {Number} opts.maxPointCount 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramBalanceChart} and HTTP response
   */


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
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {Number} opts.maxPointCount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramBalanceChart}
     */

  }, {
    key: 'v10ProgramsByIdChartsBalanceGet',
    value: function v10ProgramsByIdChartsBalanceGet(id, opts) {
      return this.v10ProgramsByIdChartsBalanceGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Program profit chart
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {Number} opts.maxPointCount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramProfitChart} and HTTP response
     */

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
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {Number} opts.maxPointCount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramProfitChart}
     */

  }, {
    key: 'v10ProgramsByIdChartsProfitGet',
    value: function v10ProgramsByIdChartsProfitGet(id, opts) {
      return this.v10ProgramsByIdChartsProfitGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Add to favorites
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

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
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ProgramsByIdFavoriteAddPost',
    value: function v10ProgramsByIdFavoriteAddPost(id, authorization) {
      return this.v10ProgramsByIdFavoriteAddPostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove from favorites
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

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
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ProgramsByIdFavoriteRemovePost',
    value: function v10ProgramsByIdFavoriteRemovePost(id, authorization) {
      return this.v10ProgramsByIdFavoriteRemovePostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Program details
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/String} opts.currencySecondary 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramDetailsFull} and HTTP response
     */

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
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/String} opts.currencySecondary 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramDetailsFull}
     */

  }, {
    key: 'v10ProgramsByIdGet',
    value: function v10ProgramsByIdGet(id, opts) {
      return this.v10ProgramsByIdGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Trade history
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {String} opts.symbol 
     * @param {module:model/String} opts.sorting 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TradesViewModel} and HTTP response
     */

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
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {String} opts.symbol 
     * @param {module:model/String} opts.sorting 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TradesViewModel}
     */

  }, {
    key: 'v10ProgramsByIdTradesGet',
    value: function v10ProgramsByIdTradesGet(id, opts) {
      return this.v10ProgramsByIdTradesGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Programs list
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {Number} opts.levelMin 
     * @param {Number} opts.levelMax 
     * @param {Number} opts.profitAvgMin 
     * @param {Number} opts.profitAvgMax 
     * @param {module:model/String} opts.sorting 
     * @param {module:model/String} opts.programCurrency 
     * @param {module:model/String} opts.currencySecondary 
     * @param {Number} opts.levelUpFrom 
     * @param {Date} opts.statisticDateFrom 
     * @param {Date} opts.statisticDateTo 
     * @param {Number} opts.chartPointsCount 
     * @param {String} opts.mask 
     * @param {String} opts.facetId 
     * @param {Boolean} opts.isFavorite 
     * @param {Boolean} opts.isEnabled 
     * @param {Array.<String>} opts.ids 
     * @param {String} opts.managerId 
     * @param {String} opts.programManagerId 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramsList} and HTTP response
     */

  }, {
    key: 'v10ProgramsGetWithHttpInfo',
    value: function v10ProgramsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'LevelMin': opts['levelMin'],
        'LevelMax': opts['levelMax'],
        'ProfitAvgMin': opts['profitAvgMin'],
        'ProfitAvgMax': opts['profitAvgMax'],
        'Sorting': opts['sorting'],
        'ProgramCurrency': opts['programCurrency'],
        'CurrencySecondary': opts['currencySecondary'],
        'LevelUpFrom': opts['levelUpFrom'],
        'StatisticDateFrom': opts['statisticDateFrom'],
        'StatisticDateTo': opts['statisticDateTo'],
        'ChartPointsCount': opts['chartPointsCount'],
        'Mask': opts['mask'],
        'FacetId': opts['facetId'],
        'IsFavorite': opts['isFavorite'],
        'IsEnabled': opts['isEnabled'],
        'Ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),
        'ManagerId': opts['managerId'],
        'ProgramManagerId': opts['programManagerId'],
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {Number} opts.levelMin 
     * @param {Number} opts.levelMax 
     * @param {Number} opts.profitAvgMin 
     * @param {Number} opts.profitAvgMax 
     * @param {module:model/String} opts.sorting 
     * @param {module:model/String} opts.programCurrency 
     * @param {module:model/String} opts.currencySecondary 
     * @param {Number} opts.levelUpFrom 
     * @param {Date} opts.statisticDateFrom 
     * @param {Date} opts.statisticDateTo 
     * @param {Number} opts.chartPointsCount 
     * @param {String} opts.mask 
     * @param {String} opts.facetId 
     * @param {Boolean} opts.isFavorite 
     * @param {Boolean} opts.isEnabled 
     * @param {Array.<String>} opts.ids 
     * @param {String} opts.managerId 
     * @param {String} opts.programManagerId 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramsList}
     */

  }, {
    key: 'v10ProgramsGet',
    value: function v10ProgramsGet(opts) {
      return this.v10ProgramsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Level up summary
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LevelUpSummary} and HTTP response
     */

  }, {
    key: 'v10ProgramsLevelupSummaryGetWithHttpInfo',
    value: function v10ProgramsLevelupSummaryGetWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _LevelUpSummary2.default;

      return this.apiClient.callApi('/v1.0/programs/levelup/summary', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Level up summary
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LevelUpSummary}
     */

  }, {
    key: 'v10ProgramsLevelupSummaryGet',
    value: function v10ProgramsLevelupSummaryGet() {
      return this.v10ProgramsLevelupSummaryGetWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Programs sets
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramSets} and HTTP response
     */

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
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramSets}
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