import { AssetGuestActions } from './AssetGuestActions';
import { FollowOwnerActions } from './FollowOwnerActions';
export declare class PersonalFollowDetailsFull {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'isProgram': boolean;
    'ownerActions': FollowOwnerActions;
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
