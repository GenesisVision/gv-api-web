import { AmountWithCurrency } from './AmountWithCurrency';
import { FundAssetPercent } from './FundAssetPercent';
import { PersonalFundDetailsList } from './PersonalFundDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';

export interface FundDetailsListItem {
    id: string;
    logoUrl: string;
    url: string;
    color: string;
    index: number;
    title: string;
    description: string;
    creationDate: Date;
    investorsCount: number;
    status: string;
    totalAssetsCount: number;
    topFundAssets: Array<FundAssetPercent>;
    owner: ProfilePublicShort;
    statistic: ProfitChart;
    personalDetails: PersonalFundDetailsList;
    balance: AmountWithCurrency;
}

