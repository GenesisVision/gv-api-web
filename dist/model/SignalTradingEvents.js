import { SignalTradingEvent } from './SignalTradingEvent';
import ApiClient from "../ApiClient";
export class SignalTradingEvents {
    static constructFromObject(data, obj = new SignalTradingEvents()) {
        if (data) {
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [SignalTradingEvent]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
