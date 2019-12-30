import { SimpleChartPoint } from './SimpleChartPoint';
export declare class AbsoluteProfitChart {
    'profit': number;
    'chart': Array<SimpleChartPoint>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AbsoluteProfitChart | undefined;
}
