import { AssetGuestActions } from './AssetGuestActions';
export declare class PersonalFollowDetailsFull {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'guestActions': AssetGuestActions;
    'hasNotifications': boolean;
    'balance': number;
    'leverage': number;
    'subscribedAccounts': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalFollowDetailsFull | undefined;
}
