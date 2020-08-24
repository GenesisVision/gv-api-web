import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { ErrorViewModel } from '../model/ErrorViewModel';

export default class SearchApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  search = (
    options: {
      mask?: string,
      take?: number,
      skipStatistic?: boolean
      } = {},
    init: RequestInit = {}): Promise<CommonPublicAssetsViewModel> => {
    
    return generateMethod<Promise<CommonPublicAssetsViewModel>>({
        init,
        queryParams: {  mask: options['mask'],   take: options['take'],   skipStatistic: options['skipStatistic']  },
        apiClient: this.apiClient,
        path: "/v2.0/search",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
