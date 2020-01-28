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
import { AttachToExternalSignalProviderCommon } from "../model/AttachToExternalSignalProviderCommon";
import { AttachToExternalSignalProviderExt } from "../model/AttachToExternalSignalProviderExt";
import { AttachToSignalProvider } from "../model/AttachToSignalProvider";
import { DetachFromExternalSignalProvider } from "../model/DetachFromExternalSignalProvider";
import { DetachFromSignalProvider } from "../model/DetachFromSignalProvider";
import { ErrorViewModel } from "../model/ErrorViewModel";
import { ItemsViewModelSignalTradingEvent } from "../model/ItemsViewModelSignalTradingEvent";
import { ItemsViewModelTradingAccountDetails } from "../model/ItemsViewModelTradingAccountDetails";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";

export class SignalApi {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  public attachSlaveToMasterExternalCommonAccount(id: string, authorization: string, opts?: { 
    model?: AttachToExternalSignalProviderCommon
  }): CancelablePromise<null>{
    return this.attachSlaveToMasterExternalCommonAccountWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private attachSlaveToMasterExternalCommonAccountWithHttpInfo(id: string, authorization: string, opts: { 
    model?: AttachToExternalSignalProviderCommon
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling attachSlaveToMasterExternalCommonAccount");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling attachSlaveToMasterExternalCommonAccount");
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
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/signal/external/attach/{id}/common', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public attachSlaveToMasterExternalPrivateAccount(id: string, authorization: string, opts?: { 
    model?: AttachToExternalSignalProviderExt
  }): CancelablePromise<null>{
    return this.attachSlaveToMasterExternalPrivateAccountWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private attachSlaveToMasterExternalPrivateAccountWithHttpInfo(id: string, authorization: string, opts: { 
    model?: AttachToExternalSignalProviderExt
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling attachSlaveToMasterExternalPrivateAccount");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling attachSlaveToMasterExternalPrivateAccount");
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
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/signal/external/attach/{id}/private', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public attachSlaveToMasterInternal(id: string, authorization: string, opts?: { 
    model?: AttachToSignalProvider
  }): CancelablePromise<null>{
    return this.attachSlaveToMasterInternalWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private attachSlaveToMasterInternalWithHttpInfo(id: string, authorization: string, opts: { 
    model?: AttachToSignalProvider
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling attachSlaveToMasterInternal");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling attachSlaveToMasterInternal");
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
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/signal/attach/{id}', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public closeTradeInternal(id: string, authorization: string, opts?: { 
    assetId?: string
  }): CancelablePromise<null>{
    return this.closeTradeInternalWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private closeTradeInternalWithHttpInfo(id: string, authorization: string, opts: { 
    assetId?: string
  } = {}){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling closeTradeInternal");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling closeTradeInternal");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
      "assetId": opts["assetId"]
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
      '/v2.0/signal/trades/{id}/close', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public detachSlaveFromMasterExternal(id: string, authorization: string, opts?: { 
    model?: DetachFromExternalSignalProvider
  }): CancelablePromise<null>{
    return this.detachSlaveFromMasterExternalWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private detachSlaveFromMasterExternalWithHttpInfo(id: string, authorization: string, opts: { 
    model?: DetachFromExternalSignalProvider
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling detachSlaveFromMasterExternal");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling detachSlaveFromMasterExternal");
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
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/signal/external/detach/{id}', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public detachSlaveFromMasterInternal(id: string, authorization: string, opts?: { 
    model?: DetachFromSignalProvider
  }): CancelablePromise<null>{
    return this.detachSlaveFromMasterInternalWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private detachSlaveFromMasterInternalWithHttpInfo(id: string, authorization: string, opts: { 
    model?: DetachFromSignalProvider
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling detachSlaveFromMasterInternal");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling detachSlaveFromMasterInternal");
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
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/signal/detach/{id}', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getOpenSignalTrades(authorization: string, opts?: { 
    sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc', 
    symbol?: string, 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    skip?: number, 
    take?: number
  }): CancelablePromise<TradesSignalViewModel>{
    return this.getOpenSignalTradesWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getOpenSignalTradesWithHttpInfo(authorization: string, opts: { 
    sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc', 
    symbol?: string, 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getOpenSignalTrades");
    }

    let pathParams = { 
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
    let returnType = TradesSignalViewModel;

    return this.apiClient.callApi<TradesSignalViewModel>(
      '/v2.0/signal/trades/open', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getSignalTradingLog(authorization: string, opts?: { 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    skip?: number, 
    take?: number
  }): CancelablePromise<ItemsViewModelSignalTradingEvent>{
    return this.getSignalTradingLogWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getSignalTradingLogWithHttpInfo(authorization: string, opts: { 
    accountId?: string, 
    accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR', 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getSignalTradingLog");
    }

    let pathParams = { 
    };
    let queryParams = { 
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
    let returnType = ItemsViewModelSignalTradingEvent;

    return this.apiClient.callApi<ItemsViewModelSignalTradingEvent>(
      '/v2.0/signal/trades/log', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getSubscriberAccountsForAsset(id: string, authorization: string): CancelablePromise<ItemsViewModelTradingAccountDetails>{
    return this.getSubscriberAccountsForAssetWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getSubscriberAccountsForAssetWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getSubscriberAccountsForAsset");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getSubscriberAccountsForAsset");
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
    let returnType = ItemsViewModelTradingAccountDetails;

    return this.apiClient.callApi<ItemsViewModelTradingAccountDetails>(
      '/v2.0/signal/attach/{id}/accounts', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateExternalSubscriptionSettings(id: string, authorization: string, opts?: { 
    model?: AttachToExternalSignalProviderExt
  }): CancelablePromise<null>{
    return this.updateExternalSubscriptionSettingsWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateExternalSubscriptionSettingsWithHttpInfo(id: string, authorization: string, opts: { 
    model?: AttachToExternalSignalProviderExt
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling updateExternalSubscriptionSettings");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateExternalSubscriptionSettings");
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
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/signal/external/{id}/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateSubscriptionSettings(id: string, authorization: string, opts?: { 
    model?: AttachToSignalProvider
  }): CancelablePromise<null>{
    return this.updateSubscriptionSettingsWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateSubscriptionSettingsWithHttpInfo(id: string, authorization: string, opts: { 
    model?: AttachToSignalProvider
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling updateSubscriptionSettings");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateSubscriptionSettings");
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
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/signal/{id}/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }
}
