import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { AccountBalanceChart } from "../model/AccountBalanceChart";
import { FollowDetailsFull } from "../model/FollowDetailsFull";
import { FollowProfitPercentCharts } from "../model/FollowProfitPercentCharts";
import { ItemsViewModelFollowDetailsList } from "../model/ItemsViewModelFollowDetailsList";
export declare class FollowApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getAbsoluteProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<AbsoluteProfitChart>;
    private getAbsoluteProfitChartWithHttpInfo;
    getBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<AccountBalanceChart>;
    private getBalanceChartWithHttpInfo;
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
        ownerId?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelFollowDetailsList>;
    private getFollowAssetsWithHttpInfo;
    getProfitPercentCharts(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        currencies?: Array<Object>;
    }): CancelablePromise<FollowProfitPercentCharts>;
    private getProfitPercentChartsWithHttpInfo;
}
