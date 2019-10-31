import { NotificationSettingViewModel } from './NotificationSettingViewModel';
import ApiClient from "../ApiClient";
export class ProgramNotificationSettingList {
    constructor(data) {
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['settingsCustom'] = data['settingsCustom'];
        this['assetId'] = data['assetId'];
        this['title'] = data['title'];
        this['url'] = data['url'];
        this['logo'] = data['logo'];
        this['color'] = data['color'];
        this['settingsGeneral'] = data['settingsGeneral'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramNotificationSettingList({
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'settingsCustom': ApiClient.convertToType(data['settingsCustom'], [NotificationSettingViewModel]),
                'assetId': ApiClient.convertToType(data['assetId'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'settingsGeneral': ApiClient.convertToType(data['settingsGeneral'], [NotificationSettingViewModel]),
            });
        }
    }
}
