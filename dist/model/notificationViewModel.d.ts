import { InvestmentProgramType } from './investmentProgramType';
import { NotificationType } from './notificationType';
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
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NotificationViewModel): NotificationViewModel;
}
