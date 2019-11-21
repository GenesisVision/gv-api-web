import { FollowChartStatistic } from './FollowChartStatistic';
import { SimpleChart } from './SimpleChart';
export declare class FollowProfitPercentCharts {
    'statistic': FollowChartStatistic;
    'charts': Array<SimpleChart>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowProfitPercentCharts | undefined;
}
