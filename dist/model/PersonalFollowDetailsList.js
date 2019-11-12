import ApiClient from "../ApiClient";
export class PersonalFollowDetailsList {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalFollowDetailsList({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
            });
        }
    }
}
