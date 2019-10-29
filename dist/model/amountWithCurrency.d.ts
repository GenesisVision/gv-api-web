import { Currency } from './currency';
export declare class AmountWithCurrency {
    'amount'?: number;
    'currency'?: Currency;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AmountWithCurrency): AmountWithCurrency;
}
