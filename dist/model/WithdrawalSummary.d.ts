import { WalletWithdrawalInfo } from './WalletWithdrawalInfo';
export declare class WithdrawalSummary {
    'availableToWithdrawal'?: number;
    'wallets'?: Array<WalletWithdrawalInfo>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WithdrawalSummary): WithdrawalSummary;
}
