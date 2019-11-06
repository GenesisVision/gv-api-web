import ApiClient from "../ApiClient";
export class ExternalSignalTradingEvent {
    constructor(data) {
        this['date'] = data['date'];
        this['message'] = data['message'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ExternalSignalTradingEvent({
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'message': ApiClient.convertToType(data['message'], 'string'),
            });
        }
    }
}
