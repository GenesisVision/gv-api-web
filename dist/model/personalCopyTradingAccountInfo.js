import ApiClient from "../ApiClient";
export class PersonalCopyTradingAccountInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new PersonalCopyTradingAccountInfo()) {
        if (data) {
            if (data.hasOwnProperty('isOwnSignal')) {
                obj['isOwnSignal'] = ApiClient.convertToType(data['isOwnSignal'], 'boolean');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'boolean');
            }
        }
        return obj;
    }
}
