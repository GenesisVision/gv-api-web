import { Currency } from './Currency';
export declare class RewardDetails {
    'date'?: Date;
    'currency'?: Currency;
    'amount'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RewardDetails): RewardDetails;
}
