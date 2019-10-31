import { ChartSimple } from './ChartSimple';
import { ValueChartBar } from './ValueChartBar';
import ApiClient from "../ApiClient";
export class DashboardChartValue {
    constructor(data) {
        this['investedProgramsInfo'] = data['investedProgramsInfo'];
        this['balanceChart'] = data['balanceChart'];
        this['value'] = data['value'];
        this['valueCurrency'] = data['valueCurrency'];
        this['changePercent'] = data['changePercent'];
        this['changeValue'] = data['changeValue'];
        this['changeValueCurrency'] = data['changeValueCurrency'];
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        return new DashboardChartValue({
            'investedProgramsInfo': ApiClient.convertToType(data['investedProgramsInfo'], [ValueChartBar]),
            'balanceChart': ApiClient.convertToType(data['balanceChart'], [ChartSimple]),
            'value': ApiClient.convertToType(data['value'], 'number'),
            'valueCurrency': ApiClient.convertToType(data['valueCurrency'], 'number'),
            'changePercent': ApiClient.convertToType(data['changePercent'], 'number'),
            'changeValue': ApiClient.convertToType(data['changeValue'], 'number'),
            'changeValueCurrency': ApiClient.convertToType(data['changeValueCurrency'], 'number'),
            'rate': ApiClient.convertToType(data['rate'], 'number'),
        });
    }
}
