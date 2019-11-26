import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ItemsViewModelUserDetailsList } from "../model/ItemsViewModelUserDetailsList";
import { PublicProfile } from "../model/PublicProfile";
export declare class UsersApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getManagerProfile(id: string): CancelablePromise<PublicProfile>;
    private getManagerProfileWithHttpInfo;
    getUsersList(opts?: {
        facetId?: string;
        sorting?: 'ByNameAsc' | 'ByNameDesc' | 'ByAgeAsc' | 'ByAgeDesc' | 'ByAumAsc' | 'ByAumDesc' | 'ByFollowersAsc' | 'ByFollowersDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByProfitAsc' | 'ByProfitDesc';
        tags?: Array<string>;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelUserDetailsList>;
    private getUsersListWithHttpInfo;
}
