import { DashboardProfits } from './dashboardProfits';
import { InvestmentEventViewModels } from './investmentEventViewModels';
import ApiClient from "../ApiClient";
export class DashboardTradingDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardTradingDetails()) {
        if (data) {
            if (data.hasOwnProperty('equity')) {
                obj['equity'] = ApiClient.convertToType(data['equity'], 'number');
            }
            if (data.hasOwnProperty('assetsUnderManagement')) {
                obj['assetsUnderManagement'] = ApiClient.convertToType(data['assetsUnderManagement'], 'number');
            }
            if (data.hasOwnProperty('profits')) {
                obj['profits'] = DashboardProfits.constructFromObject(data['profits']);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = InvestmentEventViewModels.constructFromObject(data['events']);
            }
        }
        return obj;
    }
}
