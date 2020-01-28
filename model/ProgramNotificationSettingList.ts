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
import { NotificationSettingViewModel } from './NotificationSettingViewModel';

import ApiClient from "../ApiClient";

export class ProgramNotificationSettingList { 
    public 'level': number;
    public 'levelProgress': number;
    public 'settingsCustom': Array<NotificationSettingViewModel>;
    public 'assetId': string;
    public 'title': string;
    public 'url': string;
    public 'logo': string;
    public 'color': string;
    public 'settingsGeneral': Array<NotificationSettingViewModel>;

    constructor(data: {[key: string]: any}) { 
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

    static constructFromObject(data: {[key: string]: any}): ProgramNotificationSettingList | undefined {
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



