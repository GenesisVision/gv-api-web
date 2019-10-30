import { Currency } from './Currency';
import { ProgramBalanceChartElementOld } from './ProgramBalanceChartElementOld';
import ApiClient from "../ApiClient";
export class ProgramBalanceChartOld {
    static constructFromObject(data, obj = new ProgramBalanceChartOld()) {
        if (data) {
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('programCurrency')) {
                obj['programCurrency'] = Currency.constructFromObject(data['programCurrency']);
            }
            if (data.hasOwnProperty('balanceChart')) {
                obj['balanceChart'] = ApiClient.convertToType(data['balanceChart'], [ProgramBalanceChartElementOld]);
            }
        }
        return obj;
    }
}
