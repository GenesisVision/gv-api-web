import { Currency } from './Currency';
import { SimpleChartPoint } from './SimpleChartPoint';
export declare class SimpleChart {
    'currency': Currency;
    'color': string;
    'chart': Array<SimpleChartPoint>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SimpleChart | undefined;
}
