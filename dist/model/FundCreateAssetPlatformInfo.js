import ApiClient from "../ApiClient";
export class FundCreateAssetPlatformInfo {
    constructor(data) {
        this['maxExitFee'] = data['maxExitFee'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundCreateAssetPlatformInfo({
                'maxExitFee': ApiClient.convertToType(data['maxExitFee'], 'number'),
            });
        }
    }
}
