import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CommonPublicAssetsViewModel } from "../model/CommonPublicAssetsViewModel";
import { DashboardAssets } from "../model/DashboardAssets";
import { DashboardChart } from "../model/DashboardChart";
import { DashboardChartAssets } from "../model/DashboardChartAssets";
import { DashboardInvestingDetails } from "../model/DashboardInvestingDetails";
import { DashboardPortfolio } from "../model/DashboardPortfolio";
import { DashboardSummary } from "../model/DashboardSummary";
import { DashboardTradingDetails } from "../model/DashboardTradingDetails";
import { ItemsViewModelDashboardTradingAsset } from "../model/ItemsViewModelDashboardTradingAsset";
import { ItemsViewModelFundInvestingDetailsList } from "../model/ItemsViewModelFundInvestingDetailsList";
import { ItemsViewModelProgramInvestingDetailsList } from "../model/ItemsViewModelProgramInvestingDetailsList";
export declare class DashboardApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getChart(authorization: string, opts?: {
        assets?: Array<string>;
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        showIn?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<DashboardChart>;
    private getChartWithHttpInfo;
    getChartAssets(authorization: string): CancelablePromise<DashboardChartAssets>;
    private getChartAssetsWithHttpInfo;
    getHoldings(authorization: string, opts?: {
        topAssetsCount?: number;
    }): CancelablePromise<DashboardAssets>;
    private getHoldingsWithHttpInfo;
    getInvestingDetails(authorization: string, opts?: {
        currency?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        eventsTake?: number;
    }): CancelablePromise<DashboardInvestingDetails>;
    private getInvestingDetailsWithHttpInfo;
    getInvestingFunds(authorization: string, opts?: {
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'BySizeAsc' | 'BySizeDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByNewAsc' | 'ByNewDesc' | 'ByValueAsc' | 'ByValueDesc';
        showIn?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        status?: 'All' | 'Active';
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        ownerId?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelFundInvestingDetailsList>;
    private getInvestingFundsWithHttpInfo;
    getInvestingPrograms(authorization: string, opts?: {
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'ByEquityAsc' | 'ByEquityDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByPeriodAsc' | 'ByPeriodDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByNewAsc' | 'ByNewDesc' | 'ByLevelProgressAsc' | 'ByLevelProgressDesc' | 'ByLevelAsc' | 'ByLevelDesc' | 'ByValueAsc' | 'ByValueDesc';
        showIn?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        status?: 'All' | 'Active';
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        ownerId?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelProgramInvestingDetailsList>;
    private getInvestingProgramsWithHttpInfo;
    getMostProfitableAssets(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        showIn?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<ItemsViewModelDashboardTradingAsset>;
    private getMostProfitableAssetsWithHttpInfo;
    getPortfolio(authorization: string): CancelablePromise<DashboardPortfolio>;
    private getPortfolioWithHttpInfo;
    getPrivateTradingAssets(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        showIn?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        status?: 'All' | 'Active';
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelDashboardTradingAsset>;
    private getPrivateTradingAssetsWithHttpInfo;
    getPublicTradingAssets(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        showIn?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        status?: 'All' | 'Active';
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelDashboardTradingAsset>;
    private getPublicTradingAssetsWithHttpInfo;
    getRecommendations(authorization: string, opts?: {
        currency?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        take?: number;
    }): CancelablePromise<CommonPublicAssetsViewModel>;
    private getRecommendationsWithHttpInfo;
    getSummary(authorization: string, opts?: {
        currency?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<DashboardSummary>;
    private getSummaryWithHttpInfo;
    getTradingDetails(authorization: string, opts?: {
        currency?: 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        eventsTake?: number;
    }): CancelablePromise<DashboardTradingDetails>;
    private getTradingDetailsWithHttpInfo;
}
