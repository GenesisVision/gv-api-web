import ApiClient from "../ApiClient";
export class MakeTradingAccountSignalProvider {
    constructor(data) {
        this['id'] = data['id'];
        this['volumeFee'] = data['volumeFee'];
        this['successFee'] = data['successFee'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new MakeTradingAccountSignalProvider({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'volumeFee': ApiClient.convertToType(data['volumeFee'], 'number'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
            });
        }
    }
}
