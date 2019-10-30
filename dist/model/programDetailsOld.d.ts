import { ChartSimple } from './chartSimple';
import { Currency } from './currency';
import { DashboardProgramDetailsOld } from './dashboardProgramDetailsOld';
import { InvestmentProgramStatus } from './investmentProgramStatus';
import { PersonalProgramDetailsFullOld } from './personalProgramDetailsFullOld';
import { ProfilePublic } from './profilePublic';
import { ProgramDetailsListStatistic } from './programDetailsListStatistic';
import { ProgramTag } from './programTag';
export declare class ProgramDetailsOld {
    'currency'?: Currency;
    'level'?: number;
    'levelProgress'?: number;
    'periodDuration'?: number;
    'stopOutLevel'?: number;
    'periodStarts'?: Date;
    'periodEnds'?: Date;
    'availableInvestmentInCurrency'?: number;
    'availableInvestmentLimit'?: number;
    'dashboardAssetsDetails'?: DashboardProgramDetailsOld;
    'statistic'?: ProgramDetailsListStatistic;
    'personalDetails'?: PersonalProgramDetailsFullOld;
    'tags'?: Array<ProgramTag>;
    'id'?: string;
    'logo'?: string;
    'url'?: string;
    'color'?: string;
    'title'?: string;
    'description'?: string;
    'status'?: InvestmentProgramStatus;
    'creationDate'?: Date;
    'manager'?: ProfilePublic;
    'chart'?: Array<ChartSimple>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramDetailsOld): ProgramDetailsOld;
}
