import { Currency } from './Currency';
import { ProgramBalanceChartElementOld } from './ProgramBalanceChartElementOld';
import ApiClient from "../ApiClient";
export class ProgramBalanceChartOld {
    constructor(data) {
        this['balance'] = data['balance'];
        this['programCurrency'] = data['programCurrency'];
        this['balanceChart'] = data['balanceChart'];
    }
    static constructFromObject(data) {
        return new ProgramBalanceChartOld({
            'balance': ApiClient.convertToType(data['balance'], 'number'),
            'programCurrency': Currency.constructFromObject(data['programCurrency']),
            'balanceChart': ApiClient.convertToType(data['balanceChart'], [ProgramBalanceChartElementOld]),
        });
    }
}
