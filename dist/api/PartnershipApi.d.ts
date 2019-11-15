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
        currency?: 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
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
