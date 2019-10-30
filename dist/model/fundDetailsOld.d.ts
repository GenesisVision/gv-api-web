import { ChartSimple } from './chartSimple';
import { DashboardProgramDetailsOld } from './dashboardProgramDetailsOld';
import { FundAssetPercent } from './fundAssetPercent';
import { FundDetailsListStatistic } from './fundDetailsListStatistic';
import { InvestmentProgramStatus } from './investmentProgramStatus';
import { PersonalFundDetailsFullOld } from './personalFundDetailsFullOld';
import { ProfilePublic } from './profilePublic';
export declare class FundDetailsOld {
    'totalAssetsCount'?: number;
    'topFundAssets'?: [FundAssetPercent];
    'statistic'?: FundDetailsListStatistic;
    'personalDetails'?: PersonalFundDetailsFullOld;
    'dashboardAssetsDetails'?: DashboardProgramDetailsOld;
    'id'?: string;
    'logo'?: string;
    'url'?: string;
    'color'?: string;
    'title'?: string;
    'description'?: string;
    'status'?: InvestmentProgramStatus;
    'creationDate'?: Date;
    'manager'?: ProfilePublic;
    'chart'?: [ChartSimple];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundDetailsOld): FundDetailsOld;
}
