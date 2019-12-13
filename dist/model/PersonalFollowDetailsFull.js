import { AssetGuestActions } from './AssetGuestActions';
import ApiClient from "../ApiClient";
export class PersonalFollowDetailsFull {
    constructor(data) {
        this['isFavorite'] = data['isFavorite'];
        this['guestActions'] = data['guestActions'];
        this['hasNotifications'] = data['hasNotifications'];
        this['subscribedAccounts'] = data['subscribedAccounts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalFollowDetailsFull({
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'guestActions': AssetGuestActions.constructFromObject(data['guestActions']),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
                'subscribedAccounts': ApiClient.convertToType(data['subscribedAccounts'], 'number'),
            });
        }
    }
}
