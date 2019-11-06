import ApiClient from "../ApiClient";
export class ExternalDetails {
    constructor(data) {
        this['title'] = data['title'];
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['hash'] = data['hash'];
        this['addressUrl'] = data['addressUrl'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ExternalDetails({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'hash': ApiClient.convertToType(data['hash'], 'string'),
                'addressUrl': ApiClient.convertToType(data['addressUrl'], 'string'),
            });
        }
    }
}
