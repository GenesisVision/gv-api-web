import ApiClient from "../ApiClient";
export class SignalTradingEvent {
    constructor() {
    }
    static constructFromObject(data, obj = new SignalTradingEvent()) {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'string');
            }
        }
        return obj;
    }
}
