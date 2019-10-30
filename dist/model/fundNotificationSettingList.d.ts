import { NotificationSettingViewModel } from './notificationSettingViewModel';
export declare class FundNotificationSettingList {
    'assetId'?: string;
    'title'?: string;
    'url'?: string;
    'logo'?: string;
    'color'?: string;
    'settingsGeneral'?: [NotificationSettingViewModel];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundNotificationSettingList): FundNotificationSettingList;
}
