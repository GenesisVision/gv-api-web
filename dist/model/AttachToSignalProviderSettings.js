import { SubscriptionMode } from './SubscriptionMode';
import ApiClient from "../ApiClient";
export class AttachToSignalProviderSettings {
    constructor(data) {
        this['mode'] = data['mode'];
        this['percent'] = data['percent'];
        this['openTolerancePercent'] = data['openTolerancePercent'];
        this['fixedVolume'] = data['fixedVolume'];
        this['fixedCurrency'] = data['fixedCurrency'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AttachToSignalProviderSettings({
                'mode': SubscriptionMode.constructFromObject(data['mode']),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
                'openTolerancePercent': ApiClient.convertToType(data['openTolerancePercent'], 'number'),
                'fixedVolume': ApiClient.convertToType(data['fixedVolume'], 'number'),
                'fixedCurrency': ApiClient.convertToType(data['fixedCurrency'], 'string'),
            });
        }
    }
}
