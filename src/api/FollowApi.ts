import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FollowDetailsListItemItemsViewModel } from '../model/FollowDetailsListItemItemsViewModel';
import { FollowFilterSorting } from '../model/FollowFilterSorting';
import { ImageQuality } from '../model/ImageQuality';
import { ProgramFollowDetailsFull } from '../model/ProgramFollowDetailsFull';
import { ProgramProfitPercentCharts } from '../model/ProgramProfitPercentCharts';
import { SignalSubscriptionItemsViewModel } from '../model/SignalSubscriptionItemsViewModel';
import { TradeSorting } from '../model/TradeSorting';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';

export default class FollowApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  addToFavorites = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}/favorite/add",
        
        
        method: "POST",
    })
  };

  closeAssetTrade = (
    id: string,
    options: {
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        queryParams: {  Symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}/trades/close",
        
        
        method: "POST",
    })
  };

  getAbsoluteProfitChart = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      maxPointCount?: number,
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<AbsoluteProfitChart> => {
    
    return generateMethod<Promise<AbsoluteProfitChart>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   MaxPointCount: options['maxPointCount'],   Currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}/charts/profit/absolute",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getAssetTrades = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      symbol?: string,
      sorting?: TradeSorting,
      accountId?: string,
      accountCurrency?: Currency,
      isFollow?: boolean,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<TradesSignalViewModel> => {
    
    return generateMethod<Promise<TradesSignalViewModel>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Symbol: options['symbol'],   Sorting: options['sorting'],   AccountId: options['accountId'],   AccountCurrency: options['accountCurrency'],   IsFollow: options['isFollow'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}/trades",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getBalanceChart = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      maxPointCount?: number,
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<AccountBalanceChart> => {
    
    return generateMethod<Promise<AccountBalanceChart>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   MaxPointCount: options['maxPointCount'],   Currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}/charts/balance",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFollowAssetDetails = (
    id: string,
    options: {
      logoQuality?: ImageQuality
      } = {},
    init: RequestInit = {}): Promise<ProgramFollowDetailsFull> => {
    
    return generateMethod<Promise<ProgramFollowDetailsFull>>({
        init,
        pathParams: {  id  },
        queryParams: {  logoQuality: options['logoQuality']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFollowAssets = (
    options: {
      sorting?: FollowFilterSorting,
      showIn?: Currency,
      tags?: Array<string>,
      subscriberId?: string,
      dateFrom?: Date,
      dateTo?: Date,
      chartPointsCount?: number,
      facetId?: string,
      mask?: string,
      ownerId?: string,
      showFavorites?: boolean,
      skipStatistic?: boolean,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<FollowDetailsListItemItemsViewModel> => {
    
    return generateMethod<Promise<FollowDetailsListItemItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   ShowIn: options['showIn'],   Tags: options['tags'],   SubscriberId: options['subscriberId'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   FacetId: options['facetId'],   Mask: options['mask'],   OwnerId: options['ownerId'],   ShowFavorites: options['showFavorites'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFollowSubscriptionsForAsset = (
    id: string,
    options: {
      onlyActive?: boolean
      } = {},
    init: RequestInit = {}): Promise<SignalSubscriptionItemsViewModel> => {
    
    return generateMethod<Promise<SignalSubscriptionItemsViewModel>>({
        init,
        pathParams: {  id  },
        queryParams: {  onlyActive: options['onlyActive']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}/subscriptions",
        
        returnType: "structure",
        method: "POST",
    })
  };

  getFollowSubscriptionsForOwnAccount = (
    id: string,
    options: {
      onlyActive?: boolean
      } = {},
    init: RequestInit = {}): Promise<SignalSubscriptionItemsViewModel> => {
    
    return generateMethod<Promise<SignalSubscriptionItemsViewModel>>({
        init,
        pathParams: {  id  },
        queryParams: {  onlyActive: options['onlyActive']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/account/own/{id}/subscriptions",
        
        returnType: "structure",
        method: "POST",
    })
  };

  getProfitPercentCharts = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      maxPointCount?: number,
      currency?: Currency,
      currencies?: Array<Currency>
      } = {},
    init: RequestInit = {}): Promise<ProgramProfitPercentCharts> => {
    
    return generateMethod<Promise<ProgramProfitPercentCharts>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   MaxPointCount: options['maxPointCount'],   Currency: options['currency'],   currencies: options['currencies']  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}/charts/profit/percent",
        
        returnType: "structure",
        method: "GET",
    })
  };

  removeFromFavorites = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/follow/{id}/favorite/remove",
        
        
        method: "POST",
    })
  };
}
