import { GenericFabric } from "../constructFromObject";
export declare type InvestmentEventType = 'All' | 'AssetFinished' | 'AssetPeriodStarted' | 'AssetPeriodEnded' | 'AssetPeriodEndedDueToStopOut' | 'AssetBrokerChanged' | 'AssetEnterInvestment' | 'AssetInvestByInvestor' | 'AssetWithdrawalByInvestor' | 'AssetReallocation' | 'AssetStarted' | 'AssetPeriodProcessed' | 'AssetInvestByManager' | 'AssetWithdrawalByManager' | 'AssetSubscribeByInvestor' | 'AssetUnsubscribeByInvestor' | 'AssetTradeOpen' | 'AssetTradeClosed' | 'AssetSubscriptionEdit';
export declare const InvestmentEventType: {
    constructFromObject: GenericFabric<"All" | "AssetFinished" | "AssetPeriodStarted" | "AssetPeriodEnded" | "AssetPeriodEndedDueToStopOut" | "AssetBrokerChanged" | "AssetEnterInvestment" | "AssetInvestByInvestor" | "AssetWithdrawalByInvestor" | "AssetReallocation" | "AssetStarted" | "AssetPeriodProcessed" | "AssetInvestByManager" | "AssetWithdrawalByManager" | "AssetSubscribeByInvestor" | "AssetUnsubscribeByInvestor" | "AssetTradeOpen" | "AssetTradeClosed" | "AssetSubscriptionEdit">;
};
