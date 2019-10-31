import { AmountWithCurrency } from './AmountWithCurrency';
import ApiClient from "../ApiClient";
export class ProgramDetailsListStatistic {
    constructor(data) {
        this['balance'] = data['balance'];
        this['currentValue'] = data['currentValue'];
        this['profitPercent'] = data['profitPercent'];
        this['profitValue'] = data['profitValue'];
        this['drawdownPercent'] = data['drawdownPercent'];
        this['investorsCount'] = data['investorsCount'];
        this['tradesCount'] = data['tradesCount'];
    }
    static constructFromObject(data) {
        return new ProgramDetailsListStatistic({
            'balance': AmountWithCurrency.constructFromObject(data['balance']),
            'currentValue': ApiClient.convertToType(data['currentValue'], 'number'),
            'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
            'profitValue': ApiClient.convertToType(data['profitValue'], 'number'),
            'drawdownPercent': ApiClient.convertToType(data['drawdownPercent'], 'number'),
            'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
            'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
        });
    }
}
