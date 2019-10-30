import { NotificationSettingViewModel } from './NotificationSettingViewModel';
export declare class ManagerNotificationSettingList {
    'managerId'?: string;
    'url'?: string;
    'username'?: string;
    'avatar'?: string;
    'about'?: string;
    'settingsGeneral'?: Array<NotificationSettingViewModel>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerNotificationSettingList): ManagerNotificationSettingList;
}
