import { FundNotificationSettingList } from './fundNotificationSettingList';
import { ManagerNotificationSettingList } from './managerNotificationSettingList';
import { NotificationSettingViewModel } from './notificationSettingViewModel';
import { ProgramNotificationSettingList } from './programNotificationSettingList';
import ApiClient from "../ApiClient";
export class NotificationSettingList {
    constructor() {
    }
    static constructFromObject(data, obj = new NotificationSettingList()) {
        if (data) {
            if (data.hasOwnProperty('settingsGeneral')) {
                obj['settingsGeneral'] = ApiClient.convertToType(data['settingsGeneral'], [NotificationSettingViewModel]);
            }
            if (data.hasOwnProperty('settingsProgram')) {
                obj['settingsProgram'] = ApiClient.convertToType(data['settingsProgram'], [ProgramNotificationSettingList]);
            }
            if (data.hasOwnProperty('settingsFund')) {
                obj['settingsFund'] = ApiClient.convertToType(data['settingsFund'], [FundNotificationSettingList]);
            }
            if (data.hasOwnProperty('settingsManager')) {
                obj['settingsManager'] = ApiClient.convertToType(data['settingsManager'], [ManagerNotificationSettingList]);
            }
        }
        return obj;
    }
}
