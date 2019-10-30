import { NotificationSettingViewModel } from './notificationSettingViewModel';
export declare class ManagerNotificationSettingList {
    'managerId'?: string;
    'url'?: string;
    'username'?: string;
    'avatar'?: string;
    'about'?: string;
    'settingsGeneral'?: Array<NotificationSettingViewModel>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerNotificationSettingList): ManagerNotificationSettingList;
}
