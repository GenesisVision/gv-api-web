import { AssetFilterType } from './AssetFilterType';
import ApiClient from "../ApiClient";
export class AssetsValue {
    static constructFromObject(data, obj = new AssetsValue()) {
        if (data) {
            if (data.hasOwnProperty('type')) {
                obj['type'] = AssetFilterType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('changePercent')) {
                obj['changePercent'] = ApiClient.convertToType(data['changePercent'], 'number');
            }
            if (data.hasOwnProperty('changeValue')) {
                obj['changeValue'] = ApiClient.convertToType(data['changeValue'], 'number');
            }
        }
        return obj;
    }
}
