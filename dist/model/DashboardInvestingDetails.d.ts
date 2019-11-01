import { DashboardProfits } from './DashboardProfits';
import { InvestmentEventViewModels } from './InvestmentEventViewModels';
export declare class DashboardInvestingDetails {
    'equity': number;
    'programsCount': number;
    'fundsCount': number;
    'profits': DashboardProfits;
    'events': InvestmentEventViewModels;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardInvestingDetails | undefined;
}
