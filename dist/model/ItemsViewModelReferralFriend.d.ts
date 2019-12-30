import { ReferralFriend } from './ReferralFriend';
export declare class ItemsViewModelReferralFriend {
    'items': Array<ReferralFriend>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelReferralFriend | undefined;
}
