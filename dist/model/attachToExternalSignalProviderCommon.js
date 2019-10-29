import { SubscriptionMode } from './subscriptionMode';
import ApiClient from "../ApiClient";
export class AttachToExternalSignalProviderCommon {
    constructor() {
    }
    static constructFromObject(data, obj = new AttachToExternalSignalProviderCommon()) {
        if (data) {
            if (data.hasOwnProperty('initialDepositCurrency')) {
                obj['initialDepositCurrency'] = ApiClient.convertToType(data['initialDepositCurrency'], 'string');
            }
            if (data.hasOwnProperty('initialDepositAmount')) {
                obj['initialDepositAmount'] = ApiClient.convertToType(data['initialDepositAmount'], 'number');
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
