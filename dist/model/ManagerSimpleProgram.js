import ApiClient from "../ApiClient";
export class ManagerSimpleProgram {
    constructor(data) {
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['color'] = data['color'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ManagerSimpleProgram({
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}
