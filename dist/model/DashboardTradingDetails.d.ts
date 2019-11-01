import { DashboardProfits } from './DashboardProfits';
import { InvestmentEventViewModels } from './InvestmentEventViewModels';
export declare class DashboardTradingDetails {
    'equity': number;
    'assetsUnderManagement': number;
    'profits': DashboardProfits;
    'events': InvestmentEventViewModels;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingDetails | undefined;
}
