import { Currency } from './Currency';
import { FeeType } from './FeeType';
export declare class SignalFee {
    'title': string;
    'type': FeeType;
    'value': number;
    'currency': Currency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalFee;
}
