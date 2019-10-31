import { Currency } from './Currency';
export declare class AmountItem {
    'amount': number;
    'currency': Currency;
    'color': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AmountItem | undefined;
}
