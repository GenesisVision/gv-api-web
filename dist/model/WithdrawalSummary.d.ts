import { WalletWithdrawalInfo } from './WalletWithdrawalInfo';
export declare class WithdrawalSummary {
    'availableToWithdrawal': number;
    'wallets': Array<WalletWithdrawalInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WithdrawalSummary;
}
