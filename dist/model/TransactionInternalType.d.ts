import { GenericFabric } from "../constructFromObject";
export declare type TransactionInternalType = 'All' | 'Investment' | 'Withdrawal' | 'Deposit' | 'Conversion' | 'Commission' | 'Program' | 'Fund' | 'Follow' | 'TradingAccounts' | 'AgentReward' | 'Platform';
export declare const TransactionInternalType: {
    constructFromObject: GenericFabric<"Program" | "Fund" | "Follow" | "All" | "Withdrawal" | "Deposit" | "Platform" | "Investment" | "Conversion" | "Commission" | "TradingAccounts" | "AgentReward">;
};
