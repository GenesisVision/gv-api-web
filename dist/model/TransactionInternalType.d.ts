import { GenericFabric } from "../constructFromObject";
export declare type TransactionInternalType = 'All' | 'Investment' | 'Withdrawal' | 'Conversion' | 'Commission' | 'Program' | 'Fund' | 'Follow' | 'TradingAccounts' | 'AgentReward' | 'Platform';
export declare const TransactionInternalType: {
    constructFromObject: GenericFabric<"Program" | "Fund" | "Follow" | "All" | "Withdrawal" | "Platform" | "Investment" | "Conversion" | "Commission" | "TradingAccounts" | "AgentReward">;
};
