import ApiClient from "../ApiClient";
export class IdModel {
    static constructFromObject(data, obj = new IdModel()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
        }
        return obj;
    }
}
