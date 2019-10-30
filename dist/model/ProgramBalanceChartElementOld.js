import ApiClient from "../ApiClient";
export class ProgramBalanceChartElementOld {
    static constructFromObject(data, obj = new ProgramBalanceChartElementOld()) {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('managerFunds')) {
                obj['managerFunds'] = ApiClient.convertToType(data['managerFunds'], 'number');
            }
            if (data.hasOwnProperty('investorsFunds')) {
                obj['investorsFunds'] = ApiClient.convertToType(data['investorsFunds'], 'number');
            }
        }
        return obj;
    }
}
