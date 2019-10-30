import ApiClient from "../ApiClient";
export class TwoFactorAuthenticator {
    constructor() {
    }
    static constructFromObject(data, obj = new TwoFactorAuthenticator()) {
        if (data) {
            if (data.hasOwnProperty('sharedKey')) {
                obj['sharedKey'] = ApiClient.convertToType(data['sharedKey'], 'string');
            }
            if (data.hasOwnProperty('authenticatorUri')) {
                obj['authenticatorUri'] = ApiClient.convertToType(data['authenticatorUri'], 'string');
            }
        }
        return obj;
    }
}
