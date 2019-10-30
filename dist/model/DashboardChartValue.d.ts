import { ChartSimple } from './ChartSimple';
import { ValueChartBar } from './ValueChartBar';
export declare class DashboardChartValue {
    'investedProgramsInfo'?: Array<ValueChartBar>;
    'balanceChart'?: Array<ChartSimple>;
    'value'?: number;
    'valueCurrency'?: number;
    'changePercent'?: number;
    'changeValue'?: number;
    'changeValueCurrency'?: number;
    'rate'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardChartValue): DashboardChartValue;
}
