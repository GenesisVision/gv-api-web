import ApiClient from "../ApiClient";
export class ExternalKeyAddViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ExternalKeyAddViewModel()) {
        if (data) {
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('exchangeId')) {
                obj['exchangeId'] = ApiClient.convertToType(data['exchangeId'], 'string');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'string');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'string');
            }
        }
        return obj;
    }
}
