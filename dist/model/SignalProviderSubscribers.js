import { SignalSubscriber } from './SignalSubscriber';
import ApiClient from "../ApiClient";
export class SignalProviderSubscribers {
    constructor(data) {
        this['subscribers'] = data['subscribers'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SignalProviderSubscribers({
                'subscribers': ApiClient.convertToType(data['subscribers'], [SignalSubscriber]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
