import { SimpleChartPoint } from './SimpleChartPoint';

export interface ProfitChart {
    chart: Array<SimpleChartPoint>;
    profit: number;
    drawdown: number;
}

