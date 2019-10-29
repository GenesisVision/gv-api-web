import ApiClient from "../ApiClient";
export class ManagerFinancialStatistic {
    constructor() {
    }
    static constructFromObject(data, obj = new ManagerFinancialStatistic()) {
        if (data) {
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'number');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
        }
        return obj;
    }
}
