import ApiClient from "../ApiClient";
export class FilterModel {
    constructor(data) {
        this['key'] = data['key'];
        this['title'] = data['title'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FilterModel({
                'key': ApiClient.convertToType(data['key'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
            });
        }
    }
}
