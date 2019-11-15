import ApiClient from "../ApiClient";
export class AssetGuestActions {
    constructor(data) {
        this['canSubscribeInternalSignal'] = data['canSubscribeInternalSignal'];
        this['canSubscribeExternalSignal'] = data['canSubscribeExternalSignal'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetGuestActions({
                'canSubscribeInternalSignal': ApiClient.convertToType(data['canSubscribeInternalSignal'], 'boolean'),
                'canSubscribeExternalSignal': ApiClient.convertToType(data['canSubscribeExternalSignal'], 'boolean'),
            });
        }
    }
}
