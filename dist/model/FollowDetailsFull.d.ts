import { AssetSignalSettings } from './AssetSignalSettings';
import { BrokerDetails } from './BrokerDetails';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { Tag } from './Tag';
export declare class FollowDetailsFull {
    'id': string;
    'tradingAccountId': string;
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
    'leverage': number;
    'signalSettings': AssetSignalSettings;
    'brokerDetails': BrokerDetails;
    'owner': ProfilePublic;
    'personalDetails': PersonalFollowDetailsFull;
    'tags': Array<Tag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowDetailsFull | undefined;
}
declare type CurrencyEnum = 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};
