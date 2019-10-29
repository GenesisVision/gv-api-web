import ApiClient from "../ApiClient";
export class ProgramChartStatistic {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramChartStatistic()) {
        if (data) {
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('tradingVolume')) {
                obj['tradingVolume'] = ApiClient.convertToType(data['tradingVolume'], 'number');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], 'number');
            }
            if (data.hasOwnProperty('successTradesPercent')) {
                obj['successTradesPercent'] = ApiClient.convertToType(data['successTradesPercent'], 'number');
            }
            if (data.hasOwnProperty('profitFactor')) {
                obj['profitFactor'] = ApiClient.convertToType(data['profitFactor'], 'number');
            }
            if (data.hasOwnProperty('lastPeriodStarts')) {
                obj['lastPeriodStarts'] = ApiClient.convertToType(data['lastPeriodStarts'], 'Date');
            }
            if (data.hasOwnProperty('lastPeriodEnds')) {
                obj['lastPeriodEnds'] = ApiClient.convertToType(data['lastPeriodEnds'], 'Date');
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
