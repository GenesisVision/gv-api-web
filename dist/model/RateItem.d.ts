import { Currency } from './Currency';
export declare class RateItem {
    'currency'?: Currency;
    'rate'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RateItem): RateItem;
}
