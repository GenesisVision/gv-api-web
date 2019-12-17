import ApiClient from "../ApiClient";
export class ProgramChartStatistic {
    constructor(data) {
        this['investors'] = data['investors'];
        this['lastPeriodStarts'] = data['lastPeriodStarts'];
        this['lastPeriodEnds'] = data['lastPeriodEnds'];
        this['tradingVolume'] = data['tradingVolume'];
        this['trades'] = data['trades'];
        this['successTradesPercent'] = data['successTradesPercent'];
        this['profitFactor'] = data['profitFactor'];
        this['balance'] = data['balance'];
        this['profitPercent'] = data['profitPercent'];
        this['sharpeRatio'] = data['sharpeRatio'];
        this['sortinoRatio'] = data['sortinoRatio'];
        this['calmarRatio'] = data['calmarRatio'];
        this['maxDrawdown'] = data['maxDrawdown'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramChartStatistic({
                'investors': ApiClient.convertToType(data['investors'], 'number'),
                'lastPeriodStarts': ApiClient.convertToType(data['lastPeriodStarts'], 'Date'),
                'lastPeriodEnds': ApiClient.convertToType(data['lastPeriodEnds'], 'Date'),
                'tradingVolume': ApiClient.convertToType(data['tradingVolume'], 'number'),
                'trades': ApiClient.convertToType(data['trades'], 'number'),
                'successTradesPercent': ApiClient.convertToType(data['successTradesPercent'], 'number'),
                'profitFactor': ApiClient.convertToType(data['profitFactor'], 'number'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
                'sharpeRatio': ApiClient.convertToType(data['sharpeRatio'], 'number'),
                'sortinoRatio': ApiClient.convertToType(data['sortinoRatio'], 'number'),
                'calmarRatio': ApiClient.convertToType(data['calmarRatio'], 'number'),
                'maxDrawdown': ApiClient.convertToType(data['maxDrawdown'], 'number'),
            });
        }
    }
}
