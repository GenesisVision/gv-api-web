import { NotificationViewModel } from './NotificationViewModel';
import ApiClient from "../ApiClient";
export class NotificationList {
    constructor(data) {
        this['notifications'] = data['notifications'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new NotificationList({
                'notifications': ApiClient.convertToType(data['notifications'], [NotificationViewModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
