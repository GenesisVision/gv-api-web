import ApiClient from "../ApiClient";
export class SignalSubscriberInfo {
    constructor(data) {
        this['tradingAccountId'] = data['tradingAccountId'];
        this['tradingAccountLogin'] = data['tradingAccountLogin'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SignalSubscriberInfo({
                'tradingAccountId': ApiClient.convertToType(data['tradingAccountId'], 'string'),
                'tradingAccountLogin': ApiClient.convertToType(data['tradingAccountLogin'], 'string'),
            });
        }
    }
}
