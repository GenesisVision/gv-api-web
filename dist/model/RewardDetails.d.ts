import { Currency } from './Currency';
export declare class RewardDetails {
    'date': Date;
    'currency': Currency;
    'amount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): RewardDetails;
}
