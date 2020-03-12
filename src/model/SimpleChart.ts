import { Currency } from './Currency';
import { SimpleChartPoint } from './SimpleChartPoint';

export interface SimpleChart {
    currency: Currency;
    color: string;
    chart: Array<SimpleChartPoint>;
}

