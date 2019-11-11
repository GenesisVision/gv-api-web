import ApiClient from "../ApiClient";
export class ResetPasswordViewModel {
    constructor(data) {
        this['userId'] = data['userId'];
        this['code'] = data['code'];
        this['password'] = data['password'];
        this['confirmPassword'] = data['confirmPassword'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ResetPasswordViewModel({
                'userId': ApiClient.convertToType(data['userId'], 'string'),
                'code': ApiClient.convertToType(data['code'], 'string'),
                'password': ApiClient.convertToType(data['password'], 'string'),
                'confirmPassword': ApiClient.convertToType(data['confirmPassword'], 'string'),
            });
        }
    }
}
