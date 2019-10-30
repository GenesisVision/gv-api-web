import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ItemsViewModelReferralFriend } from "../model/itemsViewModelReferralFriend";
import { ItemsViewModelRewardDetails } from "../model/itemsViewModelRewardDetails";
import { PartnershipDetails } from "../model/partnershipDetails";
export declare class PartnershipService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    exportHistory(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportHistoryWithHttpInfo;
    getDetails(authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
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
