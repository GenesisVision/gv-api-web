import { SimpleChartPoint } from './SimpleChartPoint';
export declare class AbsoluteProfitChart {
    'chart': Array<SimpleChartPoint>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AbsoluteProfitChart | undefined;
}
