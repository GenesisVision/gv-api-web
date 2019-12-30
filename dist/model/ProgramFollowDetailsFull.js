import { AssetPublicDetails } from './AssetPublicDetails';
import { BrokerDetails } from './BrokerDetails';
import { FollowDetailsFull } from './FollowDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramDetailsFull } from './ProgramDetailsFull';
import { ProgramFollowDetailsFullTradingAccountDetails } from './ProgramFollowDetailsFullTradingAccountDetails';
import { ProgramFollowOwnerActions } from './ProgramFollowOwnerActions';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class ProgramFollowDetailsFull {
    constructor(data) {
        this['id'] = data['id'];
        this['publicInfo'] = data['publicInfo'];
        this['tradingAccountInfo'] = data['tradingAccountInfo'];
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
                'publicInfo': AssetPublicDetails.constructFromObject(data['publicInfo']),
                'tradingAccountInfo': ProgramFollowDetailsFullTradingAccountDetails.constructFromObject(data['tradingAccountInfo']),
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
