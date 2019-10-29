import ApiClient from "../ApiClient";
export class PersonalFundDetailsList {
    constructor() {
    }
    static constructFromObject(data, obj = new PersonalFundDetailsList()) {
        if (data) {
            if (data.hasOwnProperty('isOwnProgram')) {
                obj['isOwnProgram'] = ApiClient.convertToType(data['isOwnProgram'], 'boolean');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'boolean');
            }
        }
        return obj;
    }
}
