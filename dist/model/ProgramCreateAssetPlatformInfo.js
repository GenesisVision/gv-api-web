import ApiClient from "../ApiClient";
export class ProgramCreateAssetPlatformInfo {
    constructor(data) {
        this['maxEntryFee'] = data['maxEntryFee'];
        this['maxSuccessFee'] = data['maxSuccessFee'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramCreateAssetPlatformInfo({
                'maxEntryFee': ApiClient.convertToType(data['maxEntryFee'], 'number'),
                'maxSuccessFee': ApiClient.convertToType(data['maxSuccessFee'], 'number'),
            });
        }
    }
}
