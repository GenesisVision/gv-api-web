import { Currency } from './Currency';
export declare class WalletData {
    'pending': number;
    'total': number;
    'availableCcy': number;
    'investedCcy': number;
    'tradingCcy': number;
    'pendingCcy': number;
    'totalCcy': number;
    'id': string;
    'title': string;
    'logo': string;
    'isDepositEnabled': boolean;
    'isWithdrawalEnabled': boolean;
    'withdrawalCommission': number;
    'depositAddress': string;
    'depositUrl': string;
    'currency': Currency;
    'available': number;
    'invested': number;
    'trading': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): WalletData | undefined;
}
