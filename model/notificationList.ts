/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { NotificationViewModel } from './notificationViewModel';

import ApiClient from "../ApiClient";

export class NotificationList { 
    public notifications?: [NotificationViewModel];
    public total?: number;

    static constructFromObject(data: {[key: string]: any}, obj: NotificationList = new NotificationList()): NotificationList {
        if (data) {
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [NotificationViewModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}



