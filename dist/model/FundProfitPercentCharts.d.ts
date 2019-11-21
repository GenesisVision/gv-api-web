import { FundAssetsState } from './FundAssetsState';
import { FundChartStatistic } from './FundChartStatistic';
import { SimpleChart } from './SimpleChart';
export declare class FundProfitPercentCharts {
    'statistic': FundChartStatistic;
    'charts': Array<SimpleChart>;
    'assets': Array<FundAssetsState>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundProfitPercentCharts | undefined;
}
