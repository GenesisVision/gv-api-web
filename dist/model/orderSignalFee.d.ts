import { Currency } from './currency';
import { FeeType } from './feeType';
export declare class OrderSignalFee {
    'amount'?: number;
    'currency'?: Currency;
    'type'?: FeeType;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderSignalFee): OrderSignalFee;
}
