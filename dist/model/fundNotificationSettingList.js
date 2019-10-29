import { NotificationSettingViewModel } from './notificationSettingViewModel';
import ApiClient from "../ApiClient";
export class FundNotificationSettingList {
    constructor() {
    }
    static constructFromObject(data, obj = new FundNotificationSettingList()) {
        if (data) {
            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('settingsGeneral')) {
                obj['settingsGeneral'] = ApiClient.convertToType(data['settingsGeneral'], [NotificationSettingViewModel]);
            }
        }
        return obj;
    }
}
