import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { CoinsAssetItemsViewModel } from '../model/CoinsAssetItemsViewModel';
import { CoinsFilterSorting } from '../model/CoinsFilterSorting';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { InternalTransferRequest } from '../model/InternalTransferRequest';

export default class CoinsApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getCoins = (
    options: {
      sorting?: CoinsFilterSorting,
      showIn?: Currency,
      assets?: Array<string>,
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
    init: RequestInit = {}): Promise<CoinsAssetItemsViewModel> => {
    
    return generateMethod<Promise<CoinsAssetItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   ShowIn: options['showIn'],   Assets: options['assets'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   FacetId: options['facetId'],   Mask: options['mask'],   OwnerId: options['ownerId'],   ShowFavorites: options['showFavorites'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/coins",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getUserCoins = (
    options: {
      sorting?: CoinsFilterSorting,
      showIn?: Currency,
      assets?: Array<string>,
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
    init: RequestInit = {}): Promise<CoinsAssetItemsViewModel> => {
    
    return generateMethod<Promise<CoinsAssetItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   ShowIn: options['showIn'],   Assets: options['assets'],   DateFrom: options['dateFrom'],   DateTo: options['dateTo'],   ChartPointsCount: options['chartPointsCount'],   FacetId: options['facetId'],   Mask: options['mask'],   OwnerId: options['ownerId'],   ShowFavorites: options['showFavorites'],   SkipStatistic: options['skipStatistic'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/coins/portfolio",
        
        returnType: "structure",
        method: "GET",
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
