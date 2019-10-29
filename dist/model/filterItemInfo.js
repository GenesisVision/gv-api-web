import ApiClient from "../ApiClient";
export class FilterItemInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new FilterItemInfo()) {
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
