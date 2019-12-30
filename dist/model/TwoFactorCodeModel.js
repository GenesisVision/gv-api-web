import ApiClient from "../ApiClient";
export class TwoFactorCodeModel {
    constructor(data) {
        this['twoFactorCode'] = data['twoFactorCode'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TwoFactorCodeModel({
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
            });
        }
    }
}
