/**
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


import ApiClient from "../ApiClient";
import ErrorViewModel from '../model/ErrorViewModel';
import LevelUpSummary from '../model/LevelUpSummary';
import ProgramBalanceChart from '../model/ProgramBalanceChart';
import ProgramDetailsFull from '../model/ProgramDetailsFull';
import ProgramPeriodsViewModel from '../model/ProgramPeriodsViewModel';
import ProgramProfitChart from '../model/ProgramProfitChart';
import ProgramSets from '../model/ProgramSets';
import ProgramsList from '../model/ProgramsList';
import SignalProviderSubscribers from '../model/SignalProviderSubscribers';
import TradesViewModel from '../model/TradesViewModel';

/**
* Programs service.
* @class ProgramsApi
* @version v1.0
*/
export default class ProgramsApi {

    /**
    * Constructs a new ProgramsApi. 
    * @function ProgramsApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {ProgramsApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10ProgramsByIdChartsBalanceGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdChartsBalanceGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'MaxPointCount': opts['maxPointCount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProgramBalanceChart;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}/charts/balance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10ProgramsByIdChartsBalanceGet(id, opts) {
      return this.v10ProgramsByIdChartsBalanceGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsByIdChartsProfitGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdChartsProfitGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'MaxPointCount': opts['maxPointCount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProgramProfitChart;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}/charts/profit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10ProgramsByIdChartsProfitGet(id, opts) {
      return this.v10ProgramsByIdChartsProfitGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsByIdFavoriteAddPostWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdFavoriteAddPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramsByIdFavoriteAddPost");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}/favorite/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add to favorites
     * @function ProgramsApi#v10ProgramsByIdFavoriteAddPost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      v10ProgramsByIdFavoriteAddPost(id, authorization) {
      return this.v10ProgramsByIdFavoriteAddPostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsByIdFavoriteRemovePostWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdFavoriteRemovePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramsByIdFavoriteRemovePost");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}/favorite/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove from favorites
     * @function ProgramsApi#v10ProgramsByIdFavoriteRemovePost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      v10ProgramsByIdFavoriteRemovePost(id, authorization) {
      return this.v10ProgramsByIdFavoriteRemovePostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsByIdGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'currencySecondary': opts['currencySecondary']
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProgramDetailsFull;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10ProgramsByIdGet(id, opts) {
      return this.v10ProgramsByIdGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsByIdPeriodsGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdPeriodsGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'NumberMin': opts['numberMin'],
        'NumberMax': opts['numberMax'],
        'Status': opts['status'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProgramPeriodsViewModel;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}/periods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10ProgramsByIdPeriodsGet(id, opts) {
      return this.v10ProgramsByIdPeriodsGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsByIdSubscribersGetWithHttpInfo(id, authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdSubscribersGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramsByIdSubscribersGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'Status': opts['status'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SignalProviderSubscribers;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}/subscribers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Signal subscribers
     * @function ProgramsApi#v10ProgramsByIdSubscribersGet
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.status] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<SignalProviderSubscribers>} a Promise, with an object containing data of type SignalProviderSubscribers and HTTP response
     */
      v10ProgramsByIdSubscribersGet(id, authorization, opts) {
      return this.v10ProgramsByIdSubscribersGetWithHttpInfo(id, authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsByIdTradesGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdTradesGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'Symbol': opts['symbol'],
        'Sorting': opts['sorting'],
        'AccountId': opts['accountId'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TradesViewModel;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}/trades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10ProgramsByIdTradesGet(id, opts) {
      return this.v10ProgramsByIdTradesGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsByIdTradesOpenGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ProgramsByIdTradesOpenGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'Sorting': opts['sorting'],
        'Symbol': opts['symbol'],
        'AccountId': opts['accountId'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = TradesViewModel;

      return this.apiClient.callApi(
        '/v1.0/programs/{id}/trades/open', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10ProgramsByIdTradesOpenGet(id, opts) {
      return this.v10ProgramsByIdTradesOpenGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
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
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProgramsList;

      return this.apiClient.callApi(
        '/v1.0/programs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Programs list
     * @function ProgramsApi#v10ProgramsGet
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.authorization] 
     * @param {Number} [opts.levelMin] 
     * @param {Number} [opts.levelMax] 
     * @param {Array<Number>} [opts.levelsSet] 
     * @param {Number} [opts.profitAvgMin] 
     * @param {Number} [opts.profitAvgMax] 
     * @param {String} [opts.sorting] 
     * @param {String} [opts.programCurrency] 
     * @param {String} [opts.currencySecondary] 
     * @param {Number} [opts.levelUpFrom] 
     * @param {Array<String>} [opts.tags] 
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
     * @param {Array<String>} [opts.ids] 
     * @param {String} [opts.managerId] 
     * @param {String} [opts.programManagerId] 
     * @param {Array<String>} [opts.status] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {CancelablePromise<ProgramsList>} a Promise, with an object containing data of type ProgramsList and HTTP response
     */
      v10ProgramsGet(opts) {
      return this.v10ProgramsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsLevelupSummaryGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = LevelUpSummary;

      return this.apiClient.callApi(
        '/v1.0/programs/levelup/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Level up summary
     * @function ProgramsApi#v10ProgramsLevelupSummaryGet
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.authorization] 
     * @return {CancelablePromise<LevelUpSummary>} a Promise, with an object containing data of type LevelUpSummary and HTTP response
     */
      v10ProgramsLevelupSummaryGet(opts) {
      return this.v10ProgramsLevelupSummaryGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10ProgramsSetsGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ProgramsSetsGet");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProgramSets;

      return this.apiClient.callApi(
        '/v1.0/programs/sets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Programs sets
     * @function ProgramsApi#v10ProgramsSetsGet
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<ProgramSets>} a Promise, with an object containing data of type ProgramSets and HTTP response
     */
      v10ProgramsSetsGet(authorization) {
      return this.v10ProgramsSetsGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
