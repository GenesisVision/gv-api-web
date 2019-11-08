import { GenericFabric } from "../constructFromObject";
export declare type TransactionType = 'All' | 'Investment' | 'Withdrawal' | 'Deposit' | 'Conversion' | 'Commission' | 'Program' | 'Fund' | 'Follow' | 'TradingAccounts' | 'AgentReward' | 'ExternalWithdrawal' | 'ExternalDeposit' | 'Platform';
export declare const TransactionType: {
    constructFromObject: GenericFabric<"Program" | "Fund" | "Follow" | "All" | "Withdrawal" | "Investment" | "Deposit" | "Conversion" | "Commission" | "TradingAccounts" | "AgentReward" | "ExternalWithdrawal" | "ExternalDeposit" | "Platform">;
};
