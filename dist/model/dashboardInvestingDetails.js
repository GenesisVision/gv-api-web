import { DashboardProfits } from './dashboardProfits';
import { InvestmentEventViewModels } from './investmentEventViewModels';
import ApiClient from "../ApiClient";
export class DashboardInvestingDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardInvestingDetails()) {
        if (data) {
            if (data.hasOwnProperty('equity')) {
                obj['equity'] = ApiClient.convertToType(data['equity'], 'number');
            }
            if (data.hasOwnProperty('programsCount')) {
                obj['programsCount'] = ApiClient.convertToType(data['programsCount'], 'number');
            }
            if (data.hasOwnProperty('fundsCount')) {
                obj['fundsCount'] = ApiClient.convertToType(data['fundsCount'], 'number');
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
