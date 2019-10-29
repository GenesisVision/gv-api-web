import { FundAssetPercent } from './fundAssetPercent';
import { PersonalFundDetailsList } from './personalFundDetailsList';
import { ProfitChart } from './profitChart';
export declare class FundDetailsList {
    'id'?: string;
    'logo'?: string;
    'url'?: string;
    'color'?: string;
    'title'?: string;
    'description'?: string;
    'creationDate'?: Date;
    'totalAssetsCount'?: number;
    'topFundAssets'?: [FundAssetPercent];
    'chart'?: ProfitChart;
    'personalDetails'?: PersonalFundDetailsList;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundDetailsList): FundDetailsList;
}
