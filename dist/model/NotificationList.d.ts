import { NotificationViewModel } from './NotificationViewModel';
export declare class NotificationList {
    'notifications'?: Array<NotificationViewModel>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NotificationList): NotificationList;
}
