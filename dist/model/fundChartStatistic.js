import ApiClient from "../ApiClient";
export class FundChartStatistic {
    constructor() {
    }
    static constructFromObject(data, obj = new FundChartStatistic()) {
        if (data) {
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'number');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'number');
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
        }
        return obj;
    }
}
