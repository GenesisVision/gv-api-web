import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { DashboardAssets } from "../model/dashboardAssets";
import { DashboardInvestingDetails } from "../model/dashboardInvestingDetails";
import { DashboardPortfolio } from "../model/dashboardPortfolio";
import { DashboardRecommendations } from "../model/dashboardRecommendations";
import { DashboardSummary } from "../model/dashboardSummary";
import { DashboardTradingDetails } from "../model/dashboardTradingDetails";
export declare class DashboardService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    getAssets(authorization: string, opts?: {
        count?: number;
    }): CancelablePromise<DashboardAssets>;
    private getAssetsWithHttpInfo;
    getChart(authorization: string): CancelablePromise<null>;
    private getChartWithHttpInfo;
    getInvestingDetails(authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
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
    }): CancelablePromise<DashboardTradingDetails>;
    private getTradingDetailsWithHttpInfo;
}
