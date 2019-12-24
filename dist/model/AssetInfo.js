import { AssetInfoLink } from './AssetInfoLink';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class AssetInfo {
    constructor(data) {
        this['name'] = data['name'];
        this['symbol'] = data['symbol'];
        this['logo'] = data['logo'];
        this['description'] = data['description'];
        this['chartSymbol'] = data['chartSymbol'];
        this['tags'] = data['tags'];
        this['socialLinks'] = data['socialLinks'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetInfo({
                'name': ApiClient.convertToType(data['name'], 'string'),
                'symbol': ApiClient.convertToType(data['symbol'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'chartSymbol': ApiClient.convertToType(data['chartSymbol'], 'string'),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
                'socialLinks': ApiClient.convertToType(data['socialLinks'], [AssetInfoLink]),
            });
        }
    }
}
