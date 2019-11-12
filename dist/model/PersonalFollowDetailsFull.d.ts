import { FollowOwnerActions } from './FollowOwnerActions';
import { SignalSubscription } from './SignalSubscription';
export declare class PersonalFollowDetailsFull {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'signalSubscription': SignalSubscription;
    'ownerActions': FollowOwnerActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalFollowDetailsFull | undefined;
}
