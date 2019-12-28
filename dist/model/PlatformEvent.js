import { AssetType } from './AssetType';
import { PlatformEventType } from './PlatformEventType';
import ApiClient from "../ApiClient";
export class PlatformEvent {
    constructor(data) {
        this['title'] = data['title'];
        this['text'] = data['text'];
        this['icon'] = data['icon'];
        this['assetUrl'] = data['assetUrl'];
        this['userUrl'] = data['userUrl'];
        this['value'] = data['value'];
        this['color'] = data['color'];
        this['assetType'] = data['assetType'];
        this['date'] = data['date'];
        this['type'] = data['type'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformEvent({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'text': ApiClient.convertToType(data['text'], 'string'),
                'icon': ApiClient.convertToType(data['icon'], 'string'),
                'assetUrl': ApiClient.convertToType(data['assetUrl'], 'string'),
                'userUrl': ApiClient.convertToType(data['userUrl'], 'string'),
                'value': ApiClient.convertToType(data['value'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'assetType': AssetType.constructFromObject(data['assetType']),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'type': PlatformEventType.constructFromObject(data['type']),
            });
        }
    }
}
