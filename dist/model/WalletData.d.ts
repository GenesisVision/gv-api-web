import { Currency } from './Currency';
export declare class WalletData {
    'id': string;
    'title': string;
    'logo': string;
    'rateToGVT': number;
    'isDepositEnabled': boolean;
    'isWithdrawalEnabled': boolean;
    'withdrawalCommission': number;
    'depositAddress': string;
    'currency': Currency;
    'available': number;
    'invested': number;
    'pending': number;
    'total': number;
    'currencyCcy': Currency;
    'availableCcy': number;
    'investedCcy': number;
    'pendingCcy': number;
    'totalCcy': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletData | undefined;
}
