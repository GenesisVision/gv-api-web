import { AssetInfoLinkType } from './AssetInfoLinkType';
import ApiClient from "../ApiClient";
export class AssetInfoLink {
    constructor(data) {
        this['url'] = data['url'];
        this['logo'] = data['logo'];
        this['name'] = data['name'];
        this['type'] = data['type'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetInfoLink({
                'url': ApiClient.convertToType(data['url'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'type': AssetInfoLinkType.constructFromObject(data['type']),
            });
        }
    }
}
