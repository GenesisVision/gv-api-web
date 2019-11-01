import { FundAssetsState } from './FundAssetsState';
import { FundChartStatistic } from './FundChartStatistic';
import { SimpleChart } from './SimpleChart';
export declare class FundProfitCharts {
    'statistic': FundChartStatistic;
    'charts': Array<SimpleChart>;
    'assets': Array<FundAssetsState>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundProfitCharts | undefined;
}
