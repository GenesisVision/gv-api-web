import { NotificationSettingViewModel } from './NotificationSettingViewModel';

export interface ProgramNotificationSettingList {
    level: number;
    levelProgress: number;
    settingsCustom: Array<NotificationSettingViewModel>;
    assetId: string;
    title: string;
    url: string;
    logoUrl: string;
    color: string;
    settingsGeneral: Array<NotificationSettingViewModel>;
}

