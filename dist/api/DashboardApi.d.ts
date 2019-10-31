import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { DashboardAssets } from "../model/DashboardAssets";
import { DashboardInvestingDetails } from "../model/DashboardInvestingDetails";
import { DashboardPortfolio } from "../model/DashboardPortfolio";
import { DashboardRecommendations } from "../model/DashboardRecommendations";
import { DashboardSummary } from "../model/DashboardSummary";
import { DashboardTradingDetails } from "../model/DashboardTradingDetails";
export declare class DashboardApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getAssets(authorization: string, opts?: {
        topAssetsCount?: number;
    }): CancelablePromise<DashboardAssets>;
    private getAssetsWithHttpInfo;
    getChart(authorization: string): CancelablePromise<null>;
    private getChartWithHttpInfo;
    getInvestingDetails(authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        eventsTake?: number;
    }): CancelablePromise<DashboardInvestingDetails>;
    private getInvestingDetailsWithHttpInfo;
    getPortfolio(authorization: string): CancelablePromise<DashboardPortfolio>;
    private getPortfolioWithHttpInfo;
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
