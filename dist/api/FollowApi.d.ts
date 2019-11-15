import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { FollowDetailsFull } from "../model/FollowDetailsFull";
import { ItemsViewModelFollowDetailsList } from "../model/ItemsViewModelFollowDetailsList";
export declare class FollowApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getFollowAssetDetails(id: string, opts?: {
        authorization?: string;
    }): CancelablePromise<FollowDetailsFull>;
    private getFollowAssetDetailsWithHttpInfo;
    getFollowAssets(opts?: {
        authorization?: string;
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'BySubscribersAsc' | 'BySubscribersDesc' | 'ByTradesAsc' | 'ByTradesDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByNewAsc' | 'ByNewDesc';
        showIn?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        tags?: Array<string>;
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelFollowDetailsList>;
    private getFollowAssetsWithHttpInfo;
}
