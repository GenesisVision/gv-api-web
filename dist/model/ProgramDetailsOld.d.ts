import { ChartSimple } from './ChartSimple';
import { Currency } from './Currency';
import { DashboardProgramDetailsOld } from './DashboardProgramDetailsOld';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalProgramDetailsFullOld } from './PersonalProgramDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
import { ProgramDetailsListStatistic } from './ProgramDetailsListStatistic';
import { ProgramTag } from './ProgramTag';
export declare class ProgramDetailsOld {
    'currency': Currency;
    'level': number;
    'levelProgress': number;
    'periodDuration': number;
    'stopOutLevel': number;
    'periodStarts': Date;
    'periodEnds': Date;
    'availableInvestmentInCurrency': number;
    'availableInvestmentLimit': number;
    'dashboardAssetsDetails': DashboardProgramDetailsOld;
    'statistic': ProgramDetailsListStatistic;
    'personalDetails': PersonalProgramDetailsFullOld;
    'tags': Array<ProgramTag>;
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
    }): ProgramDetailsOld;
}
