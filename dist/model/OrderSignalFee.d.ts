import { Currency } from './Currency';
import { FeeType } from './FeeType';
export declare class OrderSignalFee {
    'amount': number;
    'currency': Currency;
    'type': FeeType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): OrderSignalFee | undefined;
}
