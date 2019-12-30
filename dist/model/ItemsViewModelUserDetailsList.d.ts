import { UserDetailsList } from './UserDetailsList';
export declare class ItemsViewModelUserDetailsList {
    'items': Array<UserDetailsList>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelUserDetailsList | undefined;
}
