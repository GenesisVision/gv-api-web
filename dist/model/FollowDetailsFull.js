import { AssetSignalSettings } from './AssetSignalSettings';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
import ApiClient from "../ApiClient";
export class FollowDetailsFull {
    constructor(data) {
        this['tradesCount'] = data['tradesCount'];
        this['signalSettings'] = data['signalSettings'];
        this['subscribersCount'] = data['subscribersCount'];
        this['personalDetails'] = data['personalDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowDetailsFull({
                'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
                'signalSettings': AssetSignalSettings.constructFromObject(data['signalSettings']),
                'subscribersCount': ApiClient.convertToType(data['subscribersCount'], 'number'),
                'personalDetails': PersonalFollowDetailsFull.constructFromObject(data['personalDetails']),
            });
        }
    }
}
