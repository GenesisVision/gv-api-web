import { RewardDetails } from './RewardDetails';
export declare class ItemsViewModelRewardDetails {
    'items': Array<RewardDetails>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelRewardDetails | undefined;
}
