import { NotificationSettingViewModel } from './NotificationSettingViewModel';

export interface FundNotificationSettingList {
    assetId: string;
    title: string;
    url: string;
    logo: string;
    logoUrl: string;
    color: string;
    settingsGeneral: Array<NotificationSettingViewModel>;
}

