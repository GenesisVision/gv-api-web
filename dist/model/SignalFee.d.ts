import { Currency } from './Currency';
import { FeeType } from './FeeType';
export declare class SignalFee {
    'title'?: string;
    'type'?: FeeType;
    'value'?: number;
    'currency'?: Currency;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalFee): SignalFee;
}
