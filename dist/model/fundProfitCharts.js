import { FundAssetsState } from './fundAssetsState';
import { FundChartStatistic } from './fundChartStatistic';
import { SimpleChart } from './simpleChart';
import ApiClient from "../ApiClient";
export class FundProfitCharts {
    constructor() {
    }
    static constructFromObject(data, obj = new FundProfitCharts()) {
        if (data) {
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = FundChartStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('charts')) {
                obj['charts'] = ApiClient.convertToType(data['charts'], [SimpleChart]);
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetsState]);
            }
        }
        return obj;
    }
}
