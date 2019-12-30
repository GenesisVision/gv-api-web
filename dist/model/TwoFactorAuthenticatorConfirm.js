import ApiClient from "../ApiClient";
export class TwoFactorAuthenticatorConfirm {
    constructor(data) {
        this['code'] = data['code'];
        this['sharedKey'] = data['sharedKey'];
        this['password'] = data['password'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TwoFactorAuthenticatorConfirm({
                'code': ApiClient.convertToType(data['code'], 'string'),
                'sharedKey': ApiClient.convertToType(data['sharedKey'], 'string'),
                'password': ApiClient.convertToType(data['password'], 'string'),
            });
        }
    }
}
