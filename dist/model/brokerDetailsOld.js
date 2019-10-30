import ApiClient from "../ApiClient";
export class BrokerDetailsOld {
    constructor() {
    }
    static constructFromObject(data, obj = new BrokerDetailsOld()) {
        if (data) {
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('isForex')) {
                obj['isForex'] = ApiClient.convertToType(data['isForex'], 'boolean');
            }
            if (data.hasOwnProperty('showSwaps')) {
                obj['showSwaps'] = ApiClient.convertToType(data['showSwaps'], 'boolean');
            }
            if (data.hasOwnProperty('showTickets')) {
                obj['showTickets'] = ApiClient.convertToType(data['showTickets'], 'boolean');
            }
            if (data.hasOwnProperty('showCommissionRebate')) {
                obj['showCommissionRebate'] = ApiClient.convertToType(data['showCommissionRebate'], 'boolean');
            }
            if (data.hasOwnProperty('isForexSometime')) {
                obj['isForexSometime'] = ApiClient.convertToType(data['isForexSometime'], 'boolean');
            }
            if (data.hasOwnProperty('showSwapsSometime')) {
                obj['showSwapsSometime'] = ApiClient.convertToType(data['showSwapsSometime'], 'boolean');
            }
            if (data.hasOwnProperty('showTicketsSometime')) {
                obj['showTicketsSometime'] = ApiClient.convertToType(data['showTicketsSometime'], 'boolean');
            }
            if (data.hasOwnProperty('showCommissionRebateSometime')) {
                obj['showCommissionRebateSometime'] = ApiClient.convertToType(data['showCommissionRebateSometime'], 'boolean');
            }
        }
        return obj;
    }
}
