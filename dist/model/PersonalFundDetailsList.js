import ApiClient from "../ApiClient";
export class PersonalFundDetailsList {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalFundDetailsList({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
            });
        }
    }
}
