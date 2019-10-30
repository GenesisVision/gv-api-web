import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { FundAssetsListInfo } from "../model/fundAssetsListInfo";
import { FundBalanceChartOld } from "../model/fundBalanceChartOld";
import { FundDetailsFullOld } from "../model/fundDetailsFullOld";
import { FundProfitChartOld } from "../model/fundProfitChartOld";
import { FundSets } from "../model/fundSets";
import { FundsListOld } from "../model/fundsListOld";
import { PlatformAssets } from "../model/platformAssets";
import { ReallocationsViewModel } from "../model/reallocationsViewModel";
export declare class FundsService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    addToFavorites(id: string, authorization: string): CancelablePromise<null>;
    private addToFavoritesWithHttpInfo;
    getAllAssets(): CancelablePromise<PlatformAssets>;
    private getAllAssetsWithHttpInfo;
    getFundAssets(id: string): CancelablePromise<FundAssetsListInfo>;
    private getFundAssetsWithHttpInfo;
    getFundBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<FundBalanceChartOld>;
    private getFundBalanceChartWithHttpInfo;
    getFundDetails(id: string, opts?: {
        authorization?: string;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<FundDetailsFullOld>;
    private getFundDetailsWithHttpInfo;
    getFundProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        chartAssetsCount?: number;
    }): CancelablePromise<FundProfitChartOld>;
    private getFundProfitChartWithHttpInfo;
    getFunds(opts?: {
        authorization?: string;
        sorting?: 'ByProfitAsc' | 'ByProfitDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByNewAsc' | 'ByNewDesc' | 'ByTitleAsc' | 'ByTitleDesc' | 'ByBalanceAsc' | 'ByBalanceDesc';
        currencySecondary?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        assets?: Array<string>;
        statisticDateFrom?: Date;
        statisticDateTo?: Date;
        chartPointsCount?: number;
        mask?: string;
        facetId?: string;
        isFavorite?: boolean;
        isEnabled?: boolean;
        hasInvestorsForAll?: boolean;
        hasInvestorsForClosed?: boolean;
        ids?: Array<string>;
        forceUseIdsList?: boolean;
        managerId?: string;
        programManagerId?: string;
        status?: Array<Object>;
        skip?: number;
        take?: number;
    }): CancelablePromise<FundsListOld>;
    private getFundsWithHttpInfo;
    getProgramSets(authorization: string): CancelablePromise<FundSets>;
    private getProgramSetsWithHttpInfo;
    getReallocationsHistory(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        skip?: number;
        take?: number;
    }): CancelablePromise<ReallocationsViewModel>;
    private getReallocationsHistoryWithHttpInfo;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<null>;
    private removeFromFavoritesWithHttpInfo;
}
