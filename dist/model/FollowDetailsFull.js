import { AssetSignalSettings } from './AssetSignalSettings';
import { BrokerDetails } from './BrokerDetails';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class FollowDetailsFull {
    constructor(data) {
        this['id'] = data['id'];
        this['tradingAccountId'] = data['tradingAccountId'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['creationDate'] = data['creationDate'];
        this['currency'] = data['currency'];
        this['tradesCount'] = data['tradesCount'];
        this['status'] = data['status'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['leverage'] = data['leverage'];
        this['signalSettings'] = data['signalSettings'];
        this['subscribersCount'] = data['subscribersCount'];
        this['brokerDetails'] = data['brokerDetails'];
        this['owner'] = data['owner'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowDetailsFull({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'tradingAccountId': ApiClient.convertToType(data['tradingAccountId'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
                'status': ApiClient.convertToType(data['status'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
                'signalSettings': AssetSignalSettings.constructFromObject(data['signalSettings']),
                'subscribersCount': ApiClient.convertToType(data['subscribersCount'], 'number'),
                'brokerDetails': BrokerDetails.constructFromObject(data['brokerDetails']),
                'owner': ProfilePublic.constructFromObject(data['owner']),
                'personalDetails': PersonalFollowDetailsFull.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
            });
        }
    }
}
