import ApiClient from "../ApiClient";
export class TwoFactorStatus {
    constructor() {
    }
    static constructFromObject(data, obj = new TwoFactorStatus()) {
        if (data) {
            if (data.hasOwnProperty('twoFactorEnabled')) {
                obj['twoFactorEnabled'] = ApiClient.convertToType(data['twoFactorEnabled'], 'boolean');
            }
        }
        return obj;
    }
}
