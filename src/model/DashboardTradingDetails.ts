import { DashboardProfits } from './DashboardProfits';
import { ItemsViewModelInvestmentEventViewModel } from './ItemsViewModelInvestmentEventViewModel';

export interface DashboardTradingDetails {
    equity: number;
    aum: number;
    readonly total: number;
    profits: DashboardProfits;
    events: ItemsViewModelInvestmentEventViewModel;
}

