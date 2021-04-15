import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { RateModel } from '../model/RateModel';
import { RatesModel } from '../model/RatesModel';

export default class RateApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getRate = (
    from: string,
    to: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<RateModel> => {
    
    return generateMethod<Promise<RateModel>>({
        init,
        pathParams: {  from,   to  },
        apiClient: this.apiClient,
        path: "/v2.0/rate/{from}/{to}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getRateExchange = (
    exchange: string,
    from: string,
    to: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<RateModel> => {
    
    return generateMethod<Promise<RateModel>>({
        init,
        pathParams: {  exchange,   from,   to  },
        apiClient: this.apiClient,
        path: "/v2.0/rate/{exchange}/{from}/{to}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getRates = (
    options: {
      from?: Array<string>,
      to?: Array<string>
      } = {},
    init: RequestInit = {}): Promise<RatesModel> => {
    
    return generateMethod<Promise<RatesModel>>({
        init,
        queryParams: {  from: options['from'],   to: options['to']  },
        apiClient: this.apiClient,
        path: "/v2.0/rate",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
