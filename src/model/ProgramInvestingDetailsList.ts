import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerDetails } from './BrokerDetails';
import { Currency } from './Currency';
import { PersonalInvestingProgramDetailsList } from './PersonalInvestingProgramDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { ProgramDailyPeriodDetails } from './ProgramDailyPeriodDetails';
import { ProgramType } from './ProgramType';
import { Tag } from './Tag';

export interface ProgramInvestingDetailsList {
    id: string;
    type: ProgramType;
    logoUrl: string;
    url: string;
    color: string;
    title: string;
    creationDate: Date;
    currency: Currency;
    availableToInvest: number;
    level: number;
    levelProgress: number;
    periodDuration: number;
    investorsCount: number;
    periodStarts: Date;
    periodEnds: Date;
    managementFeeSelected: number;
    managementFeeCurrent: number;
    successFeeSelected: number;
    successFeeCurrent: number;
    totalAvailableInvestment: number;
    stopOutLevelSelected: number;
    stopOutLevelCurrent: number;
    owner: ProfilePublicShort;
    brokerDetails: BrokerDetails;
    personalDetails: PersonalInvestingProgramDetailsList;
    tags: Array<Tag>;
    statistic: ProfitChart;
    balance: AmountWithCurrency;
    dailyPeriodDetails: ProgramDailyPeriodDetails;
}

