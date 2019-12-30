import { SignalSubscription } from './SignalSubscription';
import ApiClient from "../ApiClient";
export class ItemsViewModelSignalSubscription {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelSignalSubscription({
                'items': ApiClient.convertToType(data['items'], [SignalSubscription]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
