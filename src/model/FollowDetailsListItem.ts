import { BrokerTradeServerType } from './BrokerTradeServerType';
import { PersonalFollowDetailsList } from './PersonalFollowDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';

export interface FollowDetailsListItem {
    id: string;
    title: string;
    description: string;
    logo: string;
    creationDate: Date;
    currency: CurrencyEnum;
    subscribersCount: number;
    tradesCount: number;
    status: string;
    url: string;
    color: string;
    isExternal: boolean;
    leverageMin: number;
    leverageMax: number;
    brokerId: string;
    brokerType: BrokerTradeServerType;
    owner: ProfilePublicShort;
    statistic: ProfitChart;
    personalDetails: PersonalFollowDetailsList;
    tags: Array<Tag>;
}

type CurrencyEnum = 'USDT' | 'USD' | 'BTC' | 'ETH' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
