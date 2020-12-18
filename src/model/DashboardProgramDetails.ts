import { ProgramDailyPeriodDetails } from './ProgramDailyPeriodDetails';
import { ProgramType } from './ProgramType';

export interface DashboardProgramDetails {
    level: number;
    levelProgress: number;
    type: ProgramType;
    managementFeeSelected: number;
    managementFeeCurrent: number;
    successFeeSelected: number;
    successFeeCurrent: number;
    dailyPeriodDetails: ProgramDailyPeriodDetails;
}

