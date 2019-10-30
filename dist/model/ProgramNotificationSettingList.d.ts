import { NotificationSettingViewModel } from './NotificationSettingViewModel';
export declare class ProgramNotificationSettingList {
    'level'?: number;
    'levelProgress'?: number;
    'settingsCustom'?: Array<NotificationSettingViewModel>;
    'assetId'?: string;
    'title'?: string;
    'url'?: string;
    'logo'?: string;
    'color'?: string;
    'settingsGeneral'?: Array<NotificationSettingViewModel>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramNotificationSettingList): ProgramNotificationSettingList;
}
