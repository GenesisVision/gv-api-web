import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class ProgramStatistic {
    static constructFromObject(data, obj = new ProgramStatistic()) {
        if (data) {
            if (data.hasOwnProperty('balanceBase')) {
                obj['balanceBase'] = AmountWithCurrency.constructFromObject(data['balanceBase']);
            }
            if (data.hasOwnProperty('balanceGVT')) {
                obj['balanceGVT'] = AmountWithCurrency.constructFromObject(data['balanceGVT']);
            }
            if (data.hasOwnProperty('balanceSecondary')) {
                obj['balanceSecondary'] = AmountWithCurrency.constructFromObject(data['balanceSecondary']);
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
            if (data.hasOwnProperty('hasNotifications')) {
                obj['hasNotifications'] = ApiClient.convertToType(data['hasNotifications'], 'boolean');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('startBalance')) {
                obj['startBalance'] = ApiClient.convertToType(data['startBalance'], 'number');
            }
            if (data.hasOwnProperty('startCurrency')) {
                obj['startCurrency'] = Currency.constructFromObject(data['startCurrency']);
            }
            if (data.hasOwnProperty('investedAmount')) {
                obj['investedAmount'] = ApiClient.convertToType(data['investedAmount'], 'number');
            }
            if (data.hasOwnProperty('investedCurrency')) {
                obj['investedCurrency'] = Currency.constructFromObject(data['investedCurrency']);
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'number');
            }
            if (data.hasOwnProperty('tradesSuccessCount')) {
                obj['tradesSuccessCount'] = ApiClient.convertToType(data['tradesSuccessCount'], 'number');
            }
            if (data.hasOwnProperty('profitFactorPercent')) {
                obj['profitFactorPercent'] = ApiClient.convertToType(data['profitFactorPercent'], 'number');
            }
            if (data.hasOwnProperty('sharpeRatioPercent')) {
                obj['sharpeRatioPercent'] = ApiClient.convertToType(data['sharpeRatioPercent'], 'number');
            }
        }
        return obj;
    }
}
