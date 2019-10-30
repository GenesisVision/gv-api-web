import { SubscriptionMode } from './subscriptionMode';
import ApiClient from "../ApiClient";
export class SignalSubscription {
    constructor() {
    }
    static constructFromObject(data, obj = new SignalSubscription()) {
        if (data) {
            if (data.hasOwnProperty('hasSignalAccount')) {
                obj['hasSignalAccount'] = ApiClient.convertToType(data['hasSignalAccount'], 'boolean');
            }
            if (data.hasOwnProperty('hasActiveSubscription')) {
                obj['hasActiveSubscription'] = ApiClient.convertToType(data['hasActiveSubscription'], 'boolean');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = SubscriptionMode.constructFromObject(data['mode']);
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'number');
            }
            if (data.hasOwnProperty('openTolerancePercent')) {
                obj['openTolerancePercent'] = ApiClient.convertToType(data['openTolerancePercent'], 'number');
            }
            if (data.hasOwnProperty('fixedVolume')) {
                obj['fixedVolume'] = ApiClient.convertToType(data['fixedVolume'], 'number');
            }
            if (data.hasOwnProperty('fixedCurrency')) {
                obj['fixedCurrency'] = ApiClient.convertToType(data['fixedCurrency'], 'string');
            }
            if (data.hasOwnProperty('totalProfit')) {
                obj['totalProfit'] = ApiClient.convertToType(data['totalProfit'], 'number');
            }
            if (data.hasOwnProperty('totalVolume')) {
                obj['totalVolume'] = ApiClient.convertToType(data['totalVolume'], 'number');
            }
        }
        return obj;
    }
}
