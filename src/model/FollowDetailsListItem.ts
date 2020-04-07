import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';
import { Currency } from './Currency';
import { PersonalFollowDetailsList } from './PersonalFollowDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';

export interface FollowDetailsListItem {
    id: string;
    title: string;
    description: string;
    logoUrl: string;
    creationDate: Date;
    currency: Currency;
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
    balance: AmountWithCurrency;
}

