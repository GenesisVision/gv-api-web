import { SimpleChartPoint } from './SimpleChartPoint';
import ApiClient from "../ApiClient";
export class AccountBalanceChart {
    constructor(data) {
        this['balance'] = data['balance'];
        this['color'] = data['color'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AccountBalanceChart({
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'chart': ApiClient.convertToType(data['chart'], [SimpleChartPoint]),
            });
        }
    }
}
