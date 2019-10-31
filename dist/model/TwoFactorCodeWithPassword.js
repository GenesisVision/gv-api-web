import ApiClient from "../ApiClient";
export class TwoFactorCodeWithPassword {
    constructor(data) {
        this['twoFactorCode'] = data['twoFactorCode'];
        this['password'] = data['password'];
    }
    static constructFromObject(data) {
        return new TwoFactorCodeWithPassword({
            'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
            'password': ApiClient.convertToType(data['password'], 'string'),
        });
    }
}
