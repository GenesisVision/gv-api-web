import { NotificationSettingConditionType } from './NotificationSettingConditionType';
import { NotificationType } from './NotificationType';

export interface NotificationSettingViewModel {
    assetId: string;
    managerId: string;
    type: NotificationType;
    conditionType: NotificationSettingConditionType;
    conditionAmount: number;
    id: string;
    isEnabled: boolean;
}

