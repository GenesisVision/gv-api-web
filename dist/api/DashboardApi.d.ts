import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { DashboardAssets } from "../model/DashboardAssets";
import { DashboardChart } from "../model/DashboardChart";
import { DashboardChartAssets } from "../model/DashboardChartAssets";
import { DashboardInvestingDetails } from "../model/DashboardInvestingDetails";
import { DashboardPortfolio } from "../model/DashboardPortfolio";
import { DashboardRecommendations } from "../model/DashboardRecommendations";
import { DashboardSummary } from "../model/DashboardSummary";
import { DashboardTradingDetails } from "../model/DashboardTradingDetails";
import { ItemsViewModelDashboardTradingAsset } from "../model/ItemsViewModelDashboardTradingAsset";
export declare class DashboardApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getChart(authorization: string, opts?: {
        assets?: Array<string>;
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        showIn?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<DashboardChart>;
    private getChartWithHttpInfo;
    getChartAssets(authorization: string): CancelablePromise<DashboardChartAssets>;
    private getChartAssetsWithHttpInfo;
    getHoldings(authorization: string, opts?: {
        topAssetsCount?: number;
    }): CancelablePromise<DashboardAssets>;
    private getHoldingsWithHttpInfo;
    getInvestingDetails(authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        eventsTake?: number;
    }): CancelablePromise<DashboardInvestingDetails>;
    private getInvestingDetailsWithHttpInfo;
    getPortfolio(authorization: string): CancelablePromise<DashboardPortfolio>;
    private getPortfolioWithHttpInfo;
    getPublicTradingAssets(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        showIn?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<ItemsViewModelDashboardTradingAsset>;
    private getPublicTradingAssetsWithHttpInfo;
    getRecommendations(authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<DashboardRecommendations>;
    private getRecommendationsWithHttpInfo;
    getSummary(authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<DashboardSummary>;
    private getSummaryWithHttpInfo;
    getTradingDetails(authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        eventsTake?: number;
    }): CancelablePromise<DashboardTradingDetails>;
    private getTradingDetailsWithHttpInfo;
}
