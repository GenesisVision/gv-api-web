import { ProgramChartStatistic } from './programChartStatistic';
import { SimpleChart } from './simpleChart';
import ApiClient from "../ApiClient";
export class ProgramProfitCharts {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramProfitCharts()) {
        if (data) {
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ProgramChartStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('charts')) {
                obj['charts'] = ApiClient.convertToType(data['charts'], [SimpleChart]);
            }
        }
        return obj;
    }
}
