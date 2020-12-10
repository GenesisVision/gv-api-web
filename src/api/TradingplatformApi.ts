import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { BinanceRaw24HPrice } from '../model/BinanceRaw24HPrice';
import { BinanceRawAccountInfo } from '../model/BinanceRawAccountInfo';
import { BinanceRawCancelOrder } from '../model/BinanceRawCancelOrder';
import { BinanceRawCancelOrderId } from '../model/BinanceRawCancelOrderId';
import { BinanceRawExchangeInfo } from '../model/BinanceRawExchangeInfo';
import { BinanceRawFutures24HPrice } from '../model/BinanceRawFutures24HPrice';
import { BinanceRawFuturesExchangeInfo } from '../model/BinanceRawFuturesExchangeInfo';
import { BinanceRawKlineInterval } from '../model/BinanceRawKlineInterval';
import { BinanceRawKlineItemsViewModel } from '../model/BinanceRawKlineItemsViewModel';
import { BinanceRawOrderBook } from '../model/BinanceRawOrderBook';
import { BinanceRawOrderItemsViewModel } from '../model/BinanceRawOrderItemsViewModel';
import { BinanceRawPlaceOrder } from '../model/BinanceRawPlaceOrder';
import { BinanceRawRecentTrade } from '../model/BinanceRawRecentTrade';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { StringItemsViewModel } from '../model/StringItemsViewModel';
import { TimestampDate } from '../model/TimestampDate';
import { TradingPlatformBinanceOrdersMode } from '../model/TradingPlatformBinanceOrdersMode';

export default class TradingplatformApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  addFavoriteSymbol = (
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

  cancelAllOrders = (
    options: {
      accountId?: string,
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawCancelOrderId>> => {
    
    return generateMethod<Promise<Array<BinanceRawCancelOrderId>>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/orders/cancel/all",
        
        returnType: "structure",
        method: "POST",
    })
  };

  cancelOrder = (
    options: {
      accountId?: string,
      symbol?: string,
      orderId?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawCancelOrder> => {
    
    return generateMethod<Promise<BinanceRawCancelOrder>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   orderId: options['orderId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/orders/cancel",
        
        returnType: "structure",
        method: "POST",
    })
  };

  get24HPrice = (
    symbol: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<BinanceRaw24HPrice> => {
    
    return generateMethod<Promise<BinanceRaw24HPrice>>({
        init,
        pathParams: {  symbol  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/{symbol}/ticker/24hr",
        
        returnType: "structure",
        method: "GET",
    })
  };

  get24HPrices = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRaw24HPrice>> => {
    
    return generateMethod<Promise<Array<BinanceRaw24HPrice>>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/ticker/24hr",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getAccountInfo = (
    options: {
      accountId?: string,
      currency?: Currency
      } = {},
    init: RequestInit = {}): Promise<BinanceRawAccountInfo> => {
    
    return generateMethod<Promise<BinanceRawAccountInfo>>({
        init,
        queryParams: {  accountId: options['accountId'],   currency: options['currency']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account",
        
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

  getExchangeTime = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<TimestampDate> => {
    
    return generateMethod<Promise<TimestampDate>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/server/time",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFavoriteSymbols = (
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

  getFutures24HPrices = (
    options: {
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFutures24HPrice>> => {
    
    return generateMethod<Promise<Array<BinanceRawFutures24HPrice>>>({
        init,
        queryParams: {  symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/futures/ticker/24hr",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesExchangeInfo = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesExchangeInfo> => {
    
    return generateMethod<Promise<BinanceRawFuturesExchangeInfo>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/server/futures/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesKlines = (
    symbol: string,
    options: {
      interval?: BinanceRawKlineInterval,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawKlineItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawKlineItemsViewModel>>({
        init,
        pathParams: {  symbol  },
        queryParams: {  interval: options['interval'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/futures/{symbol}/klines",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesOrderBook = (
    symbol: string,
    options: {
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawOrderBook> => {
    
    return generateMethod<Promise<BinanceRawOrderBook>>({
        init,
        pathParams: {  symbol  },
        queryParams: {  limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/futures/{symbol}/depth",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesSymbolRecentTrades = (
    symbol: string,
    options: {
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawRecentTrade>> => {
    
    return generateMethod<Promise<Array<BinanceRawRecentTrade>>>({
        init,
        pathParams: {  symbol  },
        queryParams: {  limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/futures/{symbol}/trades/recent",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getKlines = (
    symbol: string,
    options: {
      interval?: BinanceRawKlineInterval,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawKlineItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawKlineItemsViewModel>>({
        init,
        pathParams: {  symbol  },
        queryParams: {  interval: options['interval'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/{symbol}/klines",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getOpenOrders = (
    options: {
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawOrderItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawOrderItemsViewModel>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/orders",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getOrderBook = (
    symbol: string,
    options: {
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawOrderBook> => {
    
    return generateMethod<Promise<BinanceRawOrderBook>>({
        init,
        pathParams: {  symbol  },
        queryParams: {  limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/{symbol}/depth",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getSymbolRecentTrades = (
    symbol: string,
    options: {
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawRecentTrade>> => {
    
    return generateMethod<Promise<Array<BinanceRawRecentTrade>>>({
        init,
        pathParams: {  symbol  },
        queryParams: {  limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/{symbol}/trades/recent",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getTradesHistory = (
    options: {
      accountId?: string,
      mode?: TradingPlatformBinanceOrdersMode,
      dateFrom?: Date,
      dateTo?: Date,
      symbol?: string,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawOrderItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawOrderItemsViewModel>>({
        init,
        queryParams: {  AccountId: options['accountId'],   Mode: options['mode'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Symbol: options['symbol'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/trades",
        
        returnType: "structure",
        method: "GET",
    })
  };

  keepAliveAccountStream = (
    options: {
      accountId?: string,
      listenKey?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  accountId: options['accountId'],   listenKey: options['listenKey']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/stream/ping",
        
        
        method: "POST",
    })
  };

  placeOrder = (
    options: {
      body?: BinanceRawPlaceOrder,
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/orders/place",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  removeFavoriteSymbol = (
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

  startAccountStream = (
    options: {
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/stream/start",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  stopAccountStream = (
    options: {
      accountId?: string,
      listenKey?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  accountId: options['accountId'],   listenKey: options['listenKey']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/stream/stop",
        
        
        method: "POST",
    })
  };
}
