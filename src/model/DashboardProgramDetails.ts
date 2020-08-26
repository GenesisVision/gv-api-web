import { ProgramDailyPeriodDetails } from './ProgramDailyPeriodDetails';

export interface DashboardProgramDetails {
    dailyPeriodDetails: ProgramDailyPeriodDetails;
    level: number;
    levelProgress: number;
    managementFeeSelected: number;
    managementFeeCurrent: number;
    successFeeSelected: number;
    successFeeCurrent: number;
}

