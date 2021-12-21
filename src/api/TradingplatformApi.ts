import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { BinanceAutoCloseType } from '../model/BinanceAutoCloseType';
import { BinanceFuturesAccountBalance } from '../model/BinanceFuturesAccountBalance';
import { BinanceFuturesMarginChangeDirectionType } from '../model/BinanceFuturesMarginChangeDirectionType';
import { BinanceFuturesMarginType } from '../model/BinanceFuturesMarginType';
import { BinanceKlineInterval } from '../model/BinanceKlineInterval';
import { BinancePeriodInterval } from '../model/BinancePeriodInterval';
import { BinancePositionMode } from '../model/BinancePositionMode';
import { BinancePositionSide } from '../model/BinancePositionSide';
import { BinanceRaw24HPrice } from '../model/BinanceRaw24HPrice';
import { BinanceRawAccountInfo } from '../model/BinanceRawAccountInfo';
import { BinanceRawAggregatedTrade } from '../model/BinanceRawAggregatedTrade';
import { BinanceRawBlvtKlineItemsViewModel } from '../model/BinanceRawBlvtKlineItemsViewModel';
import { BinanceRawBookPrice } from '../model/BinanceRawBookPrice';
import { BinanceRawCancelOrder } from '../model/BinanceRawCancelOrder';
import { BinanceRawCancelOrderId } from '../model/BinanceRawCancelOrderId';
import { BinanceRawExchangeInfo } from '../model/BinanceRawExchangeInfo';
import { BinanceRawFutures24HPrice } from '../model/BinanceRawFutures24HPrice';
import { BinanceRawFuturesAccountInfo } from '../model/BinanceRawFuturesAccountInfo';
import { BinanceRawFuturesBuySellVolumeRatio } from '../model/BinanceRawFuturesBuySellVolumeRatio';
import { BinanceRawFuturesCancelAllOrders } from '../model/BinanceRawFuturesCancelAllOrders';
import { BinanceRawFuturesCancelOrder } from '../model/BinanceRawFuturesCancelOrder';
import { BinanceRawFuturesChangeMarginTypeResult } from '../model/BinanceRawFuturesChangeMarginTypeResult';
import { BinanceRawFuturesCompositeIndexInfo } from '../model/BinanceRawFuturesCompositeIndexInfo';
import { BinanceRawFuturesFundingRateHistory } from '../model/BinanceRawFuturesFundingRateHistory';
import { BinanceRawFuturesIncomeHistory } from '../model/BinanceRawFuturesIncomeHistory';
import { BinanceRawFuturesInitialLeverageChangeResult } from '../model/BinanceRawFuturesInitialLeverageChangeResult';
import { BinanceRawFuturesLongShortRatio } from '../model/BinanceRawFuturesLongShortRatio';
import { BinanceRawFuturesMarkPrice } from '../model/BinanceRawFuturesMarkPrice';
import { BinanceRawFuturesOpenInterest } from '../model/BinanceRawFuturesOpenInterest';
import { BinanceRawFuturesOpenInterestHistory } from '../model/BinanceRawFuturesOpenInterestHistory';
import { BinanceRawFuturesOrder } from '../model/BinanceRawFuturesOrder';
import { BinanceRawFuturesOrderItemsViewModel } from '../model/BinanceRawFuturesOrderItemsViewModel';
import { BinanceRawFuturesPlaceOrder } from '../model/BinanceRawFuturesPlaceOrder';
import { BinanceRawFuturesPlacedOrder } from '../model/BinanceRawFuturesPlacedOrder';
import { BinanceRawFuturesPosition } from '../model/BinanceRawFuturesPosition';
import { BinanceRawFuturesPositionMarginResult } from '../model/BinanceRawFuturesPositionMarginResult';
import { BinanceRawFuturesPositionMode } from '../model/BinanceRawFuturesPositionMode';
import { BinanceRawFuturesSymbolBracket } from '../model/BinanceRawFuturesSymbolBracket';
import { BinanceRawFuturesUsdtExchangeInfo } from '../model/BinanceRawFuturesUsdtExchangeInfo';
import { BinanceRawFuturesUsdtTrade } from '../model/BinanceRawFuturesUsdtTrade';
import { BinanceRawKlineItemsViewModel } from '../model/BinanceRawKlineItemsViewModel';
import { BinanceRawOrderBook } from '../model/BinanceRawOrderBook';
import { BinanceRawOrderItemsViewModel } from '../model/BinanceRawOrderItemsViewModel';
import { BinanceRawPlaceOrder } from '../model/BinanceRawPlaceOrder';
import { BinanceRawPlacedOrder } from '../model/BinanceRawPlacedOrder';
import { BinanceRawPrice } from '../model/BinanceRawPrice';
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

  changeFuturesInitialLeverageAsync = (
    options: {
      accountId?: string,
      symbol?: string,
      leverage?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesInitialLeverageChangeResult> => {
    
    return generateMethod<Promise<BinanceRawFuturesInitialLeverageChangeResult>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   leverage: options['leverage']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/leverage/initial",
        
        returnType: "structure",
        method: "POST",
    })
  };

  changeFuturesMarginType = (
    options: {
      accountId?: string,
      symbol?: string,
      marginType?: BinanceFuturesMarginType
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesChangeMarginTypeResult> => {
    
    return generateMethod<Promise<BinanceRawFuturesChangeMarginTypeResult>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   marginType: options['marginType']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/margin/type",
        
        returnType: "structure",
        method: "POST",
    })
  };

  changeFuturesPositionMargin = (
    options: {
      accountId?: string,
      symbol?: string,
      amount?: number,
      type?: BinanceFuturesMarginChangeDirectionType,
      positionSide?: BinancePositionSide
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesPositionMarginResult> => {
    
    return generateMethod<Promise<BinanceRawFuturesPositionMarginResult>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   amount: options['amount'],   type: options['type'],   positionSide: options['positionSide']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/position/margin",
        
        returnType: "structure",
        method: "POST",
    })
  };

  futuresCancelAllOpenOrders = (
    options: {
      accountId?: string,
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesCancelAllOrders> => {
    
    return generateMethod<Promise<BinanceRawFuturesCancelAllOrders>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/orders/cancel/all",
        
        returnType: "structure",
        method: "POST",
    })
  };

  futuresCancelOrder = (
    options: {
      accountId?: string,
      symbol?: string,
      orderId?: number,
      origClientOrderId?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesCancelOrder> => {
    
    return generateMethod<Promise<BinanceRawFuturesCancelOrder>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   orderId: options['orderId'],   origClientOrderId: options['origClientOrderId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/orders/cancel",
        
        returnType: "structure",
        method: "POST",
    })
  };

  futuresKeepAliveAccountStream = (
    options: {
      accountId?: string,
      listenKey?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  accountId: options['accountId'],   listenKey: options['listenKey']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/stream/ping",
        
        
        method: "POST",
    })
  };

  futuresPlaceOrder = (
    options: {
      body?: BinanceRawFuturesPlaceOrder,
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesPlacedOrder> => {
    
    return generateMethod<Promise<BinanceRawFuturesPlacedOrder>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/orders/place",
        body: JSON.stringify(options['body']),
        returnType: "structure",
        method: "POST",
    })
  };

  futuresStartAccountStream = (
    options: {
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<string> => {
    
    return generateMethod<Promise<string>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/stream/start",
        
        returnType: "primitive",
        method: "POST",
    })
  };

  futuresStopAccountStream = (
    options: {
      accountId?: string,
      listenKey?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  accountId: options['accountId'],   listenKey: options['listenKey']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/stream/stop",
        
        
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

  getBlvtKlines = (
    options: {
      symbol?: string,
      interval?: BinanceKlineInterval,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawBlvtKlineItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawBlvtKlineItemsViewModel>>({
        init,
        queryParams: {  symbol: options['symbol'],   interval: options['interval'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/blvt/market/klines",
        
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
        path: "/v2.0/tradingplatform/binance/futures/market/ticker/24hr",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesAccountBalance = (
    options: {
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceFuturesAccountBalance>> => {
    
    return generateMethod<Promise<Array<BinanceFuturesAccountBalance>>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/balance",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesAccountInfo = (
    options: {
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesAccountInfo> => {
    
    return generateMethod<Promise<BinanceRawFuturesAccountInfo>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesBookPrices = (
    options: {
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawBookPrice>> => {
    
    return generateMethod<Promise<Array<BinanceRawBookPrice>>>({
        init,
        queryParams: {  symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/ticker/book",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesBrackets = (
    options: {
      accountId?: string,
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesSymbolBracket>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesSymbolBracket>>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/symbols/brackets",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesCompositeIndexInfo = (
    options: {
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesCompositeIndexInfo>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesCompositeIndexInfo>>>({
        init,
        queryParams: {  symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/index/composite/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesExchangeInfo = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesUsdtExchangeInfo> => {
    
    return generateMethod<Promise<BinanceRawFuturesUsdtExchangeInfo>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/server/info",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesForcedOrders = (
    options: {
      accountId?: string,
      symbol?: string,
      closeType?: BinanceAutoCloseType,
      startTime?: Date,
      endTime?: Date
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesOrder>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesOrder>>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   closeType: options['closeType'],   startTime: options['startTime'],   endTime: options['endTime']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/orders/force",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesFundingRates = (
    options: {
      symbol?: string,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesFundingRateHistory>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesFundingRateHistory>>>({
        init,
        queryParams: {  symbol: options['symbol'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/rates/funding",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesGlobalLongShortAccountRatio = (
    options: {
      symbol?: string,
      period?: BinancePeriodInterval,
      limit?: number,
      startTime?: Date,
      endTime?: Date
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesLongShortRatio>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesLongShortRatio>>>({
        init,
        queryParams: {  symbol: options['symbol'],   period: options['period'],   limit: options['limit'],   startTime: options['startTime'],   endTime: options['endTime']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/ratio/longshort/global/account",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesIncomeHistory = (
    options: {
      accountId?: string,
      symbol?: string,
      incomeType?: string,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesIncomeHistory>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesIncomeHistory>>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   incomeType: options['incomeType'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/income/history",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesKlines = (
    options: {
      symbol?: string,
      interval?: BinanceKlineInterval,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawKlineItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawKlineItemsViewModel>>({
        init,
        queryParams: {  symbol: options['symbol'],   interval: options['interval'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/klines",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesMarkPrices = (
    options: {
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesMarkPrice>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesMarkPrice>>>({
        init,
        queryParams: {  symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/prices/mark",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesOpenInterest = (
    options: {
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesOpenInterest> => {
    
    return generateMethod<Promise<BinanceRawFuturesOpenInterest>>({
        init,
        queryParams: {  symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/rates/interest",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesOpenInterestHistory = (
    options: {
      symbol?: string,
      period?: BinancePeriodInterval,
      limit?: number,
      startTime?: Date,
      endTime?: Date
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesOpenInterestHistory>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesOpenInterestHistory>>>({
        init,
        queryParams: {  symbol: options['symbol'],   period: options['period'],   limit: options['limit'],   startTime: options['startTime'],   endTime: options['endTime']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/rates/interest/history",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesOpenOrders = (
    options: {
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesOrderItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawFuturesOrderItemsViewModel>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/usdt/orders/open",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesOrderBook = (
    options: {
      symbol?: string,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawOrderBook> => {
    
    return generateMethod<Promise<BinanceRawOrderBook>>({
        init,
        queryParams: {  symbol: options['symbol'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/depth",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesOrders = (
    options: {
      accountId?: string,
      symbol?: string,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesOrderItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawFuturesOrderItemsViewModel>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/usdt/orders",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesPositionInformation = (
    options: {
      accountId?: string,
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesPosition>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesPosition>>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/position/risk",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesPositionMode = (
    options: {
      accountId?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesPositionMode> => {
    
    return generateMethod<Promise<BinanceRawFuturesPositionMode>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/position/mode",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesSymbolAggregatedTrades = (
    options: {
      symbol?: string,
      fromId?: number,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawAggregatedTrade>> => {
    
    return generateMethod<Promise<Array<BinanceRawAggregatedTrade>>>({
        init,
        queryParams: {  symbol: options['symbol'],   fromId: options['fromId'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/trades/aggregated",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesSymbolHistoricalTrades = (
    options: {
      symbol?: string,
      limit?: number,
      fromId?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawRecentTrade>> => {
    
    return generateMethod<Promise<Array<BinanceRawRecentTrade>>>({
        init,
        queryParams: {  symbol: options['symbol'],   limit: options['limit'],   fromId: options['fromId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/trades/historical",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesSymbolRecentTrades = (
    options: {
      symbol?: string,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawRecentTrade>> => {
    
    return generateMethod<Promise<Array<BinanceRawRecentTrade>>>({
        init,
        queryParams: {  symbol: options['symbol'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/trades/recent",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesTakerBuySellVolumeRatio = (
    options: {
      symbol?: string,
      period?: BinancePeriodInterval,
      limit?: number,
      startTime?: Date,
      endTime?: Date
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesBuySellVolumeRatio>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesBuySellVolumeRatio>>>({
        init,
        queryParams: {  symbol: options['symbol'],   period: options['period'],   limit: options['limit'],   startTime: options['startTime'],   endTime: options['endTime']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/ratio/buysell/volume/taker",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesTickerPrices = (
    options: {
      symbol?: string
      } = {},
    init: RequestInit = {}): Promise<BinanceRawPrice> => {
    
    return generateMethod<Promise<BinanceRawPrice>>({
        init,
        queryParams: {  symbol: options['symbol']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/ticker/price",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesTopLongShortAccountRatio = (
    options: {
      symbol?: string,
      period?: BinancePeriodInterval,
      limit?: number,
      startTime?: Date,
      endTime?: Date
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesLongShortRatio>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesLongShortRatio>>>({
        init,
        queryParams: {  symbol: options['symbol'],   period: options['period'],   limit: options['limit'],   startTime: options['startTime'],   endTime: options['endTime']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/ratio/longshort/top/account",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesTopLongShortPositionRatio = (
    options: {
      symbol?: string,
      period?: BinancePeriodInterval,
      limit?: number,
      startTime?: Date,
      endTime?: Date
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesLongShortRatio>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesLongShortRatio>>>({
        init,
        queryParams: {  symbol: options['symbol'],   period: options['period'],   limit: options['limit'],   startTime: options['startTime'],   endTime: options['endTime']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/market/ratio/longshort/top/position",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesTrades = (
    options: {
      accountId?: string,
      symbol?: string,
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawFuturesUsdtTrade>> => {
    
    return generateMethod<Promise<Array<BinanceRawFuturesUsdtTrade>>>({
        init,
        queryParams: {  accountId: options['accountId'],   symbol: options['symbol'],   startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/trades",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getFuturesTradesHistory = (
    options: {
      accountId?: string,
      mode?: TradingPlatformBinanceOrdersMode,
      dateFrom?: Date,
      dateTo?: Date,
      symbol?: string,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<BinanceRawFuturesOrderItemsViewModel> => {
    
    return generateMethod<Promise<BinanceRawFuturesOrderItemsViewModel>>({
        init,
        queryParams: {  AccountId: options['accountId'],   Mode: options['mode'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Symbol: options['symbol'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/futures/trades",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getKlines = (
    symbol: string,
    options: {
      interval?: BinanceKlineInterval,
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

  getSymbolAggregatedTrades = (
    symbol: string,
    options: {
      startTime?: Date,
      endTime?: Date,
      limit?: number
      } = {},
    init: RequestInit = {}): Promise<Array<BinanceRawAggregatedTrade>> => {
    
    return generateMethod<Promise<Array<BinanceRawAggregatedTrade>>>({
        init,
        pathParams: {  symbol  },
        queryParams: {  startTime: options['startTime'],   endTime: options['endTime'],   limit: options['limit']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/market/{symbol}/trades/aggregated",
        
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
    init: RequestInit = {}): Promise<BinanceRawPlacedOrder> => {
    
    return generateMethod<Promise<BinanceRawPlacedOrder>>({
        init,
        queryParams: {  accountId: options['accountId']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/spot/orders/place",
        body: JSON.stringify(options['body']),
        returnType: "structure",
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

  setFuturesPositionMode = (
    options: {
      accountId?: string,
      mode?: BinancePositionMode
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        queryParams: {  accountId: options['accountId'],   mode: options['mode']  },
        apiClient: this.apiClient,
        path: "/v2.0/tradingplatform/binance/account/futures/position/mode",
        
        
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
