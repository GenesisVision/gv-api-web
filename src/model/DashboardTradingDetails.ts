import { DashboardProfits } from './DashboardProfits';
import { InvestmentEventViewModelItemsViewModel } from './InvestmentEventViewModelItemsViewModel';

export interface DashboardTradingDetails {
    equity: number;
    aum: number;
    readonly total: number;
    profits: DashboardProfits;
    events: InvestmentEventViewModelItemsViewModel;
}

