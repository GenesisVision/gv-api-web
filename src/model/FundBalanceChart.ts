import { BalanceChartPoint } from './BalanceChartPoint';

export interface FundBalanceChart {
    balance: number;
    color: string;
    chart: Array<BalanceChartPoint>;
}

