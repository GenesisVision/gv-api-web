import ApiClient from "../ApiClient";
export class PlatformStatisticOld {
    constructor() {
    }
    static constructFromObject(data, obj = new PlatformStatisticOld()) {
        if (data) {
            if (data.hasOwnProperty('managers')) {
                obj['managers'] = ApiClient.convertToType(data['managers'], 'number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'number');
            }
            if (data.hasOwnProperty('profitWeek')) {
                obj['profitWeek'] = ApiClient.convertToType(data['profitWeek'], 'number');
            }
            if (data.hasOwnProperty('investmentAmount')) {
                obj['investmentAmount'] = ApiClient.convertToType(data['investmentAmount'], 'number');
            }
            if (data.hasOwnProperty('totalInvestorsProfit')) {
                obj['totalInvestorsProfit'] = ApiClient.convertToType(data['totalInvestorsProfit'], 'number');
            }
            if (data.hasOwnProperty('totalProfit')) {
                obj['totalProfit'] = ApiClient.convertToType(data['totalProfit'], 'number');
            }
        }
        return obj;
    }
}
