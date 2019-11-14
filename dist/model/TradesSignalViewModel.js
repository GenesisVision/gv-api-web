import { OrderSignalModel } from './OrderSignalModel';
import ApiClient from "../ApiClient";
export class TradesSignalViewModel {
    constructor(data) {
        this['showSwaps'] = data['showSwaps'];
        this['showTickets'] = data['showTickets'];
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradesSignalViewModel({
                'showSwaps': ApiClient.convertToType(data['showSwaps'], 'boolean'),
                'showTickets': ApiClient.convertToType(data['showTickets'], 'boolean'),
                'items': ApiClient.convertToType(data['items'], [OrderSignalModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
