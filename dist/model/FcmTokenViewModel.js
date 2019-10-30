import ApiClient from "../ApiClient";
export class FcmTokenViewModel {
    static constructFromObject(data, obj = new FcmTokenViewModel()) {
        if (data) {
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'string');
            }
        }
        return obj;
    }
}
