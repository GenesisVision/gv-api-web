import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
import { PersonalProgramDetailsList } from './PersonalProgramDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';

export interface ProgramDetailsListItem {
    id: string;
    logo: string;
    logoUrl: string;
    url: string;
    description: string;
    color: string;
    title: string;
    creationDate: Date;
    currency: Currency;
    level: number;
    levelProgress: number;
    periodDuration: number;
    availableToInvest: number;
    investorsCount: number;
    periodStarts: Date;
    periodEnds: Date;
    status: string;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    brokerId: string;
    owner: ProfilePublicShort;
    personalDetails: PersonalProgramDetailsList;
    tags: Array<Tag>;
    statistic: ProfitChart;
    balance: AmountWithCurrency;
}

