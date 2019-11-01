import { AssetFilterType } from './AssetFilterType';
import ApiClient from "../ApiClient";
export class AssetsValue {
    constructor(data) {
        this['type'] = data['type'];
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['avatar'] = data['avatar'];
        this['color'] = data['color'];
        this['value'] = data['value'];
        this['changePercent'] = data['changePercent'];
        this['changeValue'] = data['changeValue'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetsValue({
                'type': AssetFilterType.constructFromObject(data['type']),
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'changePercent': ApiClient.convertToType(data['changePercent'], 'number'),
                'changeValue': ApiClient.convertToType(data['changeValue'], 'number'),
            });
        }
    }
}
