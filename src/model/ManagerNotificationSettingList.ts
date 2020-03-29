import { NotificationSettingViewModel } from './NotificationSettingViewModel';

export interface ManagerNotificationSettingList {
    managerId: string;
    url: string;
    username: string;
    avatar: string;
    logoUrl: string;
    about: string;
    settingsGeneral: Array<NotificationSettingViewModel>;
}

