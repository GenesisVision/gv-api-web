import { AssetGuestActions } from './AssetGuestActions';
export declare class PersonalFollowDetailsFull {
    'isFavorite': boolean;
    'guestActions': AssetGuestActions;
    'hasNotifications': boolean;
    'subscribedAccounts': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalFollowDetailsFull | undefined;
}
