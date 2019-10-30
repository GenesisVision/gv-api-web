import { InvestmentProgramType } from './InvestmentProgramType';
import { NotificationType } from './NotificationType';
export declare class NotificationViewModel {
    'id'?: string;
    'text'?: string;
    'date'?: Date;
    'type'?: NotificationType;
    'assetId'?: string;
    'managerId'?: string;
    'logo'?: string;
    'url'?: string;
    'color'?: string;
    'isUnread'?: boolean;
    'assetType'?: InvestmentProgramType;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NotificationViewModel): NotificationViewModel;
}
