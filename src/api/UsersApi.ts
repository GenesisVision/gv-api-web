import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ImageQuality } from '../model/ImageQuality';
import { PublicProfile } from '../model/PublicProfile';
import { PublicProfileFollow } from '../model/PublicProfileFollow';
import { UserDetailsListItemsViewModel } from '../model/UserDetailsListItemsViewModel';
import { UsersFilterSorting } from '../model/UsersFilterSorting';
import { UsersFilterTimeframe } from '../model/UsersFilterTimeframe';

export default class UsersApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getUserProfile = (
    id: string,
    options: {
      logoQuality?: ImageQuality
      } = {},
    init: RequestInit = {}): Promise<PublicProfile> => {
    
    return generateMethod<Promise<PublicProfile>>({
        init,
        pathParams: {  id  },
        queryParams: {  logoQuality: options['logoQuality']  },
        apiClient: this.apiClient,
        path: "/v2.0/users/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getUserProfileFollowDetails = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<PublicProfileFollow> => {
    
    return generateMethod<Promise<PublicProfileFollow>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/users/{id}/follow",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getUsersList = (
    options: {
      sorting?: UsersFilterSorting,
      timeframe?: UsersFilterTimeframe,
      tags?: Array<string>,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<UserDetailsListItemsViewModel> => {
    
    return generateMethod<Promise<UserDetailsListItemsViewModel>>({
        init,
        queryParams: {  Sorting: options['sorting'],   Timeframe: options['timeframe'],   Tags: options['tags'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/users",
        
        returnType: "structure",
        method: "GET",
    })
  };
}
