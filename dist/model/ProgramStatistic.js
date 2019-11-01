import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
import ApiClient from "../ApiClient";
export class ProgramStatistic {
    constructor(data) {
        this['balanceBase'] = data['balanceBase'];
        this['balanceGVT'] = data['balanceGVT'];
        this['balanceSecondary'] = data['balanceSecondary'];
        this['currentValue'] = data['currentValue'];
        this['profitPercent'] = data['profitPercent'];
        this['profitValue'] = data['profitValue'];
        this['drawdownPercent'] = data['drawdownPercent'];
        this['investorsCount'] = data['investorsCount'];
        this['hasNotifications'] = data['hasNotifications'];
        this['startDate'] = data['startDate'];
        this['startBalance'] = data['startBalance'];
        this['startCurrency'] = data['startCurrency'];
        this['investedAmount'] = data['investedAmount'];
        this['investedCurrency'] = data['investedCurrency'];
        this['tradesCount'] = data['tradesCount'];
        this['tradesSuccessCount'] = data['tradesSuccessCount'];
        this['profitFactorPercent'] = data['profitFactorPercent'];
        this['sharpeRatioPercent'] = data['sharpeRatioPercent'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramStatistic({
                'balanceBase': AmountWithCurrency.constructFromObject(data['balanceBase']),
                'balanceGVT': AmountWithCurrency.constructFromObject(data['balanceGVT']),
                'balanceSecondary': AmountWithCurrency.constructFromObject(data['balanceSecondary']),
                'currentValue': ApiClient.convertToType(data['currentValue'], 'number'),
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
                'profitValue': ApiClient.convertToType(data['profitValue'], 'number'),
                'drawdownPercent': ApiClient.convertToType(data['drawdownPercent'], 'number'),
                'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
                'startDate': ApiClient.convertToType(data['startDate'], 'Date'),
                'startBalance': ApiClient.convertToType(data['startBalance'], 'number'),
                'startCurrency': Currency.constructFromObject(data['startCurrency']),
                'investedAmount': ApiClient.convertToType(data['investedAmount'], 'number'),
                'investedCurrency': Currency.constructFromObject(data['investedCurrency']),
                'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
                'tradesSuccessCount': ApiClient.convertToType(data['tradesSuccessCount'], 'number'),
                'profitFactorPercent': ApiClient.convertToType(data['profitFactorPercent'], 'number'),
                'sharpeRatioPercent': ApiClient.convertToType(data['sharpeRatioPercent'], 'number'),
            });
        }
    }
}
