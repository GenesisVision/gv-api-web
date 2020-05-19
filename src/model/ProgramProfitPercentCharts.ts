import { ProgramChartStatistic } from './ProgramChartStatistic';
import { SimpleChart } from './SimpleChart';

export interface ProgramProfitPercentCharts {
    statistic: ProgramChartStatistic;
    charts: Array<SimpleChart>;
}

