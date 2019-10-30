import { Currency } from './Currency';
export declare class AmountWithCurrency {
    'amount'?: number;
    'currency'?: Currency;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AmountWithCurrency): AmountWithCurrency;
}
