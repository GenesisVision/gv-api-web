import ApiClient from "../ApiClient";
export class PasswordModel {
    constructor(data) {
        this['password'] = data['password'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PasswordModel({
                'password': ApiClient.convertToType(data['password'], 'string'),
            });
        }
    }
}
