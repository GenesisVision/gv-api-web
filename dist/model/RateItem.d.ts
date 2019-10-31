import { Currency } from './Currency';
export declare class RateItem {
    'currency': Currency;
    'rate': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): RateItem;
}
