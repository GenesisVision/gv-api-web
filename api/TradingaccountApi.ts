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
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { AccountBalanceChart } from "../model/AccountBalanceChart";
import { AccountProfitPercentCharts } from "../model/AccountProfitPercentCharts";
import { ErrorViewModel } from "../model/ErrorViewModel";
import { PrivateTradingAccountFull } from "../model/PrivateTradingAccountFull";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";
import { TradesViewModel } from "../model/TradesViewModel";

export class TradingaccountApi {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  public exportTrades(id: string, authorization: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    symbol?: string, 
    sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc', 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    isFollow?: boolean, 
    skip?: number, 
    take?: number
  }): CancelablePromise<Blob>{
    return this.exportTradesWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private exportTradesWithHttpInfo(id: string, authorization: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    symbol?: string, 
    sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc', 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    isFollow?: boolean, 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling exportTrades");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling exportTrades");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "Symbol": opts["symbol"],
      "Sorting": opts["sorting"],
      "AccountId": opts["accountId"],
      "AccountCurrency": opts["accountCurrency"],
      "IsFollow": opts["isFollow"],
      "Skip": opts["skip"],
      "Take": opts["take"]
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = 'Blob';

    return this.apiClient.callApi<Blob>(
      '/v2.0/tradingaccount/{id}/trades/export', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getAbsoluteProfitChart(id: string, authorization: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR'
  }): CancelablePromise<AbsoluteProfitChart>{
    return this.getAbsoluteProfitChartWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getAbsoluteProfitChartWithHttpInfo(id: string, authorization: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR'
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getAbsoluteProfitChart");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getAbsoluteProfitChart");
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
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = AbsoluteProfitChart;

    return this.apiClient.callApi<AbsoluteProfitChart>(
      '/v2.0/tradingaccount/{id}/charts/profit/absolute', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getBalanceChart(id: string, authorization: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR'
  }): CancelablePromise<AccountBalanceChart>{
    return this.getBalanceChartWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getBalanceChartWithHttpInfo(id: string, authorization: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR'
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getBalanceChart");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getBalanceChart");
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
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = AccountBalanceChart;

    return this.apiClient.callApi<AccountBalanceChart>(
      '/v2.0/tradingaccount/{id}/charts/balance', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getOpenTrades(id: string, authorization: string, opts?: { 
    sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc', 
    symbol?: string, 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    skip?: number, 
    take?: number
  }): CancelablePromise<TradesViewModel>{
    return this.getOpenTradesWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getOpenTradesWithHttpInfo(id: string, authorization: string, opts: { 
    sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc', 
    symbol?: string, 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getOpenTrades");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getOpenTrades");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "Sorting": opts["sorting"],
      "Symbol": opts["symbol"],
      "AccountId": opts["accountId"],
      "AccountCurrency": opts["accountCurrency"],
      "Skip": opts["skip"],
      "Take": opts["take"]
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = TradesViewModel;

    return this.apiClient.callApi<TradesViewModel>(
      '/v2.0/tradingaccount/{id}/trades/open', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getProfitPercentCharts(id: string, authorization: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    currencies?: Array<Object>
  }): CancelablePromise<AccountProfitPercentCharts>{
    return this.getProfitPercentChartsWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getProfitPercentChartsWithHttpInfo(id: string, authorization: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    maxPointCount?: number, 
    currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    currencies?: Array<Object>
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getProfitPercentCharts");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getProfitPercentCharts");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "MaxPointCount": opts["maxPointCount"],
      "Currency": opts["currency"],
      "currencies": this.apiClient.buildCollectionParam(opts["currencies"], "multi")
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = AccountProfitPercentCharts;

    return this.apiClient.callApi<AccountProfitPercentCharts>(
      '/v2.0/tradingaccount/{id}/charts/profit/percent', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getTrades(id: string, authorization: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    symbol?: string, 
    sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc', 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    isFollow?: boolean, 
    skip?: number, 
    take?: number
  }): CancelablePromise<TradesSignalViewModel>{
    return this.getTradesWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getTradesWithHttpInfo(id: string, authorization: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    symbol?: string, 
    sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc', 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    isFollow?: boolean, 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getTrades");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getTrades");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "Symbol": opts["symbol"],
      "Sorting": opts["sorting"],
      "AccountId": opts["accountId"],
      "AccountCurrency": opts["accountCurrency"],
      "IsFollow": opts["isFollow"],
      "Skip": opts["skip"],
      "Take": opts["take"]
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = TradesSignalViewModel;

    return this.apiClient.callApi<TradesSignalViewModel>(
      '/v2.0/tradingaccount/{id}/trades', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getTradingAccountDetails(id: string, authorization: string): CancelablePromise<PrivateTradingAccountFull>{
    return this.getTradingAccountDetailsWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getTradingAccountDetailsWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getTradingAccountDetails");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getTradingAccountDetails");
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
    let returnType = PrivateTradingAccountFull;

    return this.apiClient.callApi<PrivateTradingAccountFull>(
      '/v2.0/tradingaccount/{id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }
}
