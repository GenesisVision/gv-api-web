import { FollowDetailsListItem } from './FollowDetailsListItem';
export declare class ItemsViewModelFollowDetailsListItem {
    'items': Array<FollowDetailsListItem>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelFollowDetailsListItem | undefined;
}
