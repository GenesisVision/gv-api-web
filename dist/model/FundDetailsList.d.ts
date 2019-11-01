import { AmountWithCurrency } from './AmountWithCurrency';
import { FundAssetPercent } from './FundAssetPercent';
import { PersonalFundDetailsList } from './PersonalFundDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
export declare class FundDetailsList {
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'title': string;
    'description': string;
    'creationDate': Date;
    'investorsCount': number;
    'status': string;
    'totalAssetsCount': number;
    'topFundAssets': Array<FundAssetPercent>;
    'owner': ProfilePublicShort;
    'chart': ProfitChart;
    'personalDetails': PersonalFundDetailsList;
    'balance': AmountWithCurrency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundDetailsList | undefined;
}
