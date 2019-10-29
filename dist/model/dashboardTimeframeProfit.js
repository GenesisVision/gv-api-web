import ApiClient from "../ApiClient";
export class DashboardTimeframeProfit {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardTimeframeProfit()) {
        if (data) {
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'number');
            }
        }
        return obj;
    }
}
