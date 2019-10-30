import { NotificationSettingViewModel } from './notificationSettingViewModel';
export declare class ProgramNotificationSettingList {
    'level'?: number;
    'levelProgress'?: number;
    'settingsCustom'?: [NotificationSettingViewModel];
    'assetId'?: string;
    'title'?: string;
    'url'?: string;
    'logo'?: string;
    'color'?: string;
    'settingsGeneral'?: [NotificationSettingViewModel];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramNotificationSettingList): ProgramNotificationSettingList;
}
