import ApiClient from "../ApiClient";
export class FollowCreateAssetPlatformInfo {
    constructor(data) {
        this['minVolumeFee'] = data['minVolumeFee'];
        this['maxVolumeFee'] = data['maxVolumeFee'];
        this['minSuccessFee'] = data['minSuccessFee'];
        this['maxSuccessFee'] = data['maxSuccessFee'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowCreateAssetPlatformInfo({
                'minVolumeFee': ApiClient.convertToType(data['minVolumeFee'], 'number'),
                'maxVolumeFee': ApiClient.convertToType(data['maxVolumeFee'], 'number'),
                'minSuccessFee': ApiClient.convertToType(data['minSuccessFee'], 'number'),
                'maxSuccessFee': ApiClient.convertToType(data['maxSuccessFee'], 'number'),
            });
        }
    }
}
