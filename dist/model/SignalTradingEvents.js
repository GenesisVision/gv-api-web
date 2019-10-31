import { SignalTradingEvent } from './SignalTradingEvent';
import ApiClient from "../ApiClient";
export class SignalTradingEvents {
    constructor(data) {
        this['events'] = data['events'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SignalTradingEvents({
                'events': ApiClient.convertToType(data['events'], [SignalTradingEvent]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
