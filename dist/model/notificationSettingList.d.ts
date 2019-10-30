import { FundNotificationSettingList } from './fundNotificationSettingList';
import { ManagerNotificationSettingList } from './managerNotificationSettingList';
import { NotificationSettingViewModel } from './notificationSettingViewModel';
import { ProgramNotificationSettingList } from './programNotificationSettingList';
export declare class NotificationSettingList {
    'settingsGeneral'?: Array<NotificationSettingViewModel>;
    'settingsProgram'?: Array<ProgramNotificationSettingList>;
    'settingsFund'?: Array<FundNotificationSettingList>;
    'settingsManager'?: Array<ManagerNotificationSettingList>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NotificationSettingList): NotificationSettingList;
}
