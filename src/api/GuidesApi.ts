import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { GuidesCategoryItemsViewModel } from '../model/GuidesCategoryItemsViewModel';

export default class GuidesApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getGuides = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<GuidesCategoryItemsViewModel> => {
    
    return generateMethod<Promise<GuidesCategoryItemsViewModel>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/guides",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
