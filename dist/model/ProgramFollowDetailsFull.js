import { BrokerDetails } from './BrokerDetails';
import { FollowDetailsFull } from './FollowDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramDetailsFull } from './ProgramDetailsFull';
import { ProgramFollowOwnerActions } from './ProgramFollowOwnerActions';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class ProgramFollowDetailsFull {
    constructor(data) {
        this['id'] = data['id'];
        this['tradingAccountId'] = data['tradingAccountId'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['creationDate'] = data['creationDate'];
        this['status'] = data['status'];
        this['login'] = data['login'];
        this['owner'] = data['owner'];
        this['brokerDetails'] = data['brokerDetails'];
        this['tags'] = data['tags'];
        this['programDetails'] = data['programDetails'];
        this['followDetails'] = data['followDetails'];
        this['ownerActions'] = data['ownerActions'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramFollowDetailsFull({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'tradingAccountId': ApiClient.convertToType(data['tradingAccountId'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'status': ApiClient.convertToType(data['status'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'owner': ProfilePublic.constructFromObject(data['owner']),
                'brokerDetails': BrokerDetails.constructFromObject(data['brokerDetails']),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
                'programDetails': ProgramDetailsFull.constructFromObject(data['programDetails']),
                'followDetails': FollowDetailsFull.constructFromObject(data['followDetails']),
                'ownerActions': ProgramFollowOwnerActions.constructFromObject(data['ownerActions']),
            });
        }
    }
}
