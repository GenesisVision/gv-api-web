import ApiClient from "../ApiClient";
export class FundChartStatistic {
    constructor(data) {
        this['profitPercent'] = data['profitPercent'];
        this['creationDate'] = data['creationDate'];
        this['balance'] = data['balance'];
        this['investors'] = data['investors'];
        this['sharpeRatio'] = data['sharpeRatio'];
        this['sortinoRatio'] = data['sortinoRatio'];
        this['calmarRatio'] = data['calmarRatio'];
        this['maxDrawdown'] = data['maxDrawdown'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundChartStatistic({
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
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
