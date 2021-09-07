import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { PlatformCoinAssetItemsViewModel } from '../model/PlatformCoinAssetItemsViewModel';

export default class CoinsApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getCoins = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<PlatformCoinAssetItemsViewModel> => {
    
    return generateMethod<Promise<PlatformCoinAssetItemsViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/coins",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
