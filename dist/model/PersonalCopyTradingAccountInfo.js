import ApiClient from "../ApiClient";
export class PersonalCopyTradingAccountInfo {
    constructor(data) {
        this['isOwnSignal'] = data['isOwnSignal'];
        this['isFavorite'] = data['isFavorite'];
    }
    static constructFromObject(data) {
        return new PersonalCopyTradingAccountInfo({
            'isOwnSignal': ApiClient.convertToType(data['isOwnSignal'], 'boolean'),
            'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
        });
    }
}
