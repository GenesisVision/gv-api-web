import { AmountWithCurrency } from './AmountWithCurrency';
import { FundAssetPercent } from './FundAssetPercent';
import { PersonalInvestingFundDetailsList } from './PersonalInvestingFundDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';

export interface FundInvestingDetailsList {
    id: string;
    logo: string;
    url: string;
    color: string;
    title: string;
    description: string;
    creationDate: Date;
    investorsCount: number;
    totalAssetsCount: number;
    topFundAssets: Array<FundAssetPercent>;
    owner: ProfilePublicShort;
    statistic: ProfitChart;
    personalDetails: PersonalInvestingFundDetailsList;
    balance: AmountWithCurrency;
}

