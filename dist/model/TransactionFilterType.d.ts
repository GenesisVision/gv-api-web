import { GenericFabric } from "../constructFromObject";
export declare type TransactionFilterType = 'All' | 'Investment' | 'Withdrawal' | 'Deposit' | 'Conversion' | 'Commission' | 'Programs' | 'Funds' | 'Signals' | 'TradingAccounts' | 'AgentRewards' | 'Externals' | 'Platform';
export declare const TransactionFilterType: {
    constructFromObject: GenericFabric<"Programs" | "Funds" | "Signals" | "TradingAccounts" | "All" | "Withdrawal" | "Investment" | "Deposit" | "Conversion" | "Commission" | "AgentRewards" | "Externals" | "Platform">;
};
