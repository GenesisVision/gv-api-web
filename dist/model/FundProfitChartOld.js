import { FundEquityChartElementOld } from './FundEquityChartElementOld';
import ApiClient from "../ApiClient";
export class FundProfitChartOld {
    static constructFromObject(data, obj = new FundProfitChartOld()) {
        if (data) {
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'number');
            }
            if (data.hasOwnProperty('equityChart')) {
                obj['equityChart'] = ApiClient.convertToType(data['equityChart'], [FundEquityChartElementOld]);
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'number');
            }
            if (data.hasOwnProperty('profitChangePercent')) {
                obj['profitChangePercent'] = ApiClient.convertToType(data['profitChangePercent'], 'number');
            }
            if (data.hasOwnProperty('sharpeRatio')) {
                obj['sharpeRatio'] = ApiClient.convertToType(data['sharpeRatio'], 'number');
            }
            if (data.hasOwnProperty('sortinoRatio')) {
                obj['sortinoRatio'] = ApiClient.convertToType(data['sortinoRatio'], 'number');
            }
            if (data.hasOwnProperty('calmarRatio')) {
                obj['calmarRatio'] = ApiClient.convertToType(data['calmarRatio'], 'number');
            }
            if (data.hasOwnProperty('maxDrawdown')) {
                obj['maxDrawdown'] = ApiClient.convertToType(data['maxDrawdown'], 'number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
        }
        return obj;
    }
}
