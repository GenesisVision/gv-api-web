import { AssetType } from './assetType';
import ApiClient from "../ApiClient";
export class AssetDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new AssetDetails()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = AssetType.constructFromObject(data['assetType']);
            }
        }
        return obj;
    }
}
