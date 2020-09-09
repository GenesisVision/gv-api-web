import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { Currency } from '../model/Currency';
import { DashboardActionStatus } from '../model/DashboardActionStatus';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ImageQuality } from '../model/ImageQuality';
import { PeriodStatus } from '../model/PeriodStatus';
import { ProgramBalanceChart } from '../model/ProgramBalanceChart';
import { ProgramDetailsListItemItemsViewModel } from '../model/ProgramDetailsListItemItemsViewModel';
import { ProgramFollowDetailsFull } from '../model/ProgramFollowDetailsFull';
import { ProgramPeriodsViewModel } from '../model/ProgramPeriodsViewModel';
import { ProgramProfitPercentCharts } from '../model/ProgramProfitPercentCharts';
import { ProgramsFilterSorting } from '../model/ProgramsFilterSorting';
import { SignalProviderSubscribers } from '../model/SignalProviderSubscribers';
import { Timeframe } from '../model/Timeframe';
import { TradeSorting } from '../model/TradeSorting';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';
import { TradesViewModel } from '../model/TradesViewModel';

export default class ProgramsApi {
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
        path: "/v2.0/programs/{id}/favorite/add",
        
        
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
        path: "/v2.0/programs/{id}/trades/close",
        
        
        method: "POST",
    })
  };

  exportDailyProgramAnalytics = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      numberMin?: number,
      numberMax?: number,
      status?: PeriodStatus,
      timeframe?: Timeframe,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   NumberMin: options['numberMin'],   NumberMax: options['numberMax'],   Status: options['status'],   Timeframe: options['timeframe'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/periods/export/analytics",
        
        returnType: "primitive",
        method: "GET",
    })
  };

  exportDailyProgramFinancialStatistic = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      numberMin?: number,
      numberMax?: number,
      status?: PeriodStatus,
      timeframe?: Timeframe,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   NumberMin: options['numberMin'],   NumberMax: options['numberMax'],   Status: options['status'],   Timeframe: options['timeframe'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/periods/export/financialstatistic",
        
        returnType: "primitive",
        method: "GET",
    })
  };

  exportProgramPeriods = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      numberMin?: number,
      numberMax?: number,
      status?: PeriodStatus,
      timeframe?: Timeframe,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   NumberMin: options['numberMin'],   NumberMax: options['numberMax'],   Status: options['status'],   Timeframe: options['timeframe'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/periods/export",
        
        returnType: "primitive",
        method: "GET",
    })
  };

  exportProgramPeriodsFinStatistic = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      numberMin?: number,
      numberMax?: number,
      status?: PeriodStatus,
      timeframe?: Timeframe,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   NumberMin: options['numberMin'],   NumberMax: options['numberMax'],   Status: options['status'],   Timeframe: options['timeframe'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/periods/export/statistic",
        
        returnType: "primitive",
        method: "GET",
    })
  };

  exportProgramTrades = (
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
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Symbol: options['symbol'],   Sorting: options['sorting'],   AccountId: options['accountId'],   AccountCurrency: options['accountCurrency'],   IsFollow: options['isFollow'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/trades/export",
        
        returnType: "primitive",
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
        path: "/v2.0/programs/{id}/trades",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramAbsoluteProfitChart = (
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
        path: "/v2.0/programs/{id}/charts/profit/absolute",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramBalanceChart = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      maxPointCount?: number,
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<ProgramBalanceChart> => {
    
    return generateMethod<Promise<ProgramBalanceChart>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   MaxPointCount: options['maxPointCount'],   Currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/charts/balance",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramDetails = (
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
        path: "/v2.0/programs/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramOpenTrades = (
    id: string,
    options: {
      sorting?: TradeSorting,
      symbol?: string,
      accountId?: string,
      accountCurrency?: Currency,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<TradesViewModel> => {
    
    return generateMethod<Promise<TradesViewModel>>({
        init,
        pathParams: {  id  },
        queryParams: {  Sorting: options['sorting'],   Symbol: options['symbol'],   AccountId: options['accountId'],   AccountCurrency: options['accountCurrency'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/trades/open",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramPeriods = (
    id: string,
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      numberMin?: number,
      numberMax?: number,
      status?: PeriodStatus,
      timeframe?: Timeframe,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<ProgramPeriodsViewModel> => {
    
    return generateMethod<Promise<ProgramPeriodsViewModel>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   NumberMin: options['numberMin'],   NumberMax: options['numberMax'],   Status: options['status'],   Timeframe: options['timeframe'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/periods",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramProfitPercentCharts = (
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
        path: "/v2.0/programs/{id}/charts/profit/percent",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getProgramSubscribers = (
    id: string,
    options: {
      status?: DashboardActionStatus,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<SignalProviderSubscribers> => {
    
    return generateMethod<Promise<SignalProviderSubscribers>>({
        init,
        pathParams: {  id  },
        queryParams: {  Status: options['status'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs/{id}/subscribers",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPrograms = (
    options: {
      sorting?: ProgramsFilterSorting,
      showIn?: Currency,
      tags?: Array<string>,
      programCurrency?: Currency,
      levelMin?: number,
      levelMax?: number,
      levelsSet?: Array<number>,
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
    init: RequestInit = {}): Promise<ProgramDetailsListItemItemsViewModel> => {
    
    return generateMethod<Promise<ProgramDetailsListItemItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   ShowIn: options['showIn'],   Tags: options['tags'],   ProgramCurrency: options['programCurrency'],   LevelMin: options['levelMin'],   LevelMax: options['levelMax'],   LevelsSet: options['levelsSet'],   InvestorId: options['investorId'],   IncludeWithInvestments: options['includeWithInvestments'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   FacetId: options['facetId'],   Mask: options['mask'],   OwnerId: options['ownerId'],   ShowFavorites: options['showFavorites'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/programs",
        
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
        path: "/v2.0/programs/{id}/favorite/remove",
        
        
        method: "POST",
    })
  };
}
