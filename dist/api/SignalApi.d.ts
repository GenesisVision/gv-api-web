import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AttachToSignalProvider } from "../model/AttachToSignalProvider";
import { AttachToSignalProviderSettings } from "../model/AttachToSignalProviderSettings";
import { CopyTradingAccountsList } from "../model/CopyTradingAccountsList";
import { DetachFromSignalProvider } from "../model/DetachFromSignalProvider";
import { SignalTradingEvents } from "../model/SignalTradingEvents";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";
export declare class SignalApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    attachSlaveToMaster(id: string, authorization: string, opts?: {
        model?: AttachToSignalProviderSettings;
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
    getSlaveAttachInfo(id: string, authorization: string): CancelablePromise<null>;
    private getSlaveAttachInfoWithHttpInfo;
    updateSubscriptionSettings(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<null>;
    private updateSubscriptionSettingsWithHttpInfo;
}
