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
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'ByAgeAsc' | 'ByAgeDesc' | 'ByAumAsc' | 'ByAumDesc' | 'ByFollowersAsc' | 'ByFollowersDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByProfitAsc' | 'ByProfitDesc';
        showIn?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        tags?: Array<string>;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelUserDetailsList>;
    private getUsersListWithHttpInfo;
}
