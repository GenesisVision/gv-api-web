import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { FundBalanceChart } from "../model/fundBalanceChart";
import { FundDetailsFull } from "../model/fundDetailsFull";
import { FundProfitCharts } from "../model/fundProfitCharts";
import { ItemsViewModelFundDetailsList } from "../model/itemsViewModelFundDetailsList";
import { ItemsViewModelReallocationModel } from "../model/itemsViewModelReallocationModel";
export declare class FundsService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    addToFavorites(id: string, authorization: string): CancelablePromise<null>;
    private addToFavoritesWithHttpInfo;
    getFundBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<FundBalanceChart>;
    private getFundBalanceChartWithHttpInfo;
    getFundDetails(id: string, opts?: {
        authorization?: string;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<FundDetailsFull>;
    private getFundDetailsWithHttpInfo;
    getFundProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        currencies?: Array<Object>;
        chartAssetsCount?: number;
    }): CancelablePromise<FundProfitCharts>;
    private getFundProfitChartWithHttpInfo;
    getFunds(opts?: {
        authorization?: string;
        assets?: Array<string>;
        statisticDateFrom?: Date;
        statisticDateTo?: Date;
        chartPointsCount?: number;
        chartCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        facetId?: string;
        mask?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelFundDetailsList>;
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
