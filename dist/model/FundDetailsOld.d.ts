import { ChartSimple } from './ChartSimple';
import { DashboardProgramDetailsOld } from './DashboardProgramDetailsOld';
import { FundAssetPercent } from './FundAssetPercent';
import { FundDetailsListStatistic } from './FundDetailsListStatistic';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalFundDetailsFullOld } from './PersonalFundDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
export declare class FundDetailsOld {
    'totalAssetsCount': number;
    'topFundAssets': Array<FundAssetPercent>;
    'statistic': FundDetailsListStatistic;
    'personalDetails': PersonalFundDetailsFullOld;
    'dashboardAssetsDetails': DashboardProgramDetailsOld;
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'title': string;
    'description': string;
    'status': InvestmentProgramStatus;
    'creationDate': Date;
    'manager': ProfilePublic;
    'chart': Array<ChartSimple>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundDetailsOld | undefined;
}
