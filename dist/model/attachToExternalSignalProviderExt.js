import { SubscriptionMode } from './subscriptionMode';
import ApiClient from "../ApiClient";
export class AttachToExternalSignalProviderExt {
    constructor() {
    }
    static constructFromObject(data, obj = new AttachToExternalSignalProviderExt()) {
        if (data) {
            if (data.hasOwnProperty('externalKeyId')) {
                obj['externalKeyId'] = ApiClient.convertToType(data['externalKeyId'], 'string');
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
        }
        return obj;
    }
}
