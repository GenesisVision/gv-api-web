import { ManagerFinancialStatistic } from './ManagerFinancialStatistic';
import { PeriodStatus } from './PeriodStatus';
import ApiClient from "../ApiClient";
export class ProgramPeriodViewModel {
    constructor(data) {
        this['dateFrom'] = data['dateFrom'];
        this['dateTo'] = data['dateTo'];
        this['periodLength'] = data['periodLength'];
        this['status'] = data['status'];
        this['number'] = data['number'];
        this['profit'] = data['profit'];
        this['balance'] = data['balance'];
        this['investors'] = data['investors'];
        this['managerDeposit'] = data['managerDeposit'];
        this['managerWithdraw'] = data['managerWithdraw'];
        this['managerCommissionRebate'] = data['managerCommissionRebate'];
        this['investorsDeposit'] = data['investorsDeposit'];
        this['investorsWithdraw'] = data['investorsWithdraw'];
        this['investorsProfitWithdraw'] = data['investorsProfitWithdraw'];
        this['platformSuccessFee'] = data['platformSuccessFee'];
        this['managerStatistic'] = data['managerStatistic'];
    }
    static constructFromObject(data) {
        return new ProgramPeriodViewModel({
            'dateFrom': ApiClient.convertToType(data['dateFrom'], 'Date'),
            'dateTo': ApiClient.convertToType(data['dateTo'], 'Date'),
            'periodLength': ApiClient.convertToType(data['periodLength'], 'number'),
            'status': PeriodStatus.constructFromObject(data['status']),
            'number': ApiClient.convertToType(data['number'], 'number'),
            'profit': ApiClient.convertToType(data['profit'], 'number'),
            'balance': ApiClient.convertToType(data['balance'], 'number'),
            'investors': ApiClient.convertToType(data['investors'], 'number'),
            'managerDeposit': ApiClient.convertToType(data['managerDeposit'], 'number'),
            'managerWithdraw': ApiClient.convertToType(data['managerWithdraw'], 'number'),
            'managerCommissionRebate': ApiClient.convertToType(data['managerCommissionRebate'], 'number'),
            'investorsDeposit': ApiClient.convertToType(data['investorsDeposit'], 'number'),
            'investorsWithdraw': ApiClient.convertToType(data['investorsWithdraw'], 'number'),
            'investorsProfitWithdraw': ApiClient.convertToType(data['investorsProfitWithdraw'], 'number'),
            'platformSuccessFee': ApiClient.convertToType(data['platformSuccessFee'], 'number'),
            'managerStatistic': ManagerFinancialStatistic.constructFromObject(data['managerStatistic']),
        });
    }
}
