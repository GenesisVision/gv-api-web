import { InvestmentProgramType } from './InvestmentProgramType';
import { NotificationType } from './NotificationType';
export declare class NotificationViewModel {
    'id': string;
    'text': string;
    'date': Date;
    'type': NotificationType;
    'assetId': string;
    'managerId': string;
    'logo': string;
    'url': string;
    'color': string;
    'isUnread': boolean;
    'assetType': InvestmentProgramType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): NotificationViewModel;
}
