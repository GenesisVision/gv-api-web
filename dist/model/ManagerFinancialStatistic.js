import ApiClient from "../ApiClient";
export class ManagerFinancialStatistic {
    constructor(data) {
        this['successFee'] = data['successFee'];
        this['entryFee'] = data['entryFee'];
        this['profit'] = data['profit'];
        this['balance'] = data['balance'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ManagerFinancialStatistic({
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
            });
        }
    }
}
