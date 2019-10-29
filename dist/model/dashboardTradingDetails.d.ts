import { DashboardProfits } from './dashboardProfits';
import { InvestmentEventViewModels } from './investmentEventViewModels';
export declare class DashboardTradingDetails {
    'equity'?: number;
    'assetsUnderManagement'?: number;
    'profits'?: DashboardProfits;
    'events'?: InvestmentEventViewModels;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardTradingDetails): DashboardTradingDetails;
}
