import ApiClient from "../ApiClient";
export class ExternalDetails {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['hash'] = data['hash'];
        this['addressUrl'] = data['addressUrl'];
        this['title'] = data['title'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ExternalDetails({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'hash': ApiClient.convertToType(data['hash'], 'string'),
                'addressUrl': ApiClient.convertToType(data['addressUrl'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
            });
        }
    }
}
