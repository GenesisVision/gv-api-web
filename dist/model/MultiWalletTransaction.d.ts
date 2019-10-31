import { Currency } from './Currency';
import { MultiWalletTransactionStatus } from './MultiWalletTransactionStatus';
import { MultiWalletTransactionType } from './MultiWalletTransactionType';
export declare class MultiWalletTransaction {
    'id': string;
    'currencyFrom': Currency;
    'currencyTo': CurrencyToEnum;
    'type': MultiWalletTransactionType;
    'date': Date;
    'status': MultiWalletTransactionStatus;
    'logoFrom': string;
    'logoTo': string;
    'description': string;
    'amount': number;
    'amountTo': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MultiWalletTransaction;
}
declare type CurrencyToEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};
