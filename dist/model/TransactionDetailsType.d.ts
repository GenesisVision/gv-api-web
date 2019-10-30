import { GenericFabric } from "../constructFromObject";
export declare type TransactionDetailsType = 'Investing' | 'Withdrawal' | 'ExternalWithdrawal' | 'ExternalDeposit' | 'Converting' | 'Open' | 'Close' | 'Profit' | 'PlatformFee' | 'SubscribeSignal' | 'ReceiveSignal' | 'DepositSignal' | 'WithdrawalSignal' | 'Platform';
export declare const TransactionDetailsType: {
    constructFromObject: GenericFabric<TransactionDetailsType>;
};
