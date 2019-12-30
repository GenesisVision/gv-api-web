import ApiClient from "../ApiClient";
export class SignalTradingEvent {
    constructor(data) {
        this['date'] = data['date'];
        this['message'] = data['message'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SignalTradingEvent({
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'message': ApiClient.convertToType(data['message'], 'string'),
            });
        }
    }
}
