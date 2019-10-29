import { DashboardProfits } from './dashboardProfits';
import { InvestmentEventViewModels } from './investmentEventViewModels';
export declare class DashboardInvestingDetails {
    'equity'?: number;
    'programsCount'?: number;
    'fundsCount'?: number;
    'profits'?: DashboardProfits;
    'events'?: InvestmentEventViewModels;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardInvestingDetails): DashboardInvestingDetails;
}
