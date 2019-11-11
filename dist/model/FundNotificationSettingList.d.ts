import { NotificationSettingViewModel } from './NotificationSettingViewModel';
export declare class FundNotificationSettingList {
    'assetId': string;
    'title': string;
    'url': string;
    'logo': string;
    'color': string;
    'settingsGeneral': Array<NotificationSettingViewModel>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundNotificationSettingList | undefined;
}
