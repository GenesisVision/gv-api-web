import { Currency } from './Currency';
import { PersonalFollowDetailsList } from './PersonalFollowDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class FollowDetailsList {
    constructor(data) {
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['creationDate'] = data['creationDate'];
        this['currency'] = data['currency'];
        this['subscribersCount'] = data['subscribersCount'];
        this['tradesCount'] = data['tradesCount'];
        this['status'] = data['status'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['owner'] = data['owner'];
        this['statistic'] = data['statistic'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowDetailsList({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': Currency.constructFromObject(data['currency']),
                'subscribersCount': ApiClient.convertToType(data['subscribersCount'], 'number'),
                'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
                'status': ApiClient.convertToType(data['status'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'owner': ProfilePublicShort.constructFromObject(data['owner']),
                'statistic': ProfitChart.constructFromObject(data['statistic']),
                'personalDetails': PersonalFollowDetailsList.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
            });
        }
    }
}
