import ApiClient from "../ApiClient";
export class DashboardTimeframeProfit {
    constructor(data) {
        this['profit'] = data['profit'];
        this['profitPercent'] = data['profitPercent'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTimeframeProfit({
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
            });
        }
    }
}
