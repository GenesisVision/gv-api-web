import { NotificationSettingViewModel } from './notificationSettingViewModel';
export declare class FundNotificationSettingList {
    'assetId'?: string;
    'title'?: string;
    'url'?: string;
    'logo'?: string;
    'color'?: string;
    'settingsGeneral'?: Array<NotificationSettingViewModel>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundNotificationSettingList): FundNotificationSettingList;
}
