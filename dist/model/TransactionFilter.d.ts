import { GenericFabric } from "../constructFromObject";
export declare type TransactionFilter = 'All' | 'Investment' | 'Withdrawal' | 'Deposit' | 'Conversion' | 'Commission' | 'Programs' | 'Funds' | 'Signals' | 'TradingAccounts' | 'AgentRewards' | 'ExternalWithdrawal' | 'ExternalDeposit' | 'Platform';
export declare const TransactionFilter: {
    constructFromObject: GenericFabric<"Programs" | "Funds" | "All" | "Withdrawal" | "Signals" | "Investment" | "Deposit" | "Conversion" | "Commission" | "TradingAccounts" | "AgentRewards" | "ExternalWithdrawal" | "ExternalDeposit" | "Platform">;
};
