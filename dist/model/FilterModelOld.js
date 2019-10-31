import ApiClient from "../ApiClient";
export class FilterModelOld {
    constructor(data) {
        this['key'] = data['key'];
        this['title'] = data['title'];
    }
    static constructFromObject(data) {
        return new FilterModelOld({
            'key': ApiClient.convertToType(data['key'], 'string'),
            'title': ApiClient.convertToType(data['title'], 'string'),
        });
    }
}
