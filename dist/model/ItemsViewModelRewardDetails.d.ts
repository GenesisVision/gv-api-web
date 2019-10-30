import { RewardDetails } from './RewardDetails';
export declare class ItemsViewModelRewardDetails {
    'items'?: Array<RewardDetails>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelRewardDetails): ItemsViewModelRewardDetails;
}
