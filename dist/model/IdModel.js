import ApiClient from "../ApiClient";
export class IdModel {
    constructor(data) {
        this['id'] = data['id'];
    }
    static constructFromObject(data) {
        return new IdModel({
            'id': ApiClient.convertToType(data['id'], 'string'),
        });
    }
}
