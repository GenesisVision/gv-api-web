import ApiClient from "../ApiClient";
export class ProgramChartStatistic {
    constructor(data) {
        this['profit'] = data['profit'];
        this['tradingVolume'] = data['tradingVolume'];
        this['trades'] = data['trades'];
        this['successTradesPercent'] = data['successTradesPercent'];
        this['profitFactor'] = data['profitFactor'];
        this['lastPeriodStarts'] = data['lastPeriodStarts'];
        this['lastPeriodEnds'] = data['lastPeriodEnds'];
        this['balance'] = data['balance'];
        this['investors'] = data['investors'];
        this['sharpeRatio'] = data['sharpeRatio'];
        this['sortinoRatio'] = data['sortinoRatio'];
        this['calmarRatio'] = data['calmarRatio'];
        this['maxDrawdown'] = data['maxDrawdown'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramChartStatistic({
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'tradingVolume': ApiClient.convertToType(data['tradingVolume'], 'number'),
                'trades': ApiClient.convertToType(data['trades'], 'number'),
                'successTradesPercent': ApiClient.convertToType(data['successTradesPercent'], 'number'),
                'profitFactor': ApiClient.convertToType(data['profitFactor'], 'number'),
                'lastPeriodStarts': ApiClient.convertToType(data['lastPeriodStarts'], 'Date'),
                'lastPeriodEnds': ApiClient.convertToType(data['lastPeriodEnds'], 'Date'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'investors': ApiClient.convertToType(data['investors'], 'number'),
                'sharpeRatio': ApiClient.convertToType(data['sharpeRatio'], 'number'),
                'sortinoRatio': ApiClient.convertToType(data['sortinoRatio'], 'number'),
                'calmarRatio': ApiClient.convertToType(data['calmarRatio'], 'number'),
                'maxDrawdown': ApiClient.convertToType(data['maxDrawdown'], 'number'),
            });
        }
    }
}
