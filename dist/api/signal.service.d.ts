import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AttachToExternalSignalProviderCommon } from "../model/attachToExternalSignalProviderCommon";
import { AttachToExternalSignalProviderExt } from "../model/attachToExternalSignalProviderExt";
import { AttachToSignalProvider } from "../model/attachToSignalProvider";
import { AttachToSignalProviderInfo } from "../model/attachToSignalProviderInfo";
import { CopyTradingAccountsList } from "../model/copyTradingAccountsList";
import { DetachFromSignalProvider } from "../model/detachFromSignalProvider";
import { ItemsViewModelCopyTradingAccountInfo } from "../model/itemsViewModelCopyTradingAccountInfo";
import { NewExternalSignalAccountRequest } from "../model/newExternalSignalAccountRequest";
import { ProgramCreateResult } from "../model/programCreateResult";
import { SignalTradingEvents } from "../model/signalTradingEvents";
import { TradesSignalViewModel } from "../model/tradesSignalViewModel";
export declare class SignalService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    attachSlaveCommonToMaster(id: string, authorization: string, opts?: {
        model?: AttachToExternalSignalProviderCommon;
    }): CancelablePromise<null>;
    private attachSlaveCommonToMasterWithHttpInfo;
    attachSlaveToMaster(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<null>;
    private attachSlaveToMasterWithHttpInfo;
    attachSlaveToMaster_1(id: string, authorization: string, opts?: {
        model?: AttachToExternalSignalProviderExt;
    }): CancelablePromise<null>;
    private attachSlaveToMaster_1WithHttpInfo;
    closeTrade(id: string, authorization: string, opts?: {
        programId?: string;
    }): CancelablePromise<null>;
    private closeTradeWithHttpInfo;
    createExternalSignalAccount(authorization: string, opts?: {
        request?: NewExternalSignalAccountRequest;
    }): CancelablePromise<ProgramCreateResult>;
    private createExternalSignalAccountWithHttpInfo;
    detachSlaveFromMaster(id: string, authorization: string, opts?: {
        model?: DetachFromSignalProvider;
    }): CancelablePromise<null>;
    private detachSlaveFromMasterWithHttpInfo;
    getCopytradingAccounts(authorization: string): CancelablePromise<CopyTradingAccountsList>;
    private getCopytradingAccountsWithHttpInfo;
    getExternalSignalTradingLog(authorization: string, opts?: {
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalTradingEvents>;
    private getExternalSignalTradingLogWithHttpInfo;
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
