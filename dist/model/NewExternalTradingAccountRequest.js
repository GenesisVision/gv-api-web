import ApiClient from "../ApiClient";
export class NewExternalTradingAccountRequest {
    constructor(data) {
        this['brokerAccountTypeId'] = data['brokerAccountTypeId'];
        this['key'] = data['key'];
        this['secret'] = data['secret'];
    }
    static constructFromObject(data) {
        if (data) {
            return new NewExternalTradingAccountRequest({
                'brokerAccountTypeId': ApiClient.convertToType(data['brokerAccountTypeId'], 'string'),
                'key': ApiClient.convertToType(data['key'], 'string'),
                'secret': ApiClient.convertToType(data['secret'], 'string'),
            });
        }
    }
}
