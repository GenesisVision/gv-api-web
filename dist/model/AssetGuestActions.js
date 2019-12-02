import ApiClient from "../ApiClient";
export class AssetGuestActions {
    constructor(data) {
        this['canSubscribeToInternalSignal'] = data['canSubscribeToInternalSignal'];
        this['canSubscribeToExternalSignalPrivateAccount'] = data['canSubscribeToExternalSignalPrivateAccount'];
        this['canSubscribeToExternalSignalCommonAccount'] = data['canSubscribeToExternalSignalCommonAccount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AssetGuestActions({
                'canSubscribeToInternalSignal': ApiClient.convertToType(data['canSubscribeToInternalSignal'], 'boolean'),
                'canSubscribeToExternalSignalPrivateAccount': ApiClient.convertToType(data['canSubscribeToExternalSignalPrivateAccount'], 'boolean'),
                'canSubscribeToExternalSignalCommonAccount': ApiClient.convertToType(data['canSubscribeToExternalSignalCommonAccount'], 'boolean'),
            });
        }
    }
}
