import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { ItemsViewModelProgramDetailsList } from "../model/ItemsViewModelProgramDetailsList";
import { ProgramBalanceChart } from "../model/ProgramBalanceChart";
import { ProgramDetailsFull } from "../model/ProgramDetailsFull";
import { ProgramPeriodsViewModel } from "../model/ProgramPeriodsViewModel";
import { ProgramProfitPercentCharts } from "../model/ProgramProfitPercentCharts";
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
    exportProgramTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportProgramTradesWithHttpInfo;
    getProgramAbsoluteProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<AbsoluteProfitChart>;
    private getProgramAbsoluteProfitChartWithHttpInfo;
    getProgramBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<ProgramBalanceChart>;
    private getProgramBalanceChartWithHttpInfo;
    getProgramDetails(id: string, opts?: {
        authorization?: string;
    }): CancelablePromise<ProgramDetailsFull>;
    private getProgramDetailsWithHttpInfo;
    getProgramOpenTrades(id: string, opts?: {
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        symbol?: string;
        accountId?: string;
        accountCurrency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
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
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        currencies?: Array<Object>;
    }): CancelablePromise<ProgramProfitPercentCharts>;
    private getProgramProfitPercentChartsWithHttpInfo;
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
        accountCurrency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    private getProgramTradesWithHttpInfo;
    getPrograms(opts?: {
        authorization?: string;
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'ByEquityAsc' | 'ByEquityDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByPeriodAsc' | 'ByPeriodDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByNewAsc' | 'ByNewDesc' | 'ByLevelProgressAsc' | 'ByLevelProgressDesc' | 'ByLevelAsc' | 'ByLevelDesc' | 'ByValueAsc' | 'ByValueDesc';
        showIn?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        tags?: Array<string>;
        programCurrency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        levelMin?: number;
        levelMax?: number;
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        ownerId?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelProgramDetailsList>;
    private getProgramsWithHttpInfo;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<null>;
    private removeFromFavoritesWithHttpInfo;
}
