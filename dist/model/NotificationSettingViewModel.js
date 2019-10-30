import { NotificationSettingConditionType } from './NotificationSettingConditionType';
import { NotificationType } from './NotificationType';
import ApiClient from "../ApiClient";
export class NotificationSettingViewModel {
    static constructFromObject(data, obj = new NotificationSettingViewModel()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'boolean');
            }
            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'string');
            }
            if (data.hasOwnProperty('managerId')) {
                obj['managerId'] = ApiClient.convertToType(data['managerId'], 'string');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = NotificationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('conditionType')) {
                obj['conditionType'] = NotificationSettingConditionType.constructFromObject(data['conditionType']);
            }
            if (data.hasOwnProperty('conditionAmount')) {
                obj['conditionAmount'] = ApiClient.convertToType(data['conditionAmount'], 'number');
            }
        }
        return obj;
    }
}
