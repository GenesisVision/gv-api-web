import { DashboardProfits } from './DashboardProfits';
import { InvestmentEventViewModels } from './InvestmentEventViewModels';
import ApiClient from "../ApiClient";
export class DashboardTradingDetails {
    constructor(data) {
        this['equity'] = data['equity'];
        this['assetsUnderManagement'] = data['assetsUnderManagement'];
        this['profits'] = data['profits'];
        this['events'] = data['events'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingDetails({
                'equity': ApiClient.convertToType(data['equity'], 'number'),
                'assetsUnderManagement': ApiClient.convertToType(data['assetsUnderManagement'], 'number'),
                'profits': DashboardProfits.constructFromObject(data['profits']),
                'events': InvestmentEventViewModels.constructFromObject(data['events']),
            });
        }
    }
}
