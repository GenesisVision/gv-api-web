import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { BinanceRaw24HPrice } from '../model/BinanceRaw24HPrice';
import { BinanceRawExchangeInfo } from '../model/BinanceRawExchangeInfo';
import { BinanceRawKline } from '../model/BinanceRawKline';
import { BinanceRawKlineInterval } from '../model/BinanceRawKlineInterval';
import { BinanceRawOrderBook } from '../model/BinanceRawOrderBook';
import { BinanceRawOrderItemsViewModel } from '../model/BinanceRawOrderItemsViewModel';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { StringItemsViewModel } from '../model/StringItemsViewModel';
import { TradingPlatformBinanceOrdersMode } from '../model/TradingPlatformBinanceOrdersMode';

export default class TradingplatformApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  addTradingPlatformFavoriteSymbol = (
    id: string,
    symbol: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id,   symbol  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/accounts/{id}/symbols/favorite/{symbol}/add",
        
        
        method: "POST",
    })
  };

  get24HPrice = (
    options: {
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRaw24HPrice> => {
    
    return generateMethod<Promise<BinanceRaw24HPrice>>({
        init,
        queryParams: {  symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/ticker/24hr",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getExchangeInfo = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<BinanceRawExchangeInfo> => {
    
    return generateMethod<Promise<BinanceRawExchangeInfo>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/server/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getKlines = (
    options: {
      symbol?: string,
      interval?: BinanceRawKlineInterval,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawKline>> => {
    
    return generateMethod<Promise<Array<BinanceRawKline>>>({
        init,
        queryParams: {  symbol: options['symbol'],   interval: options['interval'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/klines",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getOrderBook = (
    options: {
      symbol?: string,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawOrderBook> => {
    
    return generateMethod<Promise<BinanceRawOrderBook>>({
        init,
        queryParams: {  symbol: options['symbol'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/depth",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getServerTime = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<Date> => {
    
    return generateMethod<Promise<Date>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/server/time",
        
        returnType: "primitive",
        method: "GET",
    })
  };

  getTradingPlatformBinanceOrders = (
    options: {
      accountId?: string,
      mode?: TradingPlatformBinanceOrdersMode,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawOrderItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawOrderItemsViewModel>>({
        init,
        queryParams: {  AccountId: options['accountId'],   Mode: options['mode'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/orders",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getTradingPlatformFavoriteSymbols = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<StringItemsViewModel> => {
    
    return generateMethod<Promise<StringItemsViewModel>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/accounts/{id}/symbols/favorite",
        
        returnType: "structure",
        method: "GET",
    })
  };

  removeTradingPlatformFavoriteSymbol = (
    id: string,
    symbol: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id,   symbol  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/accounts/{id}/symbols/favorite/{symbol}/remove",
        
        
        method: "POST",
    })
  };
}
