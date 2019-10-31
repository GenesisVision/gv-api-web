import { Currency } from './Currency';
export declare class WalletWithdrawalInfo {
    'currency': Currency;
    'description': string;
    'logo': string;
    'commission': number;
    'rateToGvt': number;
    'availableToWithdrawal': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletWithdrawalInfo | undefined;
}
