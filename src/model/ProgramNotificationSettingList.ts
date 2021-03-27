import { NotificationSettingViewModel } from './NotificationSettingViewModel';

export interface ProgramNotificationSettingList {
    assetId: string;
    title: string;
    url: string;
    logoUrl: string;
    color: string;
    settingsGeneral: Array<NotificationSettingViewModel>;
    level: number;
    levelProgress: number;
    settingsCustom: Array<NotificationSettingViewModel>;
}

