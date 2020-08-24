import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AttachToExternalSignalProviderCommon } from '../model/AttachToExternalSignalProviderCommon';
import { AttachToExternalSignalProviderExt } from '../model/AttachToExternalSignalProviderExt';
import { AttachToSignalProvider } from '../model/AttachToSignalProvider';
import { Currency } from '../model/Currency';
import { DetachFromExternalSignalProvider } from '../model/DetachFromExternalSignalProvider';
import { DetachFromSignalProvider } from '../model/DetachFromSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { SignalTradingEventItemsViewModel } from '../model/SignalTradingEventItemsViewModel';
import { TradingAccountDetailsItemsViewModel } from '../model/TradingAccountDetailsItemsViewModel';

export default class SignalApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  attachSlaveToMasterExternalCommonAccount = (
    id: string,
    options: {
      body?: AttachToExternalSignalProviderCommon
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/external/attach/{id}/common",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  attachSlaveToMasterExternalPrivateAccount = (
    id: string,
    options: {
      body?: AttachToExternalSignalProviderExt
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/external/attach/{id}/private",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  attachSlaveToMasterInternal = (
    id: string,
    options: {
      body?: AttachToSignalProvider
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/attach/{id}",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  detachSlaveFromMasterExternal = (
    id: string,
    options: {
      body?: DetachFromExternalSignalProvider
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/external/detach/{id}",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  detachSlaveFromMasterInternal = (
    id: string,
    options: {
      body?: DetachFromSignalProvider
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/detach/{id}",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  getSignalTradingLog = (
    options: {
      accountId?: string,
      accountCurrency?: Currency,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<SignalTradingEventItemsViewModel> => {
    
    return generateMethod<Promise<SignalTradingEventItemsViewModel>>({
        init,
        queryParams: {  AccountId: options['accountId'],   AccountCurrency: options['accountCurrency'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/trades/log",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getSubscriberAccountsForAsset = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<TradingAccountDetailsItemsViewModel> => {
    
    return generateMethod<Promise<TradingAccountDetailsItemsViewModel>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/attach/{id}/accounts",
        
        returnType: "structure",
        method: "GET",
    })
  };

  updateExternalSubscriptionSettings = (
    id: string,
    options: {
      body?: AttachToExternalSignalProviderExt
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/external/{id}/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  updateSubscriptionSettings = (
    id: string,
    options: {
      body?: AttachToSignalProvider
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/signal/{id}/update",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };
}
