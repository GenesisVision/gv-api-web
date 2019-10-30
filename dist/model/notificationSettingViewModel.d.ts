import { NotificationSettingConditionType } from './notificationSettingConditionType';
import { NotificationType } from './notificationType';
export declare class NotificationSettingViewModel {
    'id'?: string;
    'isEnabled'?: boolean;
    'assetId'?: string;
    'managerId'?: string;
    'type'?: NotificationType;
    'conditionType'?: NotificationSettingConditionType;
    'conditionAmount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NotificationSettingViewModel): NotificationSettingViewModel;
}
