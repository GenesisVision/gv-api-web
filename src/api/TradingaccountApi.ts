import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { AccountProfitPercentCharts } from '../model/AccountProfitPercentCharts';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { PrivateTradingAccountFull } from '../model/PrivateTradingAccountFull';
import { TradeSorting } from '../model/TradeSorting';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';
import { TradesViewModel } from '../model/TradesViewModel';

export default class TradingaccountApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  closeAccountAssetTrade = (
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
        path: "/v2.0/tradingaccount/{id}/trades/close",
        
        
        method: "POST",
    })
  };

  exportTrades = (
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
        path: "/v2.0/tradingaccount/{id}/trades/export",
        
        returnType: "primitive",
        method: "GET",
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
        path: "/v2.0/tradingaccount/{id}/charts/profit/absolute",
        
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
        path: "/v2.0/tradingaccount/{id}/charts/balance",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getOpenTrades = (
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
        path: "/v2.0/tradingaccount/{id}/trades/open",
        
        returnType: "structure",
        method: "GET",
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
    init: RequestInit = {}): Promise<AccountProfitPercentCharts> => {
    
    return generateMethod<Promise<AccountProfitPercentCharts>>({
        init,
        pathParams: {  id  },
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   MaxPointCount: options['maxPointCount'],   Currency: options['currency'],   currencies: options['currencies']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingaccount/{id}/charts/profit/percent",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getTrades = (
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
        path: "/v2.0/tradingaccount/{id}/trades",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getTradingAccountDetails = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<PrivateTradingAccountFull> => {
    
    return generateMethod<Promise<PrivateTradingAccountFull>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingaccount/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
