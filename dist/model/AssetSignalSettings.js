import ApiClient from "../ApiClient";
export class AssetSignalSettings {
    constructor(data) {
        this['signalSuccessFee'] = data['signalSuccessFee'];
        this['signalVolumeFee'] = data['signalVolumeFee'];
        this['isActive'] = data['isActive'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetSignalSettings({
                'signalSuccessFee': ApiClient.convertToType(data['signalSuccessFee'], 'number'),
                'signalVolumeFee': ApiClient.convertToType(data['signalVolumeFee'], 'number'),
                'isActive': ApiClient.convertToType(data['isActive'], 'boolean'),
            });
        }
    }
}
