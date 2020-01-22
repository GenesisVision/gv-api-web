import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { FundBalanceChart } from "../model/FundBalanceChart";
import { FundDetailsFull } from "../model/FundDetailsFull";
import { FundProfitPercentCharts } from "../model/FundProfitPercentCharts";
import { ItemsViewModelFundDetailsListItem } from "../model/ItemsViewModelFundDetailsListItem";
import { ItemsViewModelReallocationModel } from "../model/ItemsViewModelReallocationModel";
export declare class FundsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    addToFavorites(id: string, authorization: string): CancelablePromise<null>;
    private addToFavoritesWithHttpInfo;
    getFundAbsoluteProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<AbsoluteProfitChart>;
    private getFundAbsoluteProfitChartWithHttpInfo;
    getFundBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<FundBalanceChart>;
    private getFundBalanceChartWithHttpInfo;
    getFundDetails(id: string, opts?: {
        authorization?: string;
        currency?: 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<FundDetailsFull>;
    private getFundDetailsWithHttpInfo;
    getFundProfitPercentCharts(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        currencies?: Array<Object>;
        chartAssetsCount?: number;
    }): CancelablePromise<FundProfitPercentCharts>;
    private getFundProfitPercentChartsWithHttpInfo;
    getFunds(opts?: {
        authorization?: string;
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'BySizeAsc' | 'BySizeDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByNewAsc' | 'ByNewDesc' | 'ByValueAsc' | 'ByValueDesc';
        showIn?: 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        assets?: Array<string>;
        includeWithInvestments?: boolean;
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        ownerId?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelFundDetailsListItem>;
    private getFundsWithHttpInfo;
    getReallocatingHistory(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelReallocationModel>;
    private getReallocatingHistoryWithHttpInfo;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<null>;
    private removeFromFavoritesWithHttpInfo;
}
