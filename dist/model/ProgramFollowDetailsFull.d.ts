import { BrokerDetails } from './BrokerDetails';
import { FollowDetailsFull } from './FollowDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramDetailsFull } from './ProgramDetailsFull';
import { ProgramFollowDetailsFullPublicDetails } from './ProgramFollowDetailsFullPublicDetails';
import { ProgramFollowDetailsFullTradingAccountDetails } from './ProgramFollowDetailsFullTradingAccountDetails';
import { ProgramFollowOwnerActions } from './ProgramFollowOwnerActions';
import { Tag } from './Tag';
export declare class ProgramFollowDetailsFull {
    'id': string;
    'publicInfo': ProgramFollowDetailsFullPublicDetails;
    'tradingAccountInfo': ProgramFollowDetailsFullTradingAccountDetails;
    'owner': ProfilePublic;
    'brokerDetails': BrokerDetails;
    'tags': Array<Tag>;
    'programDetails': ProgramDetailsFull;
    'followDetails': FollowDetailsFull;
    'ownerActions': ProgramFollowOwnerActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramFollowDetailsFull | undefined;
}
