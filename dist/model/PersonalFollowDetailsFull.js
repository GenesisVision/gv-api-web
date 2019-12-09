import { AssetGuestActions } from './AssetGuestActions';
import { FollowOwnerActions } from './FollowOwnerActions';
import ApiClient from "../ApiClient";
export class PersonalFollowDetailsFull {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['isProgram'] = data['isProgram'];
        this['ownerActions'] = data['ownerActions'];
        this['guestActions'] = data['guestActions'];
        this['hasNotifications'] = data['hasNotifications'];
        this['balance'] = data['balance'];
        this['leverage'] = data['leverage'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalFollowDetailsFull({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'isProgram': ApiClient.convertToType(data['isProgram'], 'boolean'),
                'ownerActions': FollowOwnerActions.constructFromObject(data['ownerActions']),
                'guestActions': AssetGuestActions.constructFromObject(data['guestActions']),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
            });
        }
    }
}
