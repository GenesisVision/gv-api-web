import { FundAssetPercent } from './FundAssetPercent';
import { PersonalFundDetailsList } from './PersonalFundDetailsList';
import { ProfitChart } from './ProfitChart';
export declare class FundDetailsList {
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'title': string;
    'description': string;
    'creationDate': Date;
    'totalAssetsCount': number;
    'topFundAssets': Array<FundAssetPercent>;
    'chart': ProfitChart;
    'personalDetails': PersonalFundDetailsList;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundDetailsList | undefined;
}
