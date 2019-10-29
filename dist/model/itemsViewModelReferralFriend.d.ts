import { ReferralFriend } from './referralFriend';
export declare class ItemsViewModelReferralFriend {
    'items'?: [ReferralFriend];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelReferralFriend): ItemsViewModelReferralFriend;
}
