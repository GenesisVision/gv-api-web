import { SignalTradingEvent } from './SignalTradingEvent';
import ApiClient from "../ApiClient";
export class ItemsViewModelSignalTradingEvent {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelSignalTradingEvent({
                'items': ApiClient.convertToType(data['items'], [SignalTradingEvent]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
