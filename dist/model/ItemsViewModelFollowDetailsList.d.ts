import { FollowDetailsList } from './FollowDetailsList';
export declare class ItemsViewModelFollowDetailsList {
    'items': Array<FollowDetailsList>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelFollowDetailsList | undefined;
}
