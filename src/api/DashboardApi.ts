import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { Currency } from '../model/Currency';
import { DashboardAssetStatus } from '../model/DashboardAssetStatus';
import { DashboardAssets } from '../model/DashboardAssets';
import { DashboardChart } from '../model/DashboardChart';
import { DashboardChartAssets } from '../model/DashboardChartAssets';
import { DashboardInvestingDetails } from '../model/DashboardInvestingDetails';
import { DashboardPortfolio } from '../model/DashboardPortfolio';
import { DashboardSummary } from '../model/DashboardSummary';
import { DashboardTradingAssetItemsViewModel } from '../model/DashboardTradingAssetItemsViewModel';
import { DashboardTradingDetails } from '../model/DashboardTradingDetails';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ExchangeAssetItemsViewModel } from '../model/ExchangeAssetItemsViewModel';
import { FundInvestingDetailsListItemsViewModel } from '../model/FundInvestingDetailsListItemsViewModel';
import { FundsFilterSorting } from '../model/FundsFilterSorting';
import { ProgramInvestingDetailsListItemsViewModel } from '../model/ProgramInvestingDetailsListItemsViewModel';
import { ProgramsFilterSorting } from '../model/ProgramsFilterSorting';

export default class DashboardApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getChart = (
    options: {
      assets?: Array<string>,
      dateFrom?: Date,
      dateTo?: Date,
      chartPointsCount?: number,
      showIn?: Currency,
      skipStatistic?: boolean
      } = {},
    init: RequestInit = {}): Promise<DashboardChart> => {
    
    return generateMethod<Promise<DashboardChart>>({
        init,
        queryParams: {  Assets: options['assets'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   ShowIn: options['showIn'],   SkipStatistic: options['skipStatistic']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/chart",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getChartAssets = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<DashboardChartAssets> => {
    
    return generateMethod<Promise<DashboardChartAssets>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/chart/assets",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getDashboardSummary = (
    options: {
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<DashboardSummary> => {
    
    return generateMethod<Promise<DashboardSummary>>({
        init,
        queryParams: {  currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/summary",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getExchangeAccountsCredentials = (
    options: {
      brokerId?: string
      } = {},
    init: RequestInit = {}): Promise<ExchangeAssetItemsViewModel> => {
    
    return generateMethod<Promise<ExchangeAssetItemsViewModel>>({
        init,
        queryParams: {  brokerId: options['brokerId']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/trading/exchange/credentials/all",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getHoldings = (
    options: {
      topAssetsCount?: number
      } = {},
    init: RequestInit = {}): Promise<DashboardAssets> => {
    
    return generateMethod<Promise<DashboardAssets>>({
        init,
        queryParams: {  topAssetsCount: options['topAssetsCount']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/holdings",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getInvestingDetails = (
    options: {
      currency?: Currency,
      eventsTake?: number
      } = {},
    init: RequestInit = {}): Promise<DashboardInvestingDetails> => {
    
    return generateMethod<Promise<DashboardInvestingDetails>>({
        init,
        queryParams: {  currency: options['currency'],   eventsTake: options['eventsTake']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/investing",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getInvestingFunds = (
    options: {
      sorting?: FundsFilterSorting,
      showIn?: Currency,
      status?: DashboardAssetStatus,
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
    init: RequestInit = {}): Promise<FundInvestingDetailsListItemsViewModel> => {
    
    return generateMethod<Promise<FundInvestingDetailsListItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   ShowIn: options['showIn'],   Status: options['status'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   FacetId: options['facetId'],   Mask: options['mask'],   OwnerId: options['ownerId'],   ShowFavorites: options['showFavorites'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/investing/funds",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getInvestingPrograms = (
    options: {
      sorting?: ProgramsFilterSorting,
      showIn?: Currency,
      status?: DashboardAssetStatus,
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
    init: RequestInit = {}): Promise<ProgramInvestingDetailsListItemsViewModel> => {
    
    return generateMethod<Promise<ProgramInvestingDetailsListItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   ShowIn: options['showIn'],   Status: options['status'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   FacetId: options['facetId'],   Mask: options['mask'],   OwnerId: options['ownerId'],   ShowFavorites: options['showFavorites'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/investing/programs",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getMostProfitableAssets = (
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      chartPointsCount?: number,
      showIn?: Currency,
      skipStatistic?: boolean
      } = {},
    init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {
    
    return generateMethod<Promise<DashboardTradingAssetItemsViewModel>>({
        init,
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   ShowIn: options['showIn'],   SkipStatistic: options['skipStatistic']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/trading/mostprofitable",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPortfolio = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<DashboardPortfolio> => {
    
    return generateMethod<Promise<DashboardPortfolio>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/portfolio",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPrivateTradingAssets = (
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      chartPointsCount?: number,
      showIn?: Currency,
      status?: DashboardAssetStatus,
      skipStatistic?: boolean,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {
    
    return generateMethod<Promise<DashboardTradingAssetItemsViewModel>>({
        init,
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   ShowIn: options['showIn'],   Status: options['status'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/trading/private",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPublicTradingAssets = (
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      chartPointsCount?: number,
      showIn?: Currency,
      status?: DashboardAssetStatus,
      skipStatistic?: boolean,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {
    
    return generateMethod<Promise<DashboardTradingAssetItemsViewModel>>({
        init,
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   ShowIn: options['showIn'],   Status: options['status'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/trading/public",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getRecommendations = (
    options: {
      currency?: Currency,
      take?: number,
      onlyFollows?: boolean
      } = {},
    init: RequestInit = {}): Promise<CommonPublicAssetsViewModel> => {
    
    return generateMethod<Promise<CommonPublicAssetsViewModel>>({
        init,
        queryParams: {  currency: options['currency'],   take: options['take'],   onlyFollows: options['onlyFollows']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/recommendations",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getSelfManagedFunds = (
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      chartPointsCount?: number,
      showIn?: Currency,
      status?: DashboardAssetStatus,
      skipStatistic?: boolean,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<DashboardTradingAssetItemsViewModel> => {
    
    return generateMethod<Promise<DashboardTradingAssetItemsViewModel>>({
        init,
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   ShowIn: options['showIn'],   Status: options['status'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/trading/private/selfmanaged",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getTradingDetails = (
    options: {
      currency?: Currency,
      eventsTake?: number
      } = {},
    init: RequestInit = {}): Promise<DashboardTradingDetails> => {
    
    return generateMethod<Promise<DashboardTradingDetails>>({
        init,
        queryParams: {  currency: options['currency'],   eventsTake: options['eventsTake']  },
        apiClient: this.apiClient,
        path: "/v2.0/dashboard/trading",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
