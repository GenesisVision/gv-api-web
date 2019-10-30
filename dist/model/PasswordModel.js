import ApiClient from "../ApiClient";
export class PasswordModel {
    static constructFromObject(data, obj = new PasswordModel()) {
        if (data) {
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
        }
        return obj;
    }
}
