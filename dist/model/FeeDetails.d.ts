import { Currency } from './Currency';
import { FeeType } from './FeeType';
export declare class FeeDetails {
    'title': string;
    'description': string;
    'type': FeeType;
    'amount': number;
    'currency': Currency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FeeDetails | undefined;
}
