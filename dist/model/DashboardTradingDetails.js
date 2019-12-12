import { DashboardProfits } from './DashboardProfits';
import { ItemsViewModelInvestmentEventViewModel } from './ItemsViewModelInvestmentEventViewModel';
import ApiClient from "../ApiClient";
export class DashboardTradingDetails {
    constructor(data) {
        this['equity'] = data['equity'];
        this['assetsUnderManagement'] = data['assetsUnderManagement'];
        this['total'] = data['total'];
        this['profits'] = data['profits'];
        this['events'] = data['events'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingDetails({
                'equity': ApiClient.convertToType(data['equity'], 'number'),
                'assetsUnderManagement': ApiClient.convertToType(data['assetsUnderManagement'], 'number'),
                'total': ApiClient.convertToType(data['total'], 'number'),
                'profits': DashboardProfits.constructFromObject(data['profits']),
                'events': ItemsViewModelInvestmentEventViewModel.constructFromObject(data['events']),
            });
        }
    }
}
