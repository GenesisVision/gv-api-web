import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AttachToExternalSignalProviderCommon } from "../model/AttachToExternalSignalProviderCommon";
import { AttachToExternalSignalProviderExt } from "../model/AttachToExternalSignalProviderExt";
import { AttachToSignalProvider } from "../model/AttachToSignalProvider";
import { DetachFromExternalSignalProvider } from "../model/DetachFromExternalSignalProvider";
import { DetachFromSignalProvider } from "../model/DetachFromSignalProvider";
import { ItemsViewModelSignalTradingEvent } from "../model/ItemsViewModelSignalTradingEvent";
import { ItemsViewModelTradingAccountDetails } from "../model/ItemsViewModelTradingAccountDetails";
import { TradesSignalViewModel } from "../model/TradesSignalViewModel";
export declare class SignalApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    attachSlaveToMasterExternalCommonAccount(id: string, authorization: string, opts?: {
        model?: AttachToExternalSignalProviderCommon;
    }): CancelablePromise<null>;
    private attachSlaveToMasterExternalCommonAccountWithHttpInfo;
    attachSlaveToMasterExternalPrivateAccount(id: string, authorization: string, opts?: {
        model?: AttachToExternalSignalProviderExt;
    }): CancelablePromise<null>;
    private attachSlaveToMasterExternalPrivateAccountWithHttpInfo;
    attachSlaveToMasterInternal(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<null>;
    private attachSlaveToMasterInternalWithHttpInfo;
    closeTradeInternal(id: string, authorization: string, opts?: {
        assetId?: string;
    }): CancelablePromise<null>;
    private closeTradeInternalWithHttpInfo;
    detachSlaveFromMasterExternal(id: string, authorization: string, opts?: {
        model?: DetachFromExternalSignalProvider;
    }): CancelablePromise<null>;
    private detachSlaveFromMasterExternalWithHttpInfo;
    detachSlaveFromMasterInternal(id: string, authorization: string, opts?: {
        model?: DetachFromSignalProvider;
    }): CancelablePromise<null>;
    private detachSlaveFromMasterInternalWithHttpInfo;
    getOpenSignalTrades(authorization: string, opts?: {
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        symbol?: string;
        accountId?: string;
        accountCurrency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesSignalViewModel>;
    private getOpenSignalTradesWithHttpInfo;
    getSignalTradingLog(authorization: string, opts?: {
        accountId?: string;
        accountCurrency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelSignalTradingEvent>;
    private getSignalTradingLogWithHttpInfo;
    getSubscriberAccountsForAsset(id: string, authorization: string): CancelablePromise<ItemsViewModelTradingAccountDetails>;
    private getSubscriberAccountsForAssetWithHttpInfo;
    updateExternalSubscriptionSettings(id: string, authorization: string, opts?: {
        model?: AttachToExternalSignalProviderExt;
    }): CancelablePromise<null>;
    private updateExternalSubscriptionSettingsWithHttpInfo;
    updateSubscriptionSettings(id: string, authorization: string, opts?: {
        model?: AttachToSignalProvider;
    }): CancelablePromise<null>;
    private updateSubscriptionSettingsWithHttpInfo;
}
