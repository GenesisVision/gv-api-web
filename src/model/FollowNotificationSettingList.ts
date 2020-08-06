import { NotificationSettingViewModel } from './NotificationSettingViewModel';

export interface FollowNotificationSettingList {
    assetId: string;
    title: string;
    url: string;
    logoUrl: string;
    color: string;
    settingsGeneral: Array<NotificationSettingViewModel>;
}

