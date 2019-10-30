import { WalletWithdrawalInfo } from './walletWithdrawalInfo';
export declare class WithdrawalSummary {
    'availableToWithdrawal'?: number;
    'wallets'?: Array<WalletWithdrawalInfo>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WithdrawalSummary): WithdrawalSummary;
}
