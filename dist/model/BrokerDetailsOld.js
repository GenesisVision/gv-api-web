import ApiClient from "../ApiClient";
export class BrokerDetailsOld {
    constructor(data) {
        this['logo'] = data['logo'];
        this['name'] = data['name'];
        this['isForex'] = data['isForex'];
        this['showSwaps'] = data['showSwaps'];
        this['showTickets'] = data['showTickets'];
        this['showCommissionRebate'] = data['showCommissionRebate'];
        this['isForexSometime'] = data['isForexSometime'];
        this['showSwapsSometime'] = data['showSwapsSometime'];
        this['showTicketsSometime'] = data['showTicketsSometime'];
        this['showCommissionRebateSometime'] = data['showCommissionRebateSometime'];
    }
    static constructFromObject(data) {
        return new BrokerDetailsOld({
            'logo': ApiClient.convertToType(data['logo'], 'string'),
            'name': ApiClient.convertToType(data['name'], 'string'),
            'isForex': ApiClient.convertToType(data['isForex'], 'boolean'),
            'showSwaps': ApiClient.convertToType(data['showSwaps'], 'boolean'),
            'showTickets': ApiClient.convertToType(data['showTickets'], 'boolean'),
            'showCommissionRebate': ApiClient.convertToType(data['showCommissionRebate'], 'boolean'),
            'isForexSometime': ApiClient.convertToType(data['isForexSometime'], 'boolean'),
            'showSwapsSometime': ApiClient.convertToType(data['showSwapsSometime'], 'boolean'),
            'showTicketsSometime': ApiClient.convertToType(data['showTicketsSometime'], 'boolean'),
            'showCommissionRebateSometime': ApiClient.convertToType(data['showCommissionRebateSometime'], 'boolean'),
        });
    }
}
