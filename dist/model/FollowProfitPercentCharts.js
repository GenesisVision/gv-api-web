import { FollowChartStatistic } from './FollowChartStatistic';
import { SimpleChart } from './SimpleChart';
import ApiClient from "../ApiClient";
export class FollowProfitPercentCharts {
    constructor(data) {
        this['statistic'] = data['statistic'];
        this['charts'] = data['charts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowProfitPercentCharts({
                'statistic': FollowChartStatistic.constructFromObject(data['statistic']),
                'charts': ApiClient.convertToType(data['charts'], [SimpleChart]),
            });
        }
    }
}
