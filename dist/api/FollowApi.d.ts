import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ItemsViewModelCopyTradingDetailsList } from "../model/ItemsViewModelCopyTradingDetailsList";
export declare class FollowApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getFollowAssets(opts?: {
        authorization?: string;
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
    }): CancelablePromise<ItemsViewModelCopyTradingDetailsList>;
    private getFollowAssetsWithHttpInfo;
}
