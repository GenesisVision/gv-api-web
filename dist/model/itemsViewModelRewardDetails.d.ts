import { RewardDetails } from './rewardDetails';
export declare class ItemsViewModelRewardDetails {
    'items'?: [RewardDetails];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelRewardDetails): ItemsViewModelRewardDetails;
}
