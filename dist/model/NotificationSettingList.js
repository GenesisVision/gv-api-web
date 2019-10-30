import { FundNotificationSettingList } from './FundNotificationSettingList';
import { ManagerNotificationSettingList } from './ManagerNotificationSettingList';
import { NotificationSettingViewModel } from './NotificationSettingViewModel';
import { ProgramNotificationSettingList } from './ProgramNotificationSettingList';
import ApiClient from "../ApiClient";
export class NotificationSettingList {
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
