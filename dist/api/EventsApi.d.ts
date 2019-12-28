import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { InvestmentEventViewModels } from "../model/InvestmentEventViewModels";
export declare class EventsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getEvents(authorization: string, opts?: {
        eventLocation?: 'Asset' | 'Dashboard' | 'EventsAll';
        assetId?: string;
        from?: Date;
        to?: Date;
        eventType?: 'AssetPeriodStarted' | 'All' | 'AssetStarted' | 'AssetFinished' | 'AssetPeriodEnded' | 'AssetPeriodEndedDueToStopOut' | 'AssetBrokerChanged' | 'AssetInvestByInvestor' | 'AssetWithdrawalByInvestor' | 'AssetInvestByManager' | 'AssetWithdrawalByManager' | 'AssetPeriodProcessed' | 'AssetReallocation' | 'AssetSubscribeByInvestor' | 'AssetUnsubscribeByInvestor' | 'AssetTradeOpen' | 'AssetTradeClosed' | 'AssetSubscriptionEdit' | 'AssetEnterInvestment';
        assetType?: 'All' | 'Program' | 'Fund' | 'Follow';
        assetsIds?: Array<string>;
        forceFilterByIds?: boolean;
        eventGroup?: 'InvestmentHistory' | 'TradingHistory';
        skip?: number;
        take?: number;
    }): CancelablePromise<InvestmentEventViewModels>;
    private getEventsWithHttpInfo;
}
