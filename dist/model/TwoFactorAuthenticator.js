import ApiClient from "../ApiClient";
export class TwoFactorAuthenticator {
    constructor(data) {
        this['sharedKey'] = data['sharedKey'];
        this['authenticatorUri'] = data['authenticatorUri'];
    }
    static constructFromObject(data) {
        return new TwoFactorAuthenticator({
            'sharedKey': ApiClient.convertToType(data['sharedKey'], 'string'),
            'authenticatorUri': ApiClient.convertToType(data['authenticatorUri'], 'string'),
        });
    }
}
