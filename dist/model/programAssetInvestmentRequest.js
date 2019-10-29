import ApiClient from "../ApiClient";
export class ProgramAssetInvestmentRequest {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramAssetInvestmentRequest()) {
        if (data) {
            if (data.hasOwnProperty('isWithdrawAll')) {
                obj['isWithdrawAll'] = ApiClient.convertToType(data['isWithdrawAll'], 'boolean');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'number');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
        }
        return obj;
    }
}
