import ApiClient from "../ApiClient";
export class FundAssetInvestmentRequest {
    constructor() {
    }
    static constructFromObject(data, obj = new FundAssetInvestmentRequest()) {
        if (data) {
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('withdrawPercent')) {
                obj['withdrawPercent'] = ApiClient.convertToType(data['withdrawPercent'], 'number');
            }
        }
        return obj;
    }
}
