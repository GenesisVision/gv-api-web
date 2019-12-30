import { NotificationViewModel } from './NotificationViewModel';
export declare class NotificationList {
    'notifications': Array<NotificationViewModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): NotificationList | undefined;
}
