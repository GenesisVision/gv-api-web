import { Color } from './Color';
import { Currency } from './Currency';
export declare class AmountItem {
    'amount': number;
    'currency': Currency;
    'color': Color;
    'logo': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AmountItem | undefined;
}
