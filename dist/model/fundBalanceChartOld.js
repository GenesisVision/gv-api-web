import { BalanceChartElementOld } from './balanceChartElementOld';
import ApiClient from "../ApiClient";
export class FundBalanceChartOld {
    constructor() {
    }
    static constructFromObject(data, obj = new FundBalanceChartOld()) {
        if (data) {
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('balanceChart')) {
                obj['balanceChart'] = ApiClient.convertToType(data['balanceChart'], [BalanceChartElementOld]);
            }
        }
        return obj;
    }
}
