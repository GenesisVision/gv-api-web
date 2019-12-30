import { AccountChartStatistic } from './AccountChartStatistic';
import { SimpleChart } from './SimpleChart';
import ApiClient from "../ApiClient";
export class AccountProfitPercentCharts {
    constructor(data) {
        this['statistic'] = data['statistic'];
        this['charts'] = data['charts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AccountProfitPercentCharts({
                'statistic': AccountChartStatistic.constructFromObject(data['statistic']),
                'charts': ApiClient.convertToType(data['charts'], [SimpleChart]),
            });
        }
    }
}
