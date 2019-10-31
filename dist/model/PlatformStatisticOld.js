import ApiClient from "../ApiClient";
export class PlatformStatisticOld {
    constructor(data) {
        this['managers'] = data['managers'];
        this['investors'] = data['investors'];
        this['profitWeek'] = data['profitWeek'];
        this['investmentAmount'] = data['investmentAmount'];
        this['totalInvestorsProfit'] = data['totalInvestorsProfit'];
        this['totalProfit'] = data['totalProfit'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformStatisticOld({
                'managers': ApiClient.convertToType(data['managers'], 'number'),
                'investors': ApiClient.convertToType(data['investors'], 'number'),
                'profitWeek': ApiClient.convertToType(data['profitWeek'], 'number'),
                'investmentAmount': ApiClient.convertToType(data['investmentAmount'], 'number'),
                'totalInvestorsProfit': ApiClient.convertToType(data['totalInvestorsProfit'], 'number'),
                'totalProfit': ApiClient.convertToType(data['totalProfit'], 'number'),
            });
        }
    }
}
