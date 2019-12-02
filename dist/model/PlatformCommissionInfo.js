import ApiClient from "../ApiClient";
export class PlatformCommissionInfo {
    constructor(data) {
        this['investment'] = data['investment'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformCommissionInfo({
                'investment': ApiClient.convertToType(data['investment'], 'number'),
            });
        }
    }
}
