import { AmountWithCurrency } from './AmountWithCurrency';
import ApiClient from "../ApiClient";
export class ProgramDetailsListStatistic {
    static constructFromObject(data, obj = new ProgramDetailsListStatistic()) {
        if (data) {
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = AmountWithCurrency.constructFromObject(data['balance']);
            }
            if (data.hasOwnProperty('currentValue')) {
                obj['currentValue'] = ApiClient.convertToType(data['currentValue'], 'number');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'number');
            }
            if (data.hasOwnProperty('profitValue')) {
                obj['profitValue'] = ApiClient.convertToType(data['profitValue'], 'number');
            }
            if (data.hasOwnProperty('drawdownPercent')) {
                obj['drawdownPercent'] = ApiClient.convertToType(data['drawdownPercent'], 'number');
            }
            if (data.hasOwnProperty('investorsCount')) {
                obj['investorsCount'] = ApiClient.convertToType(data['investorsCount'], 'number');
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'number');
            }
        }
        return obj;
    }
}
