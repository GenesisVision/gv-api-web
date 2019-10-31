import { NotificationSettingConditionType } from './NotificationSettingConditionType';
import { NotificationType } from './NotificationType';
export declare class NotificationSettingViewModel {
    'id': string;
    'isEnabled': boolean;
    'assetId': string;
    'managerId': string;
    'type': NotificationType;
    'conditionType': NotificationSettingConditionType;
    'conditionAmount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): NotificationSettingViewModel | undefined;
}
