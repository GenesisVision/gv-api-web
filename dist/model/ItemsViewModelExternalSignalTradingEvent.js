import { ExternalSignalTradingEvent } from './ExternalSignalTradingEvent';
import ApiClient from "../ApiClient";
export class ItemsViewModelExternalSignalTradingEvent {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelExternalSignalTradingEvent({
                'items': ApiClient.convertToType(data['items'], [ExternalSignalTradingEvent]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
