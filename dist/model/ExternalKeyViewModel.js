import ApiClient from "../ApiClient";
export class ExternalKeyViewModel {
    constructor(data) {
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['dateAdd'] = data['dateAdd'];
        this['exchangeName'] = data['exchangeName'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ExternalKeyViewModel({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'dateAdd': ApiClient.convertToType(data['dateAdd'], 'Date'),
                'exchangeName': ApiClient.convertToType(data['exchangeName'], 'string'),
            });
        }
    }
}
