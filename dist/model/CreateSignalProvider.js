import ApiClient from "../ApiClient";
export class CreateSignalProvider {
    constructor(data) {
        this['assetId'] = data['assetId'];
        this['volumeFee'] = data['volumeFee'];
        this['successFee'] = data['successFee'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CreateSignalProvider({
                'assetId': ApiClient.convertToType(data['assetId'], 'string'),
                'volumeFee': ApiClient.convertToType(data['volumeFee'], 'number'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
            });
        }
    }
}
