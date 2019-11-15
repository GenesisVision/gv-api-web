import { AssetGuestActions } from './AssetGuestActions';
import { FollowOwnerActions } from './FollowOwnerActions';
import { SignalSubscription } from './SignalSubscription';
import ApiClient from "../ApiClient";
export class PersonalFollowDetailsFull {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['signalSubscription'] = data['signalSubscription'];
        this['ownerActions'] = data['ownerActions'];
        this['guestActions'] = data['guestActions'];
        this['hasNotifications'] = data['hasNotifications'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalFollowDetailsFull({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'signalSubscription': SignalSubscription.constructFromObject(data['signalSubscription']),
                'ownerActions': FollowOwnerActions.constructFromObject(data['ownerActions']),
                'guestActions': AssetGuestActions.constructFromObject(data['guestActions']),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
            });
        }
    }
}
