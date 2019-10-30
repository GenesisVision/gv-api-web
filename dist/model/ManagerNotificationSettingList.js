import { NotificationSettingViewModel } from './NotificationSettingViewModel';
import ApiClient from "../ApiClient";
export class ManagerNotificationSettingList {
    static constructFromObject(data, obj = new ManagerNotificationSettingList()) {
        if (data) {
            if (data.hasOwnProperty('managerId')) {
                obj['managerId'] = ApiClient.convertToType(data['managerId'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'string');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'string');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'string');
            }
            if (data.hasOwnProperty('settingsGeneral')) {
                obj['settingsGeneral'] = ApiClient.convertToType(data['settingsGeneral'], [NotificationSettingViewModel]);
            }
        }
        return obj;
    }
}
