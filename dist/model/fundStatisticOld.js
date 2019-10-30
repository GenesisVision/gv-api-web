import { AmountWithCurrency } from './amountWithCurrency';
import ApiClient from "../ApiClient";
export class FundStatisticOld {
    constructor() {
    }
    static constructFromObject(data, obj = new FundStatisticOld()) {
        if (data) {
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = AmountWithCurrency.constructFromObject(data['balance']);
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'number');
            }
            if (data.hasOwnProperty('drawdownPercent')) {
                obj['drawdownPercent'] = ApiClient.convertToType(data['drawdownPercent'], 'number');
            }
            if (data.hasOwnProperty('investorsCount')) {
                obj['investorsCount'] = ApiClient.convertToType(data['investorsCount'], 'number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('startBalance')) {
                obj['startBalance'] = ApiClient.convertToType(data['startBalance'], 'number');
            }
            if (data.hasOwnProperty('investedAmount')) {
                obj['investedAmount'] = ApiClient.convertToType(data['investedAmount'], 'number');
            }
            if (data.hasOwnProperty('rebalancingCount')) {
                obj['rebalancingCount'] = ApiClient.convertToType(data['rebalancingCount'], 'number');
            }
        }
        return obj;
    }
}
