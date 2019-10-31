import ApiClient from "../ApiClient";
export class FundAssetInvestmentRequest {
    constructor(data) {
        this['entryFee'] = data['entryFee'];
        this['exitFee'] = data['exitFee'];
        this['withdrawPercent'] = data['withdrawPercent'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetInvestmentRequest({
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
                'withdrawPercent': ApiClient.convertToType(data['withdrawPercent'], 'number'),
            });
        }
    }
}
