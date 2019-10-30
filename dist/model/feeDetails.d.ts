import { Currency } from './currency';
import { FeeType } from './feeType';
export declare class FeeDetails {
    'title'?: string;
    'description'?: string;
    'type'?: FeeType;
    'amount'?: number;
    'currency'?: Currency;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FeeDetails): FeeDetails;
}
