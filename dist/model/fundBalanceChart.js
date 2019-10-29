import { BalanceChartPoint } from './balanceChartPoint';
import ApiClient from "../ApiClient";
export class FundBalanceChart {
    constructor() {
    }
    static constructFromObject(data, obj = new FundBalanceChart()) {
        if (data) {
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [BalanceChartPoint]);
            }
        }
        return obj;
    }
}
