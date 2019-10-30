import { WalletWithdrawalInfo } from './walletWithdrawalInfo';
export declare class WithdrawalSummary {
    'availableToWithdrawal'?: number;
    'wallets'?: [WalletWithdrawalInfo];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WithdrawalSummary): WithdrawalSummary;
}
