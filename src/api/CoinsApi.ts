import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { CoinsAssetItemsViewModel } from '../model/CoinsAssetItemsViewModel';
import { CoinsFilterSorting } from '../model/CoinsFilterSorting';
import { CoinsHistoryEventItemsViewModel } from '../model/CoinsHistoryEventItemsViewModel';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { InternalTransferRequest } from '../model/InternalTransferRequest';

export default class CoinsApi {
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
        path: "/v2.0/coins/coins/{id}/favorite/add",
        
        
        method: "POST",
    })
  };

  getCoins = (
    options: {
      sorting?: CoinsFilterSorting,
      assets?: Array<string>,
      isFavorite?: boolean,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<CoinsAssetItemsViewModel> => {
    
    return generateMethod<Promise<CoinsAssetItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   Assets: options['assets'],   IsFavorite: options['isFavorite'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/coins",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getCoinsConvertingHistory = (
    options: {
      dateFrom?: Date,
      dateTo?: Date,
      assets?: Array<string>,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<CoinsHistoryEventItemsViewModel> => {
    
    return generateMethod<Promise<CoinsHistoryEventItemsViewModel>>({
        init,
        queryParams: {  DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   Assets: options['assets'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/coins/history",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getUserCoins = (
    options: {
      sorting?: CoinsFilterSorting,
      assets?: Array<string>,
      isFavorite?: boolean,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<CoinsAssetItemsViewModel> => {
    
    return generateMethod<Promise<CoinsAssetItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   Assets: options['assets'],   IsFavorite: options['isFavorite'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/coins/portfolio",
        
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
        path: "/v2.0/coins/coins/{id}/favorite/remove",
        
        
        method: "POST",
    })
  };

  transfer = (
    options: {
      body?: InternalTransferRequest
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/coins/transfer",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };
}
