import { AccountChartStatistic } from './AccountChartStatistic';
import { SimpleChart } from './SimpleChart';

export interface AccountProfitPercentCharts {
    statistic: AccountChartStatistic;
    charts: Array<SimpleChart>;
}

