import { AmountWithCurrency } from './amountWithCurrency';
import ApiClient from "../ApiClient";
export class FundDetailsListStatistic {
    constructor() {
    }
    static constructFromObject(data, obj = new FundDetailsListStatistic()) {
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
        }
        return obj;
    }
}
