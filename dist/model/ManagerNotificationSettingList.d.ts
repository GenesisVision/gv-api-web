import { NotificationSettingViewModel } from './NotificationSettingViewModel';
export declare class ManagerNotificationSettingList {
    'managerId': string;
    'url': string;
    'username': string;
    'avatar': string;
    'about': string;
    'settingsGeneral': Array<NotificationSettingViewModel>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ManagerNotificationSettingList;
}
