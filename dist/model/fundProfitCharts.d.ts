import { FundAssetsState } from './fundAssetsState';
import { FundChartStatistic } from './fundChartStatistic';
import { SimpleChart } from './simpleChart';
export declare class FundProfitCharts {
    'statistic'?: FundChartStatistic;
    'charts'?: [SimpleChart];
    'assets'?: [FundAssetsState];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundProfitCharts): FundProfitCharts;
}
