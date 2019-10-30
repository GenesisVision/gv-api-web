import { Currency } from './currency';
import { MultiWalletTransactionStatus } from './multiWalletTransactionStatus';
import { MultiWalletTransactionType } from './multiWalletTransactionType';
export declare class MultiWalletTransaction {
    'id'?: string;
    'currencyFrom'?: Currency;
    'currencyTo'?: CurrencyToEnum;
    'type'?: MultiWalletTransactionType;
    'date'?: Date;
    'status'?: MultiWalletTransactionStatus;
    'logoFrom'?: string;
    'logoTo'?: string;
    'description'?: string;
    'amount'?: number;
    'amountTo'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: MultiWalletTransaction): MultiWalletTransaction;
}
declare type CurrencyToEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};
