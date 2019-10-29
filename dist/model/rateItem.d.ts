import { Currency } from './currency';
export declare class RateItem {
    'currency'?: Currency;
    'rate'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RateItem): RateItem;
}
