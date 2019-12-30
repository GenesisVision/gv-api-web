import { BrokerTradeServerType } from './BrokerTradeServerType';
import ApiClient from "../ApiClient";
export class BrokerDetails {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['name'] = data['name'];
        this['type'] = data['type'];
        this['isKycRequired'] = data['isKycRequired'];
        this['showSwaps'] = data['showSwaps'];
        this['showTickets'] = data['showTickets'];
        this['showCommissionRebate'] = data['showCommissionRebate'];
        this['isSignalsAvailable'] = data['isSignalsAvailable'];
        this['isKycRequiredSometime'] = data['isKycRequiredSometime'];
        this['showSwapsSometime'] = data['showSwapsSometime'];
        this['showTicketsSometime'] = data['showTicketsSometime'];
        this['showCommissionRebateSometime'] = data['showCommissionRebateSometime'];
    }
    static constructFromObject(data) {
        if (data) {
            return new BrokerDetails({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'type': BrokerTradeServerType.constructFromObject(data['type']),
                'isKycRequired': ApiClient.convertToType(data['isKycRequired'], 'boolean'),
                'showSwaps': ApiClient.convertToType(data['showSwaps'], 'boolean'),
                'showTickets': ApiClient.convertToType(data['showTickets'], 'boolean'),
                'showCommissionRebate': ApiClient.convertToType(data['showCommissionRebate'], 'boolean'),
                'isSignalsAvailable': ApiClient.convertToType(data['isSignalsAvailable'], 'boolean'),
                'isKycRequiredSometime': ApiClient.convertToType(data['isKycRequiredSometime'], 'boolean'),
                'showSwapsSometime': ApiClient.convertToType(data['showSwapsSometime'], 'boolean'),
                'showTicketsSometime': ApiClient.convertToType(data['showTicketsSometime'], 'boolean'),
                'showCommissionRebateSometime': ApiClient.convertToType(data['showCommissionRebateSometime'], 'boolean'),
            });
        }
    }
}
