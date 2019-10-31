import ApiClient from "../ApiClient";
export class ExternalKeyAddViewModel {
    constructor(data) {
        this['title'] = data['title'];
        this['exchangeId'] = data['exchangeId'];
        this['key'] = data['key'];
        this['secret'] = data['secret'];
    }
    static constructFromObject(data) {
        return new ExternalKeyAddViewModel({
            'title': ApiClient.convertToType(data['title'], 'string'),
            'exchangeId': ApiClient.convertToType(data['exchangeId'], 'string'),
            'key': ApiClient.convertToType(data['key'], 'string'),
            'secret': ApiClient.convertToType(data['secret'], 'string'),
        });
    }
}
