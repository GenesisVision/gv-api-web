import { FundAssetsState } from './FundAssetsState';
import { FundChartStatistic } from './FundChartStatistic';
import { SimpleChart } from './SimpleChart';

export interface FundProfitPercentCharts {
    statistic: FundChartStatistic;
    charts: Array<SimpleChart>;
    assets: Array<FundAssetsState>;
}

