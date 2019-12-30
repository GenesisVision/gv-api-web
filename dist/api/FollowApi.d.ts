import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { AccountBalanceChart } from "../model/AccountBalanceChart";
import { ItemsViewModelFollowDetailsListItem } from "../model/ItemsViewModelFollowDetailsListItem";
import { ItemsViewModelSignalSubscription } from "../model/ItemsViewModelSignalSubscription";
import { ProgramFollowDetailsFull } from "../model/ProgramFollowDetailsFull";
import { ProgramProfitPercentCharts } from "../model/ProgramProfitPercentCharts";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";
export declare class FollowApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    addToFavorites(id: string, authorization: string): CancelablePromise<null>;
    private addToFavoritesWithHttpInfo;
    getAbsoluteProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<AbsoluteProfitChart>;
    private getAbsoluteProfitChartWithHttpInfo;
    getAssetTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        isFollow?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
    private getAssetTradesWithHttpInfo;
    getBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<AccountBalanceChart>;
    private getBalanceChartWithHttpInfo;
    getFollowAssetDetails(id: string, opts?: {
        authorization?: string;
    }): CancelablePromise<ProgramFollowDetailsFull>;
    private getFollowAssetDetailsWithHttpInfo;
    getFollowAssets(opts?: {
        authorization?: string;
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'BySubscribersAsc' | 'BySubscribersDesc' | 'ByTradesAsc' | 'ByTradesDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByNewAsc' | 'ByNewDesc';
        showIn?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
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
    }): CancelablePromise<ItemsViewModelFollowDetailsListItem>;
    private getFollowAssetsWithHttpInfo;
    getFollowSubscriptionsForAsset(id: string, authorization: string, opts?: {
        onlyActive?: boolean;
    }): CancelablePromise<ItemsViewModelSignalSubscription>;
    private getFollowSubscriptionsForAssetWithHttpInfo;
    getFollowSubscriptionsForOwnAccount(id: string, authorization: string, opts?: {
        onlyActive?: boolean;
    }): CancelablePromise<ItemsViewModelSignalSubscription>;
    private getFollowSubscriptionsForOwnAccountWithHttpInfo;
    getProfitPercentCharts(id: string, opts?: {
        authorization?: string;
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        currencies?: Array<Object>;
    }): CancelablePromise<ProgramProfitPercentCharts>;
    private getProfitPercentChartsWithHttpInfo;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<null>;
    private removeFromFavoritesWithHttpInfo;
}
