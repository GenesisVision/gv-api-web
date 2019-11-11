import { OrderSignalModel } from './OrderSignalModel';
import ApiClient from "../ApiClient";
export class TradesSignalViewModel {
    constructor(data) {
        this['showSwaps'] = data['showSwaps'];
        this['showTickets'] = data['showTickets'];
        this['trades'] = data['trades'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradesSignalViewModel({
                'showSwaps': ApiClient.convertToType(data['showSwaps'], 'boolean'),
                'showTickets': ApiClient.convertToType(data['showTickets'], 'boolean'),
                'trades': ApiClient.convertToType(data['trades'], [OrderSignalModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
