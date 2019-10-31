import { AmountWithCurrency } from './AmountWithCurrency';
import ApiClient from "../ApiClient";
export class FundStatisticOld {
    constructor(data) {
        this['balance'] = data['balance'];
        this['profitPercent'] = data['profitPercent'];
        this['drawdownPercent'] = data['drawdownPercent'];
        this['investorsCount'] = data['investorsCount'];
        this['startDate'] = data['startDate'];
        this['startBalance'] = data['startBalance'];
        this['investedAmount'] = data['investedAmount'];
        this['rebalancingCount'] = data['rebalancingCount'];
    }
    static constructFromObject(data) {
        return new FundStatisticOld({
            'balance': AmountWithCurrency.constructFromObject(data['balance']),
            'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
            'drawdownPercent': ApiClient.convertToType(data['drawdownPercent'], 'number'),
            'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
            'startDate': ApiClient.convertToType(data['startDate'], 'Date'),
            'startBalance': ApiClient.convertToType(data['startBalance'], 'number'),
            'investedAmount': ApiClient.convertToType(data['investedAmount'], 'number'),
            'rebalancingCount': ApiClient.convertToType(data['rebalancingCount'], 'number'),
        });
    }
}
