import { SimpleChartPoint } from './SimpleChartPoint';

export interface TickerChart {
    chart: Array<SimpleChartPoint>;
    lastPrice: number;
    changePercent: number;
}

