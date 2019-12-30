import { AccountChartStatistic } from './AccountChartStatistic';
import { SimpleChart } from './SimpleChart';
export declare class AccountProfitPercentCharts {
    'statistic': AccountChartStatistic;
    'charts': Array<SimpleChart>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AccountProfitPercentCharts | undefined;
}
