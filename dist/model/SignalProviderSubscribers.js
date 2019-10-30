import { SignalSubscriber } from './SignalSubscriber';
import ApiClient from "../ApiClient";
export class SignalProviderSubscribers {
    static constructFromObject(data, obj = new SignalProviderSubscribers()) {
        if (data) {
            if (data.hasOwnProperty('subscribers')) {
                obj['subscribers'] = ApiClient.convertToType(data['subscribers'], [SignalSubscriber]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
