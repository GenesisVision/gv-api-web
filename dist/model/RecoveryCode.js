import ApiClient from "../ApiClient";
export class RecoveryCode {
    static constructFromObject(data, obj = new RecoveryCode()) {
        if (data) {
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'string');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'boolean');
            }
        }
        return obj;
    }
}
