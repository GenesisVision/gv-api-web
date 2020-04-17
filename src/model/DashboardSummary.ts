import { DashboardProfits } from './DashboardProfits';
import { LimitWithoutKyc } from './LimitWithoutKyc';

export interface DashboardSummary {
    invested: number;
    trading: number;
    wallets: number;
    total: number;
    profits: DashboardProfits;
    limitWithoutKyc: LimitWithoutKyc;
}

