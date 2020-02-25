import { ManagerFinancialStatistic } from './ManagerFinancialStatistic';
import { PeriodStatus } from './PeriodStatus';

export interface ProgramPeriodViewModel {
    dateFrom: Date;
    dateTo: Date;
    periodLength: number;
    status: PeriodStatus;
    number: number;
    profit: number;
    profitPercent: number;
    balance: number;
    investors: number;
    managerDeposit: number;
    managerWithdraw: number;
    managerCommissionRebate: number;
    investorsDeposit: number;
    investorsWithdraw: number;
    investorsProfitWithdraw: number;
    platformSuccessFee: number;
    managerStatistic: ManagerFinancialStatistic;
}

