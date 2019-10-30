import ApiClient from "../ApiClient";
export class ExternalKeyViewModel {
    static constructFromObject(data, obj = new ExternalKeyViewModel()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('dateAdd')) {
                obj['dateAdd'] = ApiClient.convertToType(data['dateAdd'], 'Date');
            }
            if (data.hasOwnProperty('exchangeName')) {
                obj['exchangeName'] = ApiClient.convertToType(data['exchangeName'], 'string');
            }
        }
        return obj;
    }
}
