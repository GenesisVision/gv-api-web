import ApiClient from "../ApiClient";
export class BalanceChartElementOld {
    constructor(data) {
        this['date'] = data['date'];
        this['managerFunds'] = data['managerFunds'];
        this['investorsFunds'] = data['investorsFunds'];
    }
    static constructFromObject(data) {
        if (data) {
            return new BalanceChartElementOld({
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'managerFunds': ApiClient.convertToType(data['managerFunds'], 'number'),
                'investorsFunds': ApiClient.convertToType(data['investorsFunds'], 'number'),
            });
        }
    }
}
