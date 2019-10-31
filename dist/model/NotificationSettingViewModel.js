import { NotificationSettingConditionType } from './NotificationSettingConditionType';
import { NotificationType } from './NotificationType';
import ApiClient from "../ApiClient";
export class NotificationSettingViewModel {
    constructor(data) {
        this['id'] = data['id'];
        this['isEnabled'] = data['isEnabled'];
        this['assetId'] = data['assetId'];
        this['managerId'] = data['managerId'];
        this['type'] = data['type'];
        this['conditionType'] = data['conditionType'];
        this['conditionAmount'] = data['conditionAmount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new NotificationSettingViewModel({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'isEnabled': ApiClient.convertToType(data['isEnabled'], 'boolean'),
                'assetId': ApiClient.convertToType(data['assetId'], 'string'),
                'managerId': ApiClient.convertToType(data['managerId'], 'string'),
                'type': NotificationType.constructFromObject(data['type']),
                'conditionType': NotificationSettingConditionType.constructFromObject(data['conditionType']),
                'conditionAmount': ApiClient.convertToType(data['conditionAmount'], 'number'),
            });
        }
    }
}
