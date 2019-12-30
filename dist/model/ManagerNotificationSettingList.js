import { NotificationSettingViewModel } from './NotificationSettingViewModel';
import ApiClient from "../ApiClient";
export class ManagerNotificationSettingList {
    constructor(data) {
        this['managerId'] = data['managerId'];
        this['url'] = data['url'];
        this['username'] = data['username'];
        this['avatar'] = data['avatar'];
        this['about'] = data['about'];
        this['settingsGeneral'] = data['settingsGeneral'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ManagerNotificationSettingList({
                'managerId': ApiClient.convertToType(data['managerId'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'username': ApiClient.convertToType(data['username'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'about': ApiClient.convertToType(data['about'], 'string'),
                'settingsGeneral': ApiClient.convertToType(data['settingsGeneral'], [NotificationSettingViewModel]),
            });
        }
    }
}
