import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AttachToSignalProvider } from "../model/attachToSignalProvider";
import { AttachToSignalProviderInfo } from "../model/attachToSignalProviderInfo";
import { CopyTradingAccountsList } from "../model/copyTradingAccountsList";
import { DetachFromSignalProvider } from "../model/detachFromSignalProvider";
import { ItemsViewModelCopyTradingAccountInfo } from "../model/itemsViewModelCopyTradingAccountInfo";
import { SignalTradingEvents } from "../model/signalTradingEvents";
import { TradesSignalViewModel } from "../model/tradesSignalViewModel";
export declare class SignalService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    attachSlaveToMaster(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<null>;
    private attachSlaveToMasterWithHttpInfo;
    closeTrade(id: string, authorization: string, opts?: {
        programId?: string;
    }): CancelablePromise<null>;
    private closeTradeWithHttpInfo;
    detachSlaveFromMaster(id: string, authorization: string, opts?: {
        model?: DetachFromSignalProvider;
    }): CancelablePromise<null>;
    private detachSlaveFromMasterWithHttpInfo;
    getCopytradingAccounts(authorization: string): CancelablePromise<CopyTradingAccountsList>;
    private getCopytradingAccountsWithHttpInfo;
    getOpenSignalTrades(authorization: string, opts?: {
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        symbol?: string;
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
    private getOpenSignalTradesWithHttpInfo;
    getSignalTrades(authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
    private getSignalTradesWithHttpInfo;
    getSignalTradingLog(authorization: string, opts?: {
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalTradingEvents>;
    private getSignalTradingLogWithHttpInfo;
    getSignals(opts?: {
        authorization?: string;
        tags?: Array<string>;
        statisticDateFrom?: Date;
        statisticDateTo?: Date;
        chartPointsCount?: number;
        chartCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        facetId?: string;
        mask?: string;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelCopyTradingAccountInfo>;
    private getSignalsWithHttpInfo;
    getSlaveAttachInfo(id: string, authorization: string): CancelablePromise<AttachToSignalProviderInfo>;
    private getSlaveAttachInfoWithHttpInfo;
    updateSubscriptionSettings(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<null>;
    private updateSubscriptionSettingsWithHttpInfo;
}
