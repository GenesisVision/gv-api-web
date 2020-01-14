import { FollowNotificationSettingList } from './FollowNotificationSettingList';
import { FundNotificationSettingList } from './FundNotificationSettingList';
import { ManagerNotificationSettingList } from './ManagerNotificationSettingList';
import { NotificationSettingViewModel } from './NotificationSettingViewModel';
import { ProgramNotificationSettingList } from './ProgramNotificationSettingList';
export declare class NotificationSettingList {
    'settingsGeneral': Array<NotificationSettingViewModel>;
    'settingsProgram': Array<ProgramNotificationSettingList>;
    'settingsFund': Array<FundNotificationSettingList>;
    'settingsManager': Array<ManagerNotificationSettingList>;
    'settingsFollow': Array<FollowNotificationSettingList>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): NotificationSettingList | undefined;
}
