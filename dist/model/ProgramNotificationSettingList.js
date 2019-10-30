import { NotificationSettingViewModel } from './NotificationSettingViewModel';
import ApiClient from "../ApiClient";
export class ProgramNotificationSettingList {
    static constructFromObject(data, obj = new ProgramNotificationSettingList()) {
        if (data) {
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'number');
            }
            if (data.hasOwnProperty('levelProgress')) {
                obj['levelProgress'] = ApiClient.convertToType(data['levelProgress'], 'number');
            }
            if (data.hasOwnProperty('settingsCustom')) {
                obj['settingsCustom'] = ApiClient.convertToType(data['settingsCustom'], [NotificationSettingViewModel]);
            }
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
