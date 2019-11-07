import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AttachToExternalSignalProviderCommon } from "../model/AttachToExternalSignalProviderCommon";
import { AttachToExternalSignalProviderExt } from "../model/AttachToExternalSignalProviderExt";
import { AttachToSignalProvider } from "../model/AttachToSignalProvider";
import { DetachFromExternalSignalProvider } from "../model/DetachFromExternalSignalProvider";
import { DetachFromSignalProvider } from "../model/DetachFromSignalProvider";
import { ItemsViewModelExternalSignalTradingEvent } from "../model/ItemsViewModelExternalSignalTradingEvent";
import { ItemsViewModelSignalTradingEvent } from "../model/ItemsViewModelSignalTradingEvent";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";
export declare class SignalApi {
    private apiClient;
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
        assetId?: string;
    }): CancelablePromise<null>;
    private closeTradeWithHttpInfo;
    detachSlaveFromMaster(id: string, authorization: string, opts?: {
        model?: DetachFromSignalProvider;
    }): CancelablePromise<null>;
    private detachSlaveFromMasterWithHttpInfo;
    detachSlaveFromMaster_2(id: string, authorization: string, opts?: {
        model?: DetachFromExternalSignalProvider;
    }): CancelablePromise<null>;
    private detachSlaveFromMaster_2WithHttpInfo;
    getExternalSignalTradingLog(authorization: string, opts?: {
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelExternalSignalTradingEvent>;
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
    }): CancelablePromise<ItemsViewModelSignalTradingEvent>;
    private getSignalTradingLogWithHttpInfo;
    getSubscriberAccountsForAsset(id: string, authorization: string): CancelablePromise<null>;
    private getSubscriberAccountsForAssetWithHttpInfo;
    updateSubscriptionSettings(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<null>;
    private updateSubscriptionSettingsWithHttpInfo;
}