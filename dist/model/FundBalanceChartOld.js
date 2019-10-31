import { BalanceChartElementOld } from './BalanceChartElementOld';
import ApiClient from "../ApiClient";
export class FundBalanceChartOld {
    constructor(data) {
        this['balance'] = data['balance'];
        this['balanceChart'] = data['balanceChart'];
    }
    static constructFromObject(data) {
        return new FundBalanceChartOld({
            'balance': ApiClient.convertToType(data['balance'], 'number'),
            'balanceChart': ApiClient.convertToType(data['balanceChart'], [BalanceChartElementOld]),
        });
    }
}
