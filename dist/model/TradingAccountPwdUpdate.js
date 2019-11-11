import ApiClient from "../ApiClient";
export class TradingAccountPwdUpdate {
    constructor(data) {
        this['password'] = data['password'];
        this['twoFactorCode'] = data['twoFactorCode'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradingAccountPwdUpdate({
                'password': ApiClient.convertToType(data['password'], 'string'),
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
            });
        }
    }
}
