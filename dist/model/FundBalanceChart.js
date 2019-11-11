import { BalanceChartPoint } from './BalanceChartPoint';
import ApiClient from "../ApiClient";
export class FundBalanceChart {
    constructor(data) {
        this['balance'] = data['balance'];
        this['color'] = data['color'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundBalanceChart({
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'chart': ApiClient.convertToType(data['chart'], [BalanceChartPoint]),
            });
        }
    }
}
