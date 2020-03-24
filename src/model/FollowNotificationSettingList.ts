import { NotificationSettingViewModel } from './NotificationSettingViewModel';

export interface FollowNotificationSettingList {
    assetId: string;
    title: string;
    url: string;
    logo: string;
    color: string;
    settingsGeneral: Array<NotificationSettingViewModel>;
}

