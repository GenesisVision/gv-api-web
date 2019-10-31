import { AmountWithCurrency } from './AmountWithCurrency';
import ApiClient from "../ApiClient";
export class FundDetailsListStatistic {
    constructor(data) {
        this['balance'] = data['balance'];
        this['profitPercent'] = data['profitPercent'];
        this['drawdownPercent'] = data['drawdownPercent'];
        this['investorsCount'] = data['investorsCount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundDetailsListStatistic({
                'balance': AmountWithCurrency.constructFromObject(data['balance']),
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
                'drawdownPercent': ApiClient.convertToType(data['drawdownPercent'], 'number'),
                'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
            });
        }
    }
}
