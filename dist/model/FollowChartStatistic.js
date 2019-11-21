import ApiClient from "../ApiClient";
export class FollowChartStatistic {
    constructor(data) {
        this['subscribers'] = data['subscribers'];
        this['profit'] = data['profit'];
        this['tradingVolume'] = data['tradingVolume'];
        this['trades'] = data['trades'];
        this['successTradesPercent'] = data['successTradesPercent'];
        this['profitFactor'] = data['profitFactor'];
        this['balance'] = data['balance'];
        this['sharpeRatio'] = data['sharpeRatio'];
        this['sortinoRatio'] = data['sortinoRatio'];
        this['calmarRatio'] = data['calmarRatio'];
        this['maxDrawdown'] = data['maxDrawdown'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowChartStatistic({
                'subscribers': ApiClient.convertToType(data['subscribers'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'tradingVolume': ApiClient.convertToType(data['tradingVolume'], 'number'),
                'trades': ApiClient.convertToType(data['trades'], 'number'),
                'successTradesPercent': ApiClient.convertToType(data['successTradesPercent'], 'number'),
                'profitFactor': ApiClient.convertToType(data['profitFactor'], 'number'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'sharpeRatio': ApiClient.convertToType(data['sharpeRatio'], 'number'),
                'sortinoRatio': ApiClient.convertToType(data['sortinoRatio'], 'number'),
                'calmarRatio': ApiClient.convertToType(data['calmarRatio'], 'number'),
                'maxDrawdown': ApiClient.convertToType(data['maxDrawdown'], 'number'),
            });
        }
    }
}
