import { ProgramDailyPeriodDetails } from './ProgramDailyPeriodDetails';

export interface DashboardProgramDetails {
    level: number;
    levelProgress: number;
    managementFeeSelected: number;
    managementFeeCurrent: number;
    successFeeSelected: number;
    successFeeCurrent: number;
    dailyPeriodDetails: ProgramDailyPeriodDetails;
}

