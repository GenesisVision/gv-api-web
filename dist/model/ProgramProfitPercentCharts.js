import { ProgramChartStatistic } from './ProgramChartStatistic';
import { SimpleChart } from './SimpleChart';
import ApiClient from "../ApiClient";
export class ProgramProfitPercentCharts {
    constructor(data) {
        this['statistic'] = data['statistic'];
        this['charts'] = data['charts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramProfitPercentCharts({
                'statistic': ProgramChartStatistic.constructFromObject(data['statistic']),
                'charts': ApiClient.convertToType(data['charts'], [SimpleChart]),
            });
        }
    }
}
