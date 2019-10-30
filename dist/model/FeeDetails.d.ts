import { Currency } from './Currency';
import { FeeType } from './FeeType';
export declare class FeeDetails {
    'title'?: string;
    'description'?: string;
    'type'?: FeeType;
    'amount'?: number;
    'currency'?: Currency;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FeeDetails): FeeDetails;
}
