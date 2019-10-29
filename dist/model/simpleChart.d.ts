import { Currency } from './currency';
import { SimpleChartPoint } from './simpleChartPoint';
export declare class SimpleChart {
    'currency'?: Currency;
    'chart'?: [SimpleChartPoint];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SimpleChart): SimpleChart;
}
