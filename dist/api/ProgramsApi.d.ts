import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { ItemsViewModelProgramDetailsListItem } from "../model/ItemsViewModelProgramDetailsListItem";
import { ProgramBalanceChart } from "../model/ProgramBalanceChart";
import { ProgramFollowDetailsFull } from "../model/ProgramFollowDetailsFull";
import { ProgramPeriodsViewModel } from "../model/ProgramPeriodsViewModel";
import { ProgramProfitPercentCharts } from "../model/ProgramProfitPercentCharts";
import { SignalProviderSubscribers } from "../model/SignalProviderSubscribers";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";
import { TradesViewModel } from "../model/TradesViewModel";
export declare class ProgramsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    addToFavorites(id: string, authorization: string): CancelablePromise<null>;
    private addToFavoritesWithHttpInfo;
    exportProgramPeriods(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: 'Planned' | 'InProccess' | 'Closed';
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportProgramPeriodsWithHttpInfo;
    exportProgramPeriodsFinStatistic(id: string, authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: 'Planned' | 'InProccess' | 'Closed';
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportProgramPeriodsFinStatisticWithHttpInfo;
    exportProgramTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        isFollow?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportProgramTradesWithHttpInfo;
    getAssetTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        isFollow?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
    private getAssetTradesWithHttpInfo;
    getProgramAbsoluteProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<AbsoluteProfitChart>;
    private getProgramAbsoluteProfitChartWithHttpInfo;
    getProgramBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<ProgramBalanceChart>;
    private getProgramBalanceChartWithHttpInfo;
    getProgramDetails(id: string, opts?: {
        authorization?: string;
    }): CancelablePromise<ProgramFollowDetailsFull>;
    private getProgramDetailsWithHttpInfo;
    getProgramOpenTrades(id: string, opts?: {
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        symbol?: string;
        accountId?: string;
        accountCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    private getProgramOpenTradesWithHttpInfo;
    getProgramPeriods(id: string, opts?: {
        authorization?: string;
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: 'Planned' | 'InProccess' | 'Closed';
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramPeriodsViewModel>;
    private getProgramPeriodsWithHttpInfo;
    getProgramProfitPercentCharts(id: string, opts?: {
        authorization?: string;
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        currencies?: Array<Object>;
    }): CancelablePromise<ProgramProfitPercentCharts>;
    private getProgramProfitPercentChartsWithHttpInfo;
    getProgramSubscribers(id: string, authorization: string, opts?: {
        status?: 'All' | 'Active';
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalProviderSubscribers>;
    private getProgramSubscribersWithHttpInfo;
    getPrograms(opts?: {
        authorization?: string;
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'ByEquityAsc' | 'ByEquityDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByPeriodAsc' | 'ByPeriodDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByNewAsc' | 'ByNewDesc' | 'ByLevelProgressAsc' | 'ByLevelProgressDesc' | 'ByLevelAsc' | 'ByLevelDesc' | 'ByValueAsc' | 'ByValueDesc';
        showIn?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        tags?: Array<string>;
        programCurrency?: 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        levelMin?: number;
        levelMax?: number;
        levelsSet?: Array<number>;
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        ownerId?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelProgramDetailsListItem>;
    private getProgramsWithHttpInfo;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<null>;
    private removeFromFavoritesWithHttpInfo;
}
