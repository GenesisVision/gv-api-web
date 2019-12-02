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
        eventType?: 'All' | 'AssetFinished' | 'AssetPeriodStarted' | 'AssetPeriodEnded' | 'AssetPeriodEndedDueToStopOut' | 'AssetBrokerChanged' | 'AssetEnterInvestment' | 'AssetTradeOpen' | 'AssetTradeClosed' | 'AssetSubscriptionEdit' | 'AssetInvestByInvestor' | 'AssetWithdrawalByInvestor' | 'AssetReallocation' | 'AssetStarted' | 'AssetPeriodProcessed' | 'AssetInvestByManager' | 'AssetWithdrawalByManager' | 'AssetSubscribeByInvestor' | 'AssetUnsubscribeByInvestor';
        assetType?: 'All' | 'Program' | 'Fund' | 'Signal';
        assetsIds?: Array<string>;
        forceFilterByIds?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<InvestmentEventViewModels>;
    private getEventsWithHttpInfo;
}
