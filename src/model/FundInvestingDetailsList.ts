import { AmountWithCurrency } from './AmountWithCurrency';
import { FundAssetPercent } from './FundAssetPercent';
import { PersonalInvestingFundDetailsList } from './PersonalInvestingFundDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { TradingScheduleInfo } from './TradingScheduleInfo';

export interface FundInvestingDetailsList {
    id: string;
    logoUrl: string;
    url: string;
    color: string;
    title: string;
    description: string;
    creationDate: Date;
    investorsCount: number;
    entryFeeCurrent: number;
    entryFeeSelected: number;
    exitFeeCurrent: number;
    exitFeeSelected: number;
    totalAssetsCount: number;
    topFundAssets: Array<FundAssetPercent>;
    owner: ProfilePublicShort;
    tradingSchedule: TradingScheduleInfo;
    statistic: ProfitChart;
    personalDetails: PersonalInvestingFundDetailsList;
    balance: AmountWithCurrency;
}

