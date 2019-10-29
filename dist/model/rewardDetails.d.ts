import { Currency } from './currency';
export declare class RewardDetails {
    'date'?: Date;
    'currency'?: Currency;
    'amount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RewardDetails): RewardDetails;
}
