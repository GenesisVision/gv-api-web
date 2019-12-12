import { AssetSignalSettings } from './AssetSignalSettings';
import { BrokerDetails } from './BrokerDetails';
import { FollowDetailsFull } from './FollowDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramDetailsFull } from './ProgramDetailsFull';
import { Tag } from './Tag';
export declare class ProgramFollowDetailsFull {
    'id': string;
    'tradingAccountId': string;
    'title': string;
    'description': string;
    'logo': string;
    'url': string;
    'color': string;
    'creationDate': Date;
    'status': string;
    'login': string;
    'owner': ProfilePublic;
    'brokerDetails': BrokerDetails;
    'signalSettings': AssetSignalSettings;
    'subscribersCount': number;
    'tags': Array<Tag>;
    'programDetails': ProgramDetailsFull;
    'followDetails': FollowDetailsFull;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramFollowDetailsFull | undefined;
}
