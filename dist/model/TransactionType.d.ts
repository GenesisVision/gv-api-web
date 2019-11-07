import { GenericFabric } from "../constructFromObject";
export declare type TransactionType = 'All' | 'Investment' | 'Withdrawal' | 'Deposit' | 'Conversion' | 'Commission' | 'Programs' | 'Funds' | 'Signals' | 'TradingAccounts' | 'AgentRewards' | 'ExternalWithdrawal' | 'ExternalDeposit' | 'Platform';
export declare const TransactionType: {
    constructFromObject: GenericFabric<"Programs" | "Funds" | "All" | "Withdrawal" | "Signals" | "Investment" | "Deposit" | "Conversion" | "Commission" | "TradingAccounts" | "AgentRewards" | "ExternalWithdrawal" | "ExternalDeposit" | "Platform">;
};
