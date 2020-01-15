import ApiClient from "../ApiClient";
export class PlatformNews {
    constructor(data) {
        this['date'] = data['date'];
        this['title'] = data['title'];
        this['body'] = data['body'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['isHot'] = data['isHot'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformNews({
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'body': ApiClient.convertToType(data['body'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'isHot': ApiClient.convertToType(data['isHot'], 'boolean'),
            });
        }
    }
}
