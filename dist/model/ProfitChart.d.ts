import { SimpleChartPoint } from './SimpleChartPoint';
export declare class ProfitChart {
    'chart': Array<SimpleChartPoint>;
    'profit': number;
    'drawdown': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProfitChart | undefined;
}
