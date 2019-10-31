import { ManagerFinancialStatistic } from './ManagerFinancialStatistic';
import { PeriodStatus } from './PeriodStatus';
export declare class ProgramPeriodViewModel {
    'dateFrom': Date;
    'dateTo': Date;
    'periodLength': number;
    'status': PeriodStatus;
    'number': number;
    'profit': number;
    'balance': number;
    'investors': number;
    'managerDeposit': number;
    'managerWithdraw': number;
    'managerCommissionRebate': number;
    'investorsDeposit': number;
    'investorsWithdraw': number;
    'investorsProfitWithdraw': number;
    'platformSuccessFee': number;
    'managerStatistic': ManagerFinancialStatistic;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramPeriodViewModel;
}
