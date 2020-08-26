import { ProgramDailyPeriodDetails } from './ProgramDailyPeriodDetails';

export interface DashboardProgramDetails {
    managementFeeSelected: number;
    managementFeeCurrent: number;
    successFeeSelected: number;
    successFeeCurrent: number;
    dailyPeriodDetails: ProgramDailyPeriodDetails;
    level: number;
    levelProgress: number;
}

