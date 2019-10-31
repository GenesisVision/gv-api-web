import ApiClient from "../ApiClient";
export class ProgramAssetInvestmentRequest {
    constructor(data) {
        this['isWithdrawAll'] = data['isWithdrawAll'];
        this['successFee'] = data['successFee'];
        this['entryFee'] = data['entryFee'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramAssetInvestmentRequest({
                'isWithdrawAll': ApiClient.convertToType(data['isWithdrawAll'], 'boolean'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
            });
        }
    }
}
