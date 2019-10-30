import { GenericFabric } from "../constructFromObject";
export declare type MultiWalletTransactionType = 'All' | 'Investment' | 'Converting' | 'Withdrawal' | 'Close' | 'Open' | 'Fee' | 'Profits' | 'SubscribeSignal' | 'ReceiveSignal' | 'DepositSignal' | 'WithdrawalSignal' | 'Platform';
export declare const MultiWalletTransactionType: {
    constructFromObject: GenericFabric<MultiWalletTransactionType>;
};
