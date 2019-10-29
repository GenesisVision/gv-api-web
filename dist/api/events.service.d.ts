import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { InvestmentEventViewModels } from "../model/investmentEventViewModels";
export declare class EventsService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    getEvents(authorization: string, opts?: {
        eventLocation?: 'Asset' | 'Dashboard' | 'EventsAll';
        assetId?: string;
        from?: Date;
        to?: Date;
        eventType?: 'All' | 'AssetStarted' | 'AssetFinished' | 'AssetPeriodStarted' | 'AssetPeriodEnded' | 'AssetPeriodEndedDueToStopOut' | 'AssetBrokerChanged' | 'AssetInvestByInvestor' | 'AssetWithdrawalByInvestor' | 'AssetInvestByManager' | 'AssetWithdrawalByManager' | 'AssetPeriodProcessed' | 'AssetReallocation' | 'AssetSubscribeByInvestor' | 'AssetUnsubscribeByInvestor' | 'AssetTradeOpen' | 'AssetTradeClosed' | 'AssetSubscriptionEdit' | 'AssetEnterInvestment';
        assetType?: 'All' | 'Program' | 'Fund' | 'Signal';
        skip?: number;
        take?: number;
    }): CancelablePromise<InvestmentEventViewModels>;
    private getEventsWithHttpInfo;
}
