import { ManagerFinancialStatistic } from './managerFinancialStatistic';
import { PeriodStatus } from './periodStatus';
export declare class ProgramPeriodViewModel {
    'dateFrom'?: Date;
    'dateTo'?: Date;
    'periodLength'?: number;
    'status'?: PeriodStatus;
    'number'?: number;
    'profit'?: number;
    'balance'?: number;
    'investors'?: number;
    'managerDeposit'?: number;
    'managerWithdraw'?: number;
    'managerCommissionRebate'?: number;
    'investorsDeposit'?: number;
    'investorsWithdraw'?: number;
    'investorsProfitWithdraw'?: number;
    'platformSuccessFee'?: number;
    'managerStatistic'?: ManagerFinancialStatistic;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramPeriodViewModel): ProgramPeriodViewModel;
}
