import { BalanceChartPoint } from './BalanceChartPoint';
import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class ProgramBalanceChart {
    constructor(data) {
        this['balance'] = data['balance'];
        this['programCurrency'] = data['programCurrency'];
        this['color'] = data['color'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramBalanceChart({
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'programCurrency': Currency.constructFromObject(data['programCurrency']),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'chart': ApiClient.convertToType(data['chart'], [BalanceChartPoint]),
            });
        }
    }
}
