import { Currency } from './currency';
export declare class WalletWithdrawalInfo {
    'currency'?: Currency;
    'description'?: string;
    'logo'?: string;
    'commission'?: number;
    'rateToGvt'?: number;
    'availableToWithdrawal'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: WalletWithdrawalInfo): WalletWithdrawalInfo;
}
