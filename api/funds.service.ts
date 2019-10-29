/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ErrorViewModel } from "../model/errorViewModel";
import { FundBalanceChart } from "../model/fundBalanceChart";
import { FundDetailsFull } from "../model/fundDetailsFull";
import { FundProfitCharts } from "../model/fundProfitCharts";
import { ItemsViewModelFundDetailsList } from "../model/itemsViewModelFundDetailsList";
import { ItemsViewModelReallocationModel } from "../model/itemsViewModelReallocationModel";

export class FundsService {
  apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  public addToFavorites(id: string, authorization: string): CancelablePromise<null>{
    return this.addToFavoritesWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private addToFavoritesWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling addToFavorites");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling addToFavorites");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/funds/{id}/favorite/add', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getFundBalanceChart(id: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR'
  }): CancelablePromise<FundBalanceChart>{
    return this.getFundBalanceChartWithHttpInfo(id, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getFundBalanceChartWithHttpInfo(id: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR'
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getFundBalanceChart");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "MaxPointCount": opts["maxPointCount"],
      "Currency": opts["currency"]
    };
    let headerParams = { 
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = FundBalanceChart;

    return this.apiClient.callApi<FundBalanceChart>(
      '/v2.0/funds/{id}/charts/balance', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getFundDetails(id: string, opts?: { 
    authorization?: string, 
    currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR'
  }): CancelablePromise<FundDetailsFull>{
    return this.getFundDetailsWithHttpInfo(id, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getFundDetailsWithHttpInfo(id: string, opts: { 
    authorization?: string, 
    currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR'
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getFundDetails");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "currency": opts["currency"]
    };
    let headerParams = { 
      "Authorization": opts["authorization"]
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = FundDetailsFull;

    return this.apiClient.callApi<FundDetailsFull>(
      '/v2.0/funds/{id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getFundProfitChart(id: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', 
    currencies?: Array<Object>, 
    chartAssetsCount?: number
  }): CancelablePromise<FundProfitCharts>{
    return this.getFundProfitChartWithHttpInfo(id, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getFundProfitChartWithHttpInfo(id: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', 
    currencies?: Array<Object>, 
    chartAssetsCount?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getFundProfitChart");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "MaxPointCount": opts["maxPointCount"],
      "Currency": opts["currency"],
      "currencies": this.apiClient.buildCollectionParam(opts["currencies"], "multi"),
      "chartAssetsCount": opts["chartAssetsCount"]
    };
    let headerParams = { 
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = FundProfitCharts;

    return this.apiClient.callApi<FundProfitCharts>(
      '/v2.0/funds/{id}/charts/profit', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getFunds(opts?: { 
    authorization?: string, 
    assets?: Array<string>, 
    statisticDateFrom?: Date, 
    statisticDateTo?: Date, 
    chartPointsCount?: number, 
    chartCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', 
    facetId?: string, 
    mask?: string, 
    skip?: number, 
    take?: number
  }): CancelablePromise<ItemsViewModelFundDetailsList>{
    return this.getFundsWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getFundsWithHttpInfo(opts: { 
    authorization?: string, 
    assets?: Array<string>, 
    statisticDateFrom?: Date, 
    statisticDateTo?: Date, 
    chartPointsCount?: number, 
    chartCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', 
    facetId?: string, 
    mask?: string, 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    

    let pathParams = { 
    };
    let queryParams = { 
      "Assets": this.apiClient.buildCollectionParam(opts["assets"], "multi"),
      "StatisticDateFrom": opts["statisticDateFrom"],
      "StatisticDateTo": opts["statisticDateTo"],
      "ChartPointsCount": opts["chartPointsCount"],
      "ChartCurrency": opts["chartCurrency"],
      "FacetId": opts["facetId"],
      "Mask": opts["mask"],
      "Skip": opts["skip"],
      "Take": opts["take"]
    };
    let headerParams = { 
      "Authorization": opts["authorization"]
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = ItemsViewModelFundDetailsList;

    return this.apiClient.callApi<ItemsViewModelFundDetailsList>(
      '/v2.0/funds', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getReallocatingHistory(id: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    skip?: number, 
    take?: number
  }): CancelablePromise<ItemsViewModelReallocationModel>{
    return this.getReallocatingHistoryWithHttpInfo(id, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getReallocatingHistoryWithHttpInfo(id: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getReallocatingHistory");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "Skip": opts["skip"],
      "Take": opts["take"]
    };
    let headerParams = { 
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = ItemsViewModelReallocationModel;

    return this.apiClient.callApi<ItemsViewModelReallocationModel>(
      '/v2.0/funds/{id}/reallocations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public removeFromFavorites(id: string, authorization: string): CancelablePromise<null>{
    return this.removeFromFavoritesWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private removeFromFavoritesWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling removeFromFavorites");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling removeFromFavorites");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/funds/{id}/favorite/remove', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }
}
