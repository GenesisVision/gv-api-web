import ApiClient from "../ApiClient";
export class ManagerSimpleFund {
    constructor(data) {
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['color'] = data['color'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        return new ManagerSimpleFund({
            'id': ApiClient.convertToType(data['id'], 'string'),
            'title': ApiClient.convertToType(data['title'], 'string'),
            'color': ApiClient.convertToType(data['color'], 'string'),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
            'url': ApiClient.convertToType(data['url'], 'string'),
        });
    }
}
