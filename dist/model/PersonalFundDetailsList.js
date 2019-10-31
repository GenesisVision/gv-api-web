import ApiClient from "../ApiClient";
export class PersonalFundDetailsList {
    constructor(data) {
        this['isOwnProgram'] = data['isOwnProgram'];
        this['isFavorite'] = data['isFavorite'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PersonalFundDetailsList({
                'isOwnProgram': ApiClient.convertToType(data['isOwnProgram'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
            });
        }
    }
}
