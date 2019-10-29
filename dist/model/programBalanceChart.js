import { BalanceChartPoint } from './balanceChartPoint';
import { Currency } from './currency';
import ApiClient from "../ApiClient";
export class ProgramBalanceChart {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramBalanceChart()) {
        if (data) {
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('programCurrency')) {
                obj['programCurrency'] = Currency.constructFromObject(data['programCurrency']);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [BalanceChartPoint]);
            }
        }
        return obj;
    }
}
