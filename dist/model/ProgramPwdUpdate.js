import ApiClient from "../ApiClient";
export class ProgramPwdUpdate {
    static constructFromObject(data, obj = new ProgramPwdUpdate()) {
        if (data) {
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'string');
            }
        }
        return obj;
    }
}
