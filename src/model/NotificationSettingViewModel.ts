import { NotificationSettingConditionType } from './NotificationSettingConditionType';
import { NotificationType } from './NotificationType';

export interface NotificationSettingViewModel {
    id: string;
    isEnabled: boolean;
    assetId: string;
    managerId: string;
    type: NotificationType;
    conditionType: NotificationSettingConditionType;
    conditionAmount: number;
}

