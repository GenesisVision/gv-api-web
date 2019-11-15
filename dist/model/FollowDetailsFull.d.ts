import { AssetSignalSettings } from './AssetSignalSettings';
import { BrokerDetails } from './BrokerDetails';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramTag } from './ProgramTag';
export declare class FollowDetailsFull {
    'id': string;
    'title': string;
    'description': string;
    'logo': string;
    'creationDate': Date;
    'currency': CurrencyEnum;
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
declare type CurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};
