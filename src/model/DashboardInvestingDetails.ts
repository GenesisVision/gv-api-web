import { DashboardProfits } from './DashboardProfits';
import { InvestmentEventViewModelItemsViewModel } from './InvestmentEventViewModelItemsViewModel';

export interface DashboardInvestingDetails {
    equity: number;
    programsCount: number;
    fundsCount: number;
    coinsCount: number;
    profits: DashboardProfits;
    events: InvestmentEventViewModelItemsViewModel;
}

