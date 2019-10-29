import { ProgramChartStatistic } from './programChartStatistic';
import { SimpleChart } from './simpleChart';
export declare class ProgramProfitCharts {
    'statistic'?: ProgramChartStatistic;
    'charts'?: [SimpleChart];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramProfitCharts): ProgramProfitCharts;
}
