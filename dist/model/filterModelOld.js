import ApiClient from "../ApiClient";
export class FilterModelOld {
    constructor() {
    }
    static constructFromObject(data, obj = new FilterModelOld()) {
        if (data) {
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
        }
        return obj;
    }
}
