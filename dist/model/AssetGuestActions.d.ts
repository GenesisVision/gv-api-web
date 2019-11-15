export declare class AssetGuestActions {
    'canSubscribeToInternalSignal': boolean;
    'canSubscribeToExternalSignalPrivateAccount': boolean;
    'canSubscribeToExternalSignalCommonAccount': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetGuestActions | undefined;
}
