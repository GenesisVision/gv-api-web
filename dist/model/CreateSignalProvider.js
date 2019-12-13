import ApiClient from "../ApiClient";
export class CreateSignalProvider {
    constructor(data) {
        this['id'] = data['id'];
        this['volumeFee'] = data['volumeFee'];
        this['successFee'] = data['successFee'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CreateSignalProvider({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'volumeFee': ApiClient.convertToType(data['volumeFee'], 'number'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
            });
        }
    }
}
