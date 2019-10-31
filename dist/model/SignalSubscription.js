import { SubscriptionMode } from './SubscriptionMode';
import ApiClient from "../ApiClient";
export class SignalSubscription {
    constructor(data) {
        this['hasSignalAccount'] = data['hasSignalAccount'];
        this['hasActiveSubscription'] = data['hasActiveSubscription'];
        this['mode'] = data['mode'];
        this['percent'] = data['percent'];
        this['openTolerancePercent'] = data['openTolerancePercent'];
        this['fixedVolume'] = data['fixedVolume'];
        this['fixedCurrency'] = data['fixedCurrency'];
        this['totalProfit'] = data['totalProfit'];
        this['totalVolume'] = data['totalVolume'];
    }
    static constructFromObject(data) {
        return new SignalSubscription({
            'hasSignalAccount': ApiClient.convertToType(data['hasSignalAccount'], 'boolean'),
            'hasActiveSubscription': ApiClient.convertToType(data['hasActiveSubscription'], 'boolean'),
            'mode': SubscriptionMode.constructFromObject(data['mode']),
            'percent': ApiClient.convertToType(data['percent'], 'number'),
            'openTolerancePercent': ApiClient.convertToType(data['openTolerancePercent'], 'number'),
            'fixedVolume': ApiClient.convertToType(data['fixedVolume'], 'number'),
            'fixedCurrency': ApiClient.convertToType(data['fixedCurrency'], 'string'),
            'totalProfit': ApiClient.convertToType(data['totalProfit'], 'number'),
            'totalVolume': ApiClient.convertToType(data['totalVolume'], 'number'),
        });
    }
}