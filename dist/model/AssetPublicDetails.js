import { AssetTypeExt } from './AssetTypeExt';
import ApiClient from "../ApiClient";
export class AssetPublicDetails {
    constructor(data) {
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['creationDate'] = data['creationDate'];
        this['status'] = data['status'];
        this['isOwnAsset'] = data['isOwnAsset'];
        this['typeExt'] = data['typeExt'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetPublicDetails({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'status': ApiClient.convertToType(data['status'], 'string'),
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'typeExt': AssetTypeExt.constructFromObject(data['typeExt']),
            });
        }
    }
}
