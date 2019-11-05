import { DashboardProfits } from './DashboardProfits';
import { ItemsViewModelInvestmentEventViewModel } from './ItemsViewModelInvestmentEventViewModel';
export declare class DashboardInvestingDetails {
    'equity': number;
    'programsCount': number;
    'fundsCount': number;
    'profits': DashboardProfits;
    'events': ItemsViewModelInvestmentEventViewModel;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardInvestingDetails | undefined;
}
