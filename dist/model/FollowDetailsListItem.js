import { PersonalFollowDetailsList } from './PersonalFollowDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class FollowDetailsListItem {
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
        this['isExternal'] = data['isExternal'];
        this['leverageMin'] = data['leverageMin'];
        this['leverageMax'] = data['leverageMax'];
        this['brokerId'] = data['brokerId'];
        this['owner'] = data['owner'];
        this['statistic'] = data['statistic'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowDetailsListItem({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'subscribersCount': ApiClient.convertToType(data['subscribersCount'], 'number'),
                'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
                'status': ApiClient.convertToType(data['status'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'isExternal': ApiClient.convertToType(data['isExternal'], 'boolean'),
                'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
                'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
                'brokerId': ApiClient.convertToType(data['brokerId'], 'string'),
                'owner': ProfilePublicShort.constructFromObject(data['owner']),
                'statistic': ProfitChart.constructFromObject(data['statistic']),
                'personalDetails': PersonalFollowDetailsList.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
            });
        }
    }
}
