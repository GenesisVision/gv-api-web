import ApiClient from "../ApiClient";
export class ResetPasswordViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ResetPasswordViewModel()) {
        if (data) {
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'string');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'string');
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
