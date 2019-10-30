import { ChartSimple } from './chartSimple';
import { ValueChartBar } from './valueChartBar';
import ApiClient from "../ApiClient";
export class DashboardChartValue {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardChartValue()) {
        if (data) {
            if (data.hasOwnProperty('investedProgramsInfo')) {
                obj['investedProgramsInfo'] = ApiClient.convertToType(data['investedProgramsInfo'], [ValueChartBar]);
            }
            if (data.hasOwnProperty('balanceChart')) {
                obj['balanceChart'] = ApiClient.convertToType(data['balanceChart'], [ChartSimple]);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('valueCurrency')) {
                obj['valueCurrency'] = ApiClient.convertToType(data['valueCurrency'], 'number');
            }
            if (data.hasOwnProperty('changePercent')) {
                obj['changePercent'] = ApiClient.convertToType(data['changePercent'], 'number');
            }
            if (data.hasOwnProperty('changeValue')) {
                obj['changeValue'] = ApiClient.convertToType(data['changeValue'], 'number');
            }
            if (data.hasOwnProperty('changeValueCurrency')) {
                obj['changeValueCurrency'] = ApiClient.convertToType(data['changeValueCurrency'], 'number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
        }
        return obj;
    }
}
