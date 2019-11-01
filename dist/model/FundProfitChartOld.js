import { FundEquityChartElementOld } from './FundEquityChartElementOld';
import ApiClient from "../ApiClient";
export class FundProfitChartOld {
    constructor(data) {
        this['creationDate'] = data['creationDate'];
        this['profitPercent'] = data['profitPercent'];
        this['equityChart'] = data['equityChart'];
        this['balance'] = data['balance'];
        this['investors'] = data['investors'];
        this['profitChangePercent'] = data['profitChangePercent'];
        this['sharpeRatio'] = data['sharpeRatio'];
        this['sortinoRatio'] = data['sortinoRatio'];
        this['calmarRatio'] = data['calmarRatio'];
        this['maxDrawdown'] = data['maxDrawdown'];
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundProfitChartOld({
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
                'equityChart': ApiClient.convertToType(data['equityChart'], [FundEquityChartElementOld]),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'investors': ApiClient.convertToType(data['investors'], 'number'),
                'profitChangePercent': ApiClient.convertToType(data['profitChangePercent'], 'number'),
                'sharpeRatio': ApiClient.convertToType(data['sharpeRatio'], 'number'),
                'sortinoRatio': ApiClient.convertToType(data['sortinoRatio'], 'number'),
                'calmarRatio': ApiClient.convertToType(data['calmarRatio'], 'number'),
                'maxDrawdown': ApiClient.convertToType(data['maxDrawdown'], 'number'),
                'rate': ApiClient.convertToType(data['rate'], 'number'),
            });
        }
    }
}
