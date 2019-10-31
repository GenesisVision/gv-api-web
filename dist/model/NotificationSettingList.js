import { FundNotificationSettingList } from './FundNotificationSettingList';
import { ManagerNotificationSettingList } from './ManagerNotificationSettingList';
import { NotificationSettingViewModel } from './NotificationSettingViewModel';
import { ProgramNotificationSettingList } from './ProgramNotificationSettingList';
import ApiClient from "../ApiClient";
export class NotificationSettingList {
    constructor(data) {
        this['settingsGeneral'] = data['settingsGeneral'];
        this['settingsProgram'] = data['settingsProgram'];
        this['settingsFund'] = data['settingsFund'];
        this['settingsManager'] = data['settingsManager'];
    }
    static constructFromObject(data) {
        return new NotificationSettingList({
            'settingsGeneral': ApiClient.convertToType(data['settingsGeneral'], [NotificationSettingViewModel]),
            'settingsProgram': ApiClient.convertToType(data['settingsProgram'], [ProgramNotificationSettingList]),
            'settingsFund': ApiClient.convertToType(data['settingsFund'], [FundNotificationSettingList]),
            'settingsManager': ApiClient.convertToType(data['settingsManager'], [ManagerNotificationSettingList]),
        });
    }
}