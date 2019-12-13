import { AssetSignalSettings } from './AssetSignalSettings';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
import ApiClient from "../ApiClient";
export class FollowDetailsFull {
    constructor(data) {
        this['currency'] = data['currency'];
        this['tradesCount'] = data['tradesCount'];
        this['leverageMin'] = data['leverageMin'];
        this['leverageMax'] = data['leverageMax'];
        this['signalSettings'] = data['signalSettings'];
        this['subscribersCount'] = data['subscribersCount'];
        this['personalDetails'] = data['personalDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowDetailsFull({
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
                'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
                'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
                'signalSettings': AssetSignalSettings.constructFromObject(data['signalSettings']),
                'subscribersCount': ApiClient.convertToType(data['subscribersCount'], 'number'),
                'personalDetails': PersonalFollowDetailsFull.constructFromObject(data['personalDetails']),
            });
        }
    }
}
