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
import ProgramBalanceChart from '../model/ProgramBalanceChart';
import ProgramDetailsFull from '../model/ProgramDetailsFull';
import ProgramProfitChart from '../model/ProgramProfitChart';
import ProgramSets from '../model/ProgramSets';
import ProgramsList from '../model/ProgramsList';
import TradesViewModel from '../model/TradesViewModel';

/**
* Programs service.
* @module api/ProgramsApi
* @version v1.0
*/
export default class ProgramsApi {

    /**
    * Constructs a new ProgramsApi. 
    * @alias module:api/ProgramsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {Number} opts.maxPointCount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramBalanceChart}
     */
    v10ProgramsByIdChartsBalanceGet(id, opts) {
      return this.v10ProgramsByIdChartsBalanceGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
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
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {Number} opts.maxPointCount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramProfitChart}
     */
    v10ProgramsByIdChartsProfitGet(id, opts) {
      return this.v10ProgramsByIdChartsProfitGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add to favorites
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
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
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    v10ProgramsByIdFavoriteAddPost(id, authorization) {
      return this.v10ProgramsByIdFavoriteAddPostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove from favorites
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
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
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    v10ProgramsByIdFavoriteRemovePost(id, authorization) {
      return this.v10ProgramsByIdFavoriteRemovePostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
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
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:model/String} opts.currencySecondary 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramDetailsFull}
     */
    v10ProgramsByIdGet(id, opts) {
      return this.v10ProgramsByIdGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
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
    v10ProgramsByIdTradesGet(id, opts) {
      return this.v10ProgramsByIdTradesGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
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
    v10ProgramsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'LevelMin': opts['levelMin'],
        'LevelMax': opts['levelMax'],
        'ProfitAvgMin': opts['profitAvgMin'],
        'ProfitAvgMax': opts['profitAvgMax'],
        'Sorting': opts['sorting'],
        'ProgramCurrency': opts['programCurrency'],
        'CurrencySecondary': opts['currencySecondary'],
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {Number} opts.levelMin 
     * @param {Number} opts.levelMax 
     * @param {Number} opts.profitAvgMin 
     * @param {Number} opts.profitAvgMax 
     * @param {module:model/String} opts.sorting 
     * @param {module:model/String} opts.programCurrency 
     * @param {module:model/String} opts.currencySecondary 
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
    v10ProgramsGet(opts) {
      return this.v10ProgramsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Programs sets
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramSets} and HTTP response
     */
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
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramSets}
     */
    v10ProgramsSetsGet(authorization) {
      return this.v10ProgramsSetsGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
