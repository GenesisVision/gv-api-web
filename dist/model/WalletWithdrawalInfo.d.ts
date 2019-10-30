import { Currency } from './Currency';
export declare class WalletWithdrawalInfo {
    'currency'?: Currency;
    'description'?: string;
    'logo'?: string;
    'commission'?: number;
    'rateToGvt'?: number;
    'availableToWithdrawal'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletWithdrawalInfo): WalletWithdrawalInfo;
}
