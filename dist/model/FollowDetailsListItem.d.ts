import { BrokerTradeServerType } from './BrokerTradeServerType';
import { PersonalFollowDetailsList } from './PersonalFollowDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';
export declare class FollowDetailsListItem {
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
    'isExternal': boolean;
    'leverageMin': number;
    'leverageMax': number;
    'brokerId': string;
    'brokerType': BrokerTradeServerType;
    'owner': ProfilePublicShort;
    'statistic': ProfitChart;
    'personalDetails': PersonalFollowDetailsList;
    'tags': Array<Tag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowDetailsListItem | undefined;
}
declare type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};
