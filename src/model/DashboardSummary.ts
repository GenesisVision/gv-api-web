import { DashboardProfits } from './DashboardProfits';

export interface DashboardSummary {
    invested: number;
    trading: number;
    wallets: number;
    total: number;
    profits: DashboardProfits;
}

