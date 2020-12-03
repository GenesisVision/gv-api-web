import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundBalanceChart } from '../model/FundBalanceChart';
import { FundDetailsFull } from '../model/FundDetailsFull';
import { FundDetailsListItem } from '../model/FundDetailsListItem';
import { FundDetailsListItemItemsViewModel } from '../model/FundDetailsListItemItemsViewModel';
import { FundHistoryEventFilterType } from '../model/FundHistoryEventFilterType';
import { FundHistoryEventViewModelItemsViewModel } from '../model/FundHistoryEventViewModelItemsViewModel';
import { FundProfitPercentCharts } from '../model/FundProfitPercentCharts';
import { FundsFilterSorting } from '../model/FundsFilterSorting';
import { ImageQuality } from '../model/ImageQuality';
import { ReallocationModelItemsViewModel } from '../model/ReallocationModelItemsViewModel';

export default class FundsApi {
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
        path: "/v2.0/funds/{id}/favorite/add",
        
        
        method: "POST",
    })
  };

  getFundAbsoluteProfitChart = (
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
        path: "/v2.0/funds/{id}/charts/profit/absolute",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFundBalanceChart = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      maxPointCount?: number,
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<FundBalanceChart> => {
    
    return generateMethod<Promise<FundBalanceChart>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   MaxPointCount: options['maxPointCount'],   Currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/funds/{id}/charts/balance",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFundDetails = (
    id: string,
    options: {
      currency?: Currency,
      logoQuality?: ImageQuality
      } = {},
    init: RequestInit = {}): Promise<FundDetailsFull> => {
    
    return generateMethod<Promise<FundDetailsFull>>({
        init,
        pathParams: {  id  },
        queryParams: {  currency: options['currency'],   logoQuality: options['logoQuality']  },
        apiClient: this.apiClient,
        path: "/v2.0/funds/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFundProfitPercentCharts = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      maxPointCount?: number,
      currency?: Currency,
      currencies?: Array<Currency>,
      chartAssetsCount?: number
      } = {},
    init: RequestInit = {}): Promise<FundProfitPercentCharts> => {
    
    return generateMethod<Promise<FundProfitPercentCharts>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   MaxPointCount: options['maxPointCount'],   Currency: options['currency'],   currencies: options['currencies'],   chartAssetsCount: options['chartAssetsCount']  },
        apiClient: this.apiClient,
        path: "/v2.0/funds/{id}/charts/profit/percent",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFunds = (
    options: {
      sorting?: FundsFilterSorting,
      showIn?: Currency,
      assets?: Array<string>,
      investorId?: string,
      includeWithInvestments?: boolean,
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
    init: RequestInit = {}): Promise<FundDetailsListItemItemsViewModel> => {
    
    return generateMethod<Promise<FundDetailsListItemItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   ShowIn: options['showIn'],   Assets: options['assets'],   InvestorId: options['investorId'],   IncludeWithInvestments: options['includeWithInvestments'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   FacetId: options['facetId'],   Mask: options['mask'],   OwnerId: options['ownerId'],   ShowFavorites: options['showFavorites'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/funds",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFundsHistoryEvents = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      eventsType?: FundHistoryEventFilterType,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<FundHistoryEventViewModelItemsViewModel> => {
    
    return generateMethod<Promise<FundHistoryEventViewModelItemsViewModel>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   EventsType: options['eventsType'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/funds/{id}/history",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getLastChallengeWinner = (
    options: {
      chartPointsCount?: number
      } = {},
    init: RequestInit = {}): Promise<FundDetailsListItem> => {
    
    return generateMethod<Promise<FundDetailsListItem>>({
        init,
        queryParams: {  chartPointsCount: options['chartPointsCount']  },
        apiClient: this.apiClient,
        path: "/v2.0/funds/challenge/winner",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getReallocatingHistory = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<ReallocationModelItemsViewModel> => {
    
    return generateMethod<Promise<ReallocationModelItemsViewModel>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/funds/{id}/reallocations",
        
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
        path: "/v2.0/funds/{id}/favorite/remove",
        
        
        method: "POST",
    })
  };
}
