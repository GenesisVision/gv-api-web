import { AssetSignalSettings } from './AssetSignalSettings';
import { BrokerDetails } from './BrokerDetails';
import { Currency } from './Currency';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramTag } from './ProgramTag';
export declare class FollowDetailsFull {
    'id': string;
    'title': string;
    'description': string;
    'logo': string;
    'creationDate': Date;
    'currency': Currency;
    'subscribersCount': number;
    'tradesCount': number;
    'status': string;
    'url': string;
    'color': string;
    'signalSettings': AssetSignalSettings;
    'brokerDetails': BrokerDetails;
    'owner': ProfilePublic;
    'personalDetails': PersonalFollowDetailsFull;
    'tags': Array<ProgramTag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowDetailsFull | undefined;
}
