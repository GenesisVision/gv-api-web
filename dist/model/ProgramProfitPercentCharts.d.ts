import { ProgramChartStatistic } from './ProgramChartStatistic';
import { SimpleChart } from './SimpleChart';
export declare class ProgramProfitPercentCharts {
    'statistic': ProgramChartStatistic;
    'charts': Array<SimpleChart>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramProfitPercentCharts | undefined;
}
