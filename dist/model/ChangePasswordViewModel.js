import ApiClient from "../ApiClient";
export class ChangePasswordViewModel {
    constructor(data) {
        this['oldPassword'] = data['oldPassword'];
        this['password'] = data['password'];
        this['confirmPassword'] = data['confirmPassword'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ChangePasswordViewModel({
                'oldPassword': ApiClient.convertToType(data['oldPassword'], 'string'),
                'password': ApiClient.convertToType(data['password'], 'string'),
                'confirmPassword': ApiClient.convertToType(data['confirmPassword'], 'string'),
            });
        }
    }
}
