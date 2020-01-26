import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ItemsViewModelReferralFriend } from "../model/ItemsViewModelReferralFriend";
import { ItemsViewModelRewardDetails } from "../model/ItemsViewModelRewardDetails";
import { PartnershipDetails } from "../model/PartnershipDetails";
export declare class PartnershipApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    exportHistory(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportHistoryWithHttpInfo;
    getDetails(authorization: string, opts?: {
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<PartnershipDetails>;
    private getDetailsWithHttpInfo;
    getReferrals(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelReferralFriend>;
    private getReferralsWithHttpInfo;
    getRewardsHistory(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelRewardDetails>;
    private getRewardsHistoryWithHttpInfo;
}
