import { NotificationViewModel } from './notificationViewModel';
export declare class NotificationList {
    'notifications'?: [NotificationViewModel];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NotificationList): NotificationList;
}
