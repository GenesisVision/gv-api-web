import ApiClient from "../ApiClient";
export class TwoFactorAuthenticatorConfirm {
    static constructFromObject(data, obj = new TwoFactorAuthenticatorConfirm()) {
        if (data) {
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'string');
            }
            if (data.hasOwnProperty('sharedKey')) {
                obj['sharedKey'] = ApiClient.convertToType(data['sharedKey'], 'string');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
        }
        return obj;
    }
}
