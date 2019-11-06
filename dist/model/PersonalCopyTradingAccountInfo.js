import ApiClient from "../ApiClient";
export class PersonalCopyTradingAccountInfo {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalCopyTradingAccountInfo({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
            });
        }
    }
}
