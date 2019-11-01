import { DashboardProfits } from './DashboardProfits';
import { InvestmentEventViewModels } from './InvestmentEventViewModels';
import ApiClient from "../ApiClient";
export class DashboardInvestingDetails {
    constructor(data) {
        this['equity'] = data['equity'];
        this['programsCount'] = data['programsCount'];
        this['fundsCount'] = data['fundsCount'];
        this['profits'] = data['profits'];
        this['events'] = data['events'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardInvestingDetails({
                'equity': ApiClient.convertToType(data['equity'], 'number'),
                'programsCount': ApiClient.convertToType(data['programsCount'], 'number'),
                'fundsCount': ApiClient.convertToType(data['fundsCount'], 'number'),
                'profits': DashboardProfits.constructFromObject(data['profits']),
                'events': InvestmentEventViewModels.constructFromObject(data['events']),
            });
        }
    }
}
