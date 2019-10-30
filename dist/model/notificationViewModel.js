import { InvestmentProgramType } from './investmentProgramType';
import { NotificationType } from './notificationType';
import ApiClient from "../ApiClient";
export class NotificationViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new NotificationViewModel()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'string');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = NotificationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'string');
            }
            if (data.hasOwnProperty('managerId')) {
                obj['managerId'] = ApiClient.convertToType(data['managerId'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('isUnread')) {
                obj['isUnread'] = ApiClient.convertToType(data['isUnread'], 'boolean');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = InvestmentProgramType.constructFromObject(data['assetType']);
            }
        }
        return obj;
    }
}
