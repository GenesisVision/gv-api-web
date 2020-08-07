import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ExchangeInfoItemsViewModel } from '../model/ExchangeInfoItemsViewModel';

export default class ExchangesApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getExchanges = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<ExchangeInfoItemsViewModel> => {
    
    return generateMethod<Promise<ExchangeInfoItemsViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/exchanges",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
