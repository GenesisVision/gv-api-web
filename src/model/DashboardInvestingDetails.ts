import { DashboardProfits } from './DashboardProfits';
import { ItemsViewModelInvestmentEventViewModel } from './ItemsViewModelInvestmentEventViewModel';

export interface DashboardInvestingDetails {
    equity: number;
    programsCount: number;
    fundsCount: number;
    profits: DashboardProfits;
    events: ItemsViewModelInvestmentEventViewModel;
}

