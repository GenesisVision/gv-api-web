import { Currency } from './Currency';
import { FeeType } from './FeeType';
export declare class OrderSignalFee {
    'amount'?: number;
    'currency'?: Currency;
    'type'?: FeeType;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderSignalFee): OrderSignalFee;
}
