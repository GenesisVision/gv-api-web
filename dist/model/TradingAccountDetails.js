import ApiClient from "../ApiClient";
export class TradingAccountDetails {
    constructor(data) {
        this['id'] = data['id'];
        this['currency'] = data['currency'];
        this['login'] = data['login'];
        this['apiKey'] = data['apiKey'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradingAccountDetails({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'apiKey': ApiClient.convertToType(data['apiKey'], 'string'),
            });
        }
    }
}
