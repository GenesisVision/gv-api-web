import { GenericFabric } from "../constructFromObject";
export declare type TransactionInternalType = 'All' | 'Investment' | 'Withdrawal' | 'Conversion' | 'Commission' | 'Program' | 'Fund' | 'Follow' | 'TradingAccounts' | 'AgentReward';
export declare const TransactionInternalType: {
    constructFromObject: GenericFabric<"Program" | "Fund" | "Follow" | "All" | "Withdrawal" | "Investment" | "Conversion" | "Commission" | "TradingAccounts" | "AgentReward">;
};
