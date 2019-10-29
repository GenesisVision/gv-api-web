import ApiClient from "../ApiClient";
export class TwoFactorCodeModel {
    constructor() {
    }
    static constructFromObject(data, obj = new TwoFactorCodeModel()) {
        if (data) {
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'string');
            }
        }
        return obj;
    }
}
