import { Currency } from './currency';
import { FeeType } from './feeType';
export declare class SignalFee {
    'title'?: string;
    'type'?: FeeType;
    'value'?: number;
    'currency'?: Currency;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalFee): SignalFee;
}
