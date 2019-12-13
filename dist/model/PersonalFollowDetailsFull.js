import { AssetGuestActions } from './AssetGuestActions';
import ApiClient from "../ApiClient";
export class PersonalFollowDetailsFull {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['guestActions'] = data['guestActions'];
        this['hasNotifications'] = data['hasNotifications'];
        this['balance'] = data['balance'];
        this['leverage'] = data['leverage'];
        this['subscribedAccounts'] = data['subscribedAccounts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalFollowDetailsFull({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'guestActions': AssetGuestActions.constructFromObject(data['guestActions']),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
                'subscribedAccounts': ApiClient.convertToType(data['subscribedAccounts'], 'number'),
            });
        }
    }
}
