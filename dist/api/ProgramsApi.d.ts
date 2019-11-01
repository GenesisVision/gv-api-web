import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ProgramBalanceChartOld } from "../model/ProgramBalanceChartOld";
import { ProgramDetailsFullOld } from "../model/ProgramDetailsFullOld";
import { ProgramPeriodsViewModel } from "../model/ProgramPeriodsViewModel";
import { ProgramProfitChartOld } from "../model/ProgramProfitChartOld";
import { ProgramSets } from "../model/ProgramSets";
import { ProgramsListOld } from "../model/ProgramsListOld";
import { SignalProviderSubscribers } from "../model/SignalProviderSubscribers";
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
    exportTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportTradesWithHttpInfo;
    getProgramBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<ProgramBalanceChartOld>;
    private getProgramBalanceChartWithHttpInfo;
    getProgramDetails(id: string, opts?: {
        authorization?: string;
        currencySecondary?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<ProgramDetailsFullOld>;
    private getProgramDetailsWithHttpInfo;
    getProgramOpenTrades(id: string, opts?: {
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        symbol?: string;
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
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
    getProgramProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<ProgramProfitChartOld>;
    private getProgramProfitChartWithHttpInfo;
    getProgramSets(authorization: string): CancelablePromise<ProgramSets>;
    private getProgramSetsWithHttpInfo;
    getProgramSubscribers(id: string, authorization: string, opts?: {
        status?: 'All' | 'Active';
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalProviderSubscribers>;
    private getProgramSubscribersWithHttpInfo;
    getProgramTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    private getProgramTradesWithHttpInfo;
    getPrograms(opts?: {
        authorization?: string;
        levelMin?: number;
        levelMax?: number;
        levelsSet?: Array<number>;
        profitAvgMin?: number;
        profitAvgMax?: number;
        sorting?: 'ByLevelAsc' | 'ByLevelDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByTradesAsc' | 'ByTradesDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByNewDesc' | 'ByNewAsc' | 'ByEndOfPeriodAsc' | 'ByEndOfPeriodDesc' | 'ByTitleAsc' | 'ByTitleDesc' | 'ByBalanceAsc' | 'ByBalanceDesc' | 'ByCurrDesc' | 'ByCurrAsc' | 'ByLevelProgressDesc' | 'ByLevelProgressAsc';
        programCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        currencySecondary?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        levelUpFrom?: number;
        tags?: Array<string>;
        isSignal?: boolean;
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
    }): CancelablePromise<ProgramsListOld>;
    private getProgramsWithHttpInfo;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<null>;
    private removeFromFavoritesWithHttpInfo;
}
