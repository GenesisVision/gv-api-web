import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
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
