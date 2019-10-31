import ApiClient from "../ApiClient";
export class OrderProgramData {
    constructor(data) {
        this['title'] = data['title'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['color'] = data['color'];
        this['url'] = data['url'];
        this['logo'] = data['logo'];
    }
    static constructFromObject(data) {
        return new OrderProgramData({
            'title': ApiClient.convertToType(data['title'], 'string'),
            'level': ApiClient.convertToType(data['level'], 'number'),
            'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
            'color': ApiClient.convertToType(data['color'], 'string'),
            'url': ApiClient.convertToType(data['url'], 'string'),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
        });
    }
}
