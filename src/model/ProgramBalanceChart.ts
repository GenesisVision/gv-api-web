import { BalanceChartPoint } from './BalanceChartPoint';
import { Currency } from './Currency';

export interface ProgramBalanceChart {
    balance: number;
    programCurrency: Currency;
    color: string;
    chart: Array<BalanceChartPoint>;
}

