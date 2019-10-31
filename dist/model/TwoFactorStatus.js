import ApiClient from "../ApiClient";
export class TwoFactorStatus {
    constructor(data) {
        this['twoFactorEnabled'] = data['twoFactorEnabled'];
    }
    static constructFromObject(data) {
        return new TwoFactorStatus({
            'twoFactorEnabled': ApiClient.convertToType(data['twoFactorEnabled'], 'boolean'),
        });
    }
}
