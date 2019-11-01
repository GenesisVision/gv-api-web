import ApiClient from "../ApiClient";
export class ExternalDetails {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['title'] = data['title'];
        this['address'] = data['address'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ExternalDetails({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'address': ApiClient.convertToType(data['address'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}
