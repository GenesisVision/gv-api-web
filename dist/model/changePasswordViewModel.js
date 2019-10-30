import ApiClient from "../ApiClient";
export class ChangePasswordViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ChangePasswordViewModel()) {
        if (data) {
            if (data.hasOwnProperty('oldPassword')) {
                obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'string');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'string');
            }
        }
        return obj;
    }
}
