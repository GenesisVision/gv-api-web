import { InvestmentProgramType } from './InvestmentProgramType';
import { NotificationType } from './NotificationType';
import ApiClient from "../ApiClient";
export class NotificationViewModel {
    constructor(data) {
        this['id'] = data['id'];
        this['text'] = data['text'];
        this['date'] = data['date'];
        this['type'] = data['type'];
        this['assetId'] = data['assetId'];
        this['managerId'] = data['managerId'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['isUnread'] = data['isUnread'];
        this['assetType'] = data['assetType'];
    }
    static constructFromObject(data) {
        if (data) {
            return new NotificationViewModel({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'text': ApiClient.convertToType(data['text'], 'string'),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'type': NotificationType.constructFromObject(data['type']),
                'assetId': ApiClient.convertToType(data['assetId'], 'string'),
                'managerId': ApiClient.convertToType(data['managerId'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'isUnread': ApiClient.convertToType(data['isUnread'], 'boolean'),
                'assetType': InvestmentProgramType.constructFromObject(data['assetType']),
            });
        }
    }
}
