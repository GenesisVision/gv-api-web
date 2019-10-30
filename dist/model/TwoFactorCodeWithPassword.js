import ApiClient from "../ApiClient";
export class TwoFactorCodeWithPassword {
    static constructFromObject(data, obj = new TwoFactorCodeWithPassword()) {
        if (data) {
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'string');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
        }
        return obj;
    }
}
