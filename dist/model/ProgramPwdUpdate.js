import ApiClient from "../ApiClient";
export class ProgramPwdUpdate {
    constructor(data) {
        this['password'] = data['password'];
        this['twoFactorCode'] = data['twoFactorCode'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramPwdUpdate({
                'password': ApiClient.convertToType(data['password'], 'string'),
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
            });
        }
    }
}
