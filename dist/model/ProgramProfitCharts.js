import { ProgramChartStatistic } from './ProgramChartStatistic';
import { SimpleChart } from './SimpleChart';
import ApiClient from "../ApiClient";
export class ProgramProfitCharts {
    constructor(data) {
        this['statistic'] = data['statistic'];
        this['charts'] = data['charts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramProfitCharts({
                'statistic': ProgramChartStatistic.constructFromObject(data['statistic']),
                'charts': ApiClient.convertToType(data['charts'], [SimpleChart]),
            });
        }
    }
}
