import { SimpleChartPoint } from './SimpleChartPoint';

export interface AccountBalanceChart {
    balance: number;
    color: string;
    chart: Array<SimpleChartPoint>;
}

