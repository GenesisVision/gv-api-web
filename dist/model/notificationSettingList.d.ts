import { FundNotificationSettingList } from './fundNotificationSettingList';
import { ManagerNotificationSettingList } from './managerNotificationSettingList';
import { NotificationSettingViewModel } from './notificationSettingViewModel';
import { ProgramNotificationSettingList } from './programNotificationSettingList';
export declare class NotificationSettingList {
    'settingsGeneral'?: [NotificationSettingViewModel];
    'settingsProgram'?: [ProgramNotificationSettingList];
    'settingsFund'?: [FundNotificationSettingList];
    'settingsManager'?: [ManagerNotificationSettingList];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NotificationSettingList): NotificationSettingList;
}
