import ApiClient from "../ApiClient";
export class PersonalProgramDetailsList {
    constructor(data) {
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['isReinvest'] = data['isReinvest'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalProgramDetailsList({
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'isReinvest': ApiClient.convertToType(data['isReinvest'], 'boolean'),
            });
        }
    }
}
